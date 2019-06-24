package com.example.demo.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Admin;
import com.example.demo.repository.AdminRepository;

@CrossOrigin(origins = { "http://localhost:1234", "http://localhost:3000" })
@RestController
@RequestMapping("/admins")
public class AdminController {

	@Autowired
	private AdminRepository repository;

	@PostMapping("/")
	public Map<String, String> createAdmin(@Valid @RequestBody Admin admin) {
		HashMap<String, String> map = new HashMap<>();
		if (repository.findByuserName(admin.getUserName()) == null) {
			repository.save(admin);
			map.put("status", "200");
			map.put("message", "Admin Registered Succesfully !");
		} else {
			map.put("status", "500");
			map.put("message", "Username is Already Taken !");
		}
		return map;
	}

	@GetMapping("/")
	public List<Admin> getAllAdmins() {
		return repository.findAll();
	}
	
	@PostMapping("/login")
	public Map<String, String> loginAdmin(@Valid @RequestBody Admin admin) {
		HashMap<String, String> map = new HashMap<>();
		Admin searchAdmin = repository.findByuserName(admin.getUserName());
		if (searchAdmin != null && searchAdmin.getPassword().toString().equals(admin.getPassword().toString())) {
			map.put("login", "Success");
			map.put("Username", searchAdmin.getUserName());
			map.put("Type", "Admin");
		} else {
			map.put("login", "Fail");
			map.put("Username", "");
			map.put("Type", "");
		}
		return map;
	}

	@RequestMapping(value = "/{Username}", method = RequestMethod.GET)
	public Admin getUsername(@PathVariable("Username") String Username) {
		return repository.findByuserName(Username);
	}

	@RequestMapping(value = "/{Username}", method = RequestMethod.PUT)
	public void modifyAdminByUusername(@PathVariable("Username") String Username, @Valid @RequestBody Admin admin) {
		Admin oldAdmin = repository.findByuserName(Username);
		oldAdmin.setPassword(admin.getPassword());
		oldAdmin.setEmail(admin.getEmail());
		repository.save(oldAdmin);
	}

	@DeleteMapping("/{Username}")
	public String deleteAdmin(@PathVariable String Username) {
		try {
			repository.delete(repository.findByuserName(Username));
			return ("Admin of Username " + Username + " Successfully Deleted!");
		} catch (Exception e) {
			return (e.toString());
		}
	}

}
