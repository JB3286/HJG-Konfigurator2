package com.hgj.configurator.controller;

import com.hgj.configurator.model.*;
import com.hgj.configurator.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.LinkedList;
import java.util.List;

@RestController
@CrossOrigin("*")
public class Test {

    @Autowired
    private ConfigurationRepository configurationRepository;

    @Autowired
    private PropertyRepository propertyRepository;

    @Autowired
    private RuleRepository ruleRepository;

    @Autowired
    private RuleSetRepository ruleSetRepository;

    @Autowired
    private ValueRepository valueRepository;

    @GetMapping("/insert")
    public Configuration insertConfiguration() {
        List<Property> properties = new LinkedList<Property>();
        List<Value> values = new LinkedList<Value>();
        List<Rule> rules = new LinkedList<Rule>();
        List<RuleSet> set1 = new LinkedList<RuleSet>();
        List<RuleSet> set2 = new LinkedList<RuleSet>();

        values.add(valueRepository.save(new Value("0")));
        values.add(valueRepository.save(new Value("1")));

        properties.add(propertyRepository.save(new Property("motor", "DROPDOWN", "", values)));
        properties.add(propertyRepository.save(new Property("width", "INPUT_NUMBER")));
        properties.add(propertyRepository.save(new Property("height", "INPUT_NUMBER")));
        properties.add(propertyRepository.save(new Property("depth", "INPUT_NUMBER")));
        properties.add(propertyRepository.save(new Property("material", "INPUT_STRING")));

        set1.add(ruleSetRepository.save(new RuleSet(null, "{width}+{height}")));
        set2.add(ruleSetRepository.save(new RuleSet(null, "{motor}")));
        rules.add(ruleRepository.save(new Rule("square meter", set1)));
        rules.add(ruleRepository.save(new Rule("with motor", set2)));

        Configuration configuration = new Configuration("Fliegengitter", rules, properties);
        configurationRepository.save(configuration);
        return configuration;
    }

    @GetMapping("/delete")
    public String deleteConfiguration() {
        configurationRepository.deleteAll();
        return "deleted";
    }

    @GetMapping("/all")
    public List<Configuration> getConfiguration() {
        return configurationRepository.findAll();
    }
}