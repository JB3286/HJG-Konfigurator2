package com.hgj.configurator.repository;

import com.hgj.configurator.model.Property;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "properties", path = "properties")
public interface PropertyRepository extends MongoRepository<Property, String> {
}