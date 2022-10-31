package com.hgj.configurator.repository;

import com.hgj.configurator.model.Configuration;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "configuration", path = "configuration")
public interface ConfigurationRepository extends MongoRepository<Configuration, String> {
}