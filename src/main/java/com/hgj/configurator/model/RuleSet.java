package com.hgj.configurator.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class RuleSet {
    @Id
    String id;
    public String condition;
    public String rule;

    public RuleSet() {
    }

    public RuleSet(String condition, String rule) {
        this.condition = condition;
        this.rule = rule;
    }

    public String getCondition() {
        return condition;
    }

    public void setCondition(String condition) {
        this.condition = condition;
    }

    public String getRule() {
        return rule;
    }

    public void setRule(String rule) {
        this.rule = rule;
    }
}
