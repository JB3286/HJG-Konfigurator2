package com.hgj.configurator.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document
public class Rule {
    @Id
    String id;
    public String name;

    @DBRef
    public List<RuleSet> set;

    public Rule() {
    }

    public Rule(String name, List<RuleSet> set) {
        this.name = name;
        this.set = set;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<RuleSet> getSet() {
        return set;
    }

    public void setSet(List<RuleSet> set) {
        this.set = set;
    }
}
