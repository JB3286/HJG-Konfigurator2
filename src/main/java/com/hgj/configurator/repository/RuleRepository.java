package com.hgj.configurator.repository;

import com.hgj.configurator.model.Rule;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "rules", path = "rules")
public interface RuleRepository extends MongoRepository<Rule, String> {
}