package org.business.commonservice.dto;

import lombok.*;

import java.sql.Blob;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(callSuper = true)
public class AppLabelConfigDTO extends BaseDTO {
    private Long id;
    private String page;
    private String type;
    private String label;
    private Blob image;
    private String hoverText;
    private String color;
    private String font;
    private String margin;
    private String inlineStyle;
}
