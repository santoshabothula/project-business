package org.business.commonservice.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.*;

import java.sql.Blob;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(callSuper = true)
@Entity
@Table(name = "mst_app_label_config")
public class MstAppLabelConfigEntity extends BaseEntity {

    @Id
    private Long id;

    @Column(name = "page")
    private String page;

    @Column(name = "type")
    private String type;

    @Column(name = "label")
    private String label;

    @Column(name = "image")
    private Blob image;

    @Column(name = "hover_text")
    private String hoverText;

    @Column(name = "color")
    private String color;

    @Column(name = "font")
    private String font;

    @Column(name = "margin")
    private String margin;

    @Column(name = "inline_style")
    private String inlineStyle;
}
