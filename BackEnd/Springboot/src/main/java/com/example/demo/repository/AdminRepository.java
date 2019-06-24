package com.example.demo.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Admin;

@Repository
public interface AdminRepository extends MongoRepository<Admin, String>{
   public Admin findByuserName(String userName);
}
