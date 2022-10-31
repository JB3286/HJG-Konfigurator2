package com.hgj.configurator.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Value {
    @Id
    String id;
    public String value;
    public String image;

    public Value() {
    }

    public Value(String value) {
        this.value = value;
    }

    public Value(String value, String image) {
        this.value = value;
        this.image = image;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }
}
