package com.hgj.configurator.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document
public class Configuration {
    @Id
    String id;

    public String name;
    @DBRef
    public List<Rule> rules;
    @DBRef
    public List<Property> properties;

    public Configuration() {
    }

    public Configuration(String name, List<Rule> rules, List<Property> properties) {
        this.name = name;
        this.rules = rules;
        this.properties = properties;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Property> getProperties() {
        return this.properties;
    }

    public void setProperties(List<Property> properties) {
        this.properties = properties;
    }

    public List<Rule> getRules() {
        return this.rules;
    }

    public void setName(List<Rule> rules) {
        this.rules = rules;
    }
}
