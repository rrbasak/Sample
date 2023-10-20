package com.project.backend.service.impl;

import java.io.IOException;
import java.sql.Timestamp;
import java.util.List;

import com.project.backend.Entity.Images;
import com.project.backend.Entity.Users;
import com.project.backend.Repository.ImageRepo;
import com.project.backend.Repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;


import jakarta.transaction.Transactional;

@Service
@Transactional
public class Servo {
	@Autowired
	UserRepo userRepo;
	@Autowired
	ImageRepo imgRepo;
	public void save(Users input, MultipartFile image) {
		Images data = new Images();
		try {
			data.setSize(image.getSize());
			data.setContentType(image.getContentType());
			data.setData(image.getBytes());
			imgRepo.save(data);
			input.setImage(data);
			userRepo.save(input);
		} catch (IOException e) {
			e.printStackTrace();
		}
		
	}
	public Users getUsers(String uname) {
		return userRepo.findByUserName(uname).get(0);
	}
	public Users getUsers(Integer id) {
		return userRepo.findById(id).get();
	}
	
	public void savex(Users input) throws IOException {
		Images data = new Images();
		userRepo.save(input);
		
	}
	
	public Users getusername(String username) {
		return userRepo.findByUserName(username).get(0);
	}
	public Users getUsersingle(String username,String password){
		return userRepo.findByUserNameAndPassword(username,password).get(0);
	}
	public void UpdateImage(Integer id,MultipartFile image) {
		try {
			Users data = userRepo.findById(id).get();
			Images imageNew = new Images();
			imageNew.setSize(image.getSize());
			imageNew.setContentType(image.getContentType());
			imageNew.setData(image.getBytes());
			imgRepo.delete(data.getImage());
			imgRepo.save(imageNew);
			data.setImage(imageNew);
			userRepo.save(data);
		} catch (IOException e) {
			e.printStackTrace();
		}
		
	}
	public List<Users> getAll() {
		return userRepo.findAll();
	}
	public void updateUser(Users input) throws Exception {
		Users data = userRepo.findById(input.getId()).get();
		if(data!=null) {

			data.setUpdatedat(new Timestamp(System.currentTimeMillis()));
			data.setDob(input.getDob());
			data.setPassword(input.getPassword());
			data.setPhno(input.getPhno());
			data.setName(input.getName());
			data.setAbout(input.getAbout());
			data.setDesx(input.getDesx());
			userRepo.save(input);			
		}else {
			throw new Exception("Wrong Id");
		}
	}
	public Images getFile(Integer id) {
        return userRepo.findById(id).get().getImage();
    }
	public void deleteUser(Integer id) {
		try {
			Users dataUsers = userRepo.findById(id).get();
			userRepo.delete(dataUsers);
		} catch (Exception e) {
			e.printStackTrace();
		}
		
	}
}
