package com.hgj.configurator.repository;

import com.hgj.configurator.model.Configuration;
import com.hgj.configurator.model.RuleSet;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "rulesets", path = "rulesets")
public interface RuleSetRepository extends MongoRepository<RuleSet, String> {
}