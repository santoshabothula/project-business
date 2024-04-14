package org.business.gatewayservice.filter;

import org.springframework.http.server.reactive.ServerHttpRequest;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.function.Predicate;

@Component
public class RouteValidator {

    public static final List<String> unprotectedURLs = List.of("/user-svc/user/save", "/user-svc/user/login", "/user-svc/user/forgot-password", "/eureka");

    public Predicate<ServerHttpRequest> isSecured = request -> unprotectedURLs.stream().noneMatch(uri -> request.getURI().getPath().contains(uri));

}
