package com.hgj.configurator.repository;

import com.hgj.configurator.model.Value;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "values", path = "values")
public interface ValueRepository extends MongoRepository<Value, String> {
}