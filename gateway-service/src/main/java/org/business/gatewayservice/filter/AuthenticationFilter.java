package org.business.gatewayservice.filter;

import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang.BooleanUtils;
import org.apache.http.HttpHeaders;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.cloud.client.ServiceInstance;
import org.springframework.cloud.client.discovery.DiscoveryClient;
import org.springframework.cloud.gateway.filter.GatewayFilter;
import org.springframework.cloud.gateway.filter.factory.AbstractGatewayFilterFactory;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import java.util.List;
import java.util.Objects;

@Slf4j
@Component
public class AuthenticationFilter extends AbstractGatewayFilterFactory<AuthenticationFilter.Config> {

    private final RouteValidator validator;
    private final RestTemplate restTemplate;
    private final String userSvcValidateUri;
    private final DiscoveryClient discoveryClient;

    public AuthenticationFilter(
            RouteValidator validator,
            RestTemplate restTemplate,
            DiscoveryClient discoveryClient,
            @Value("${apis.user-svc.validate}") String userSvcValidateUri
    ) {
        super(Config.class);
        this.validator = validator;
        this.restTemplate = restTemplate;
        this.discoveryClient = discoveryClient;
        this.userSvcValidateUri = userSvcValidateUri;
    }

    @Override
    public GatewayFilter apply(Config config) {
        return ((exchange, chain) -> {
            if (validator.isSecured.test(exchange.getRequest())) {

                //header contains token or not
                if (!exchange.getRequest().getHeaders().containsKey(HttpHeaders.AUTHORIZATION)) {
                    throw new RuntimeException("missing authorization header");
                }

                String username = Objects.requireNonNull(exchange.getRequest().getHeaders().get("username")).get(0);
                String authHeader = Objects.requireNonNull(exchange.getRequest().getHeaders().get(HttpHeaders.AUTHORIZATION)).get(0);
                if (authHeader != null && authHeader.startsWith("Bearer ")) {
                    authHeader = authHeader.substring(7);
                }

                try {

                    List<ServiceInstance> instances = discoveryClient.getInstances("user-service");
                    if (instances != null && !instances.isEmpty()) {

                        String uri = instances.get(0).getUri() + userSvcValidateUri;
                        System.out.println(uri);

                        UserLoginDetailsDTO loginDetailsDTO = new UserLoginDetailsDTO();
                        loginDetailsDTO.setToken(authHeader);
                        loginDetailsDTO.setUsername(username);

                        if (BooleanUtils.isTrue(restTemplate.postForObject(uri, loginDetailsDTO, Boolean.class))) {
                            return chain.filter(exchange);
                        }
                    }
                } catch (Exception e) {
                    throw new RuntimeException("un authorized access to application");
                }
                throw new RuntimeException("un authorized access to application");
            }
            return chain.filter(exchange);
        });
    }

    public static class Config {}
}
