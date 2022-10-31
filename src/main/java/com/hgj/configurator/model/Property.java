package com.hgj.configurator.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document
public class Property {
    @Id
    String id;
    public String name;
    public String inputType;
    public String currentValue;
    public String unit;

    @DBRef
    public List<Value> values;

    public Property() {
    }

    public Property(String name, String inputType) {
        this.name = name;
        this.inputType = inputType;
    }

    public Property(String name, String inputType, String currentValue, List<Value> values) {
        this.name = name;
        this.inputType = inputType;
        this.currentValue = currentValue;
        this.name = name;
        this.values = values;
    }

    public Property(String name, String inputType, String currentValue, List<Value> values, String unit) {
        this.name = name;
        this.inputType = inputType;
        this.currentValue = currentValue;
        this.name = name;
        this.values = values;
        this.unit = unit;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getInputType() {
        return inputType;
    }

    public void setInputType(String inputType) {
        this.inputType = inputType;
    }

    public String getCurrentValue() {
        return currentValue;
    }

    public void setCurrentValue(String currentValue) {
        this.currentValue = currentValue;
    }

    public String getUnit() {
        return unit;
    }

    public void setUnit(String unit) {
        this.unit = unit;
    }

    public List<Value> getValues() {
        return values;
    }

    public void setValues(List<Value> values) {
        this.values = values;
    }
}