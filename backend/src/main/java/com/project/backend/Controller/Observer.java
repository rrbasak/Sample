package com.project.backend.Controller;
import java.io.IOException;
import java.sql.Timestamp;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.List;
import com.project.backend.Entity.Images;
import com.project.backend.Entity.Users;
import com.project.backend.service.impl.Servo;
import com.project.backend.vo.Filesout;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.scheduling.annotation.Async;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
@RestController
@CrossOrigin("*")
public class Observer {
	@Autowired
	Servo samp;
	@PostMapping(value = "/user/save",consumes = MediaType.MULTIPART_FORM_DATA_VALUE, produces =MediaType.APPLICATION_JSON_VALUE)
	@Async
	public void save(@RequestPart("dob") String dob, @RequestPart("email") String email,
			@RequestPart("mobileno") String phno, @RequestPart("username") String username,
			@RequestPart("password") String password, @RequestPart("type") String type,
			@RequestPart("deg") String desx, @RequestPart("about") String about,@RequestPart("address") String address,
			@RequestPart("fb") String fb,@RequestPart("insta") String insta,@RequestPart("twitter") String twitter, @RequestPart("name") String name,
			@RequestParam("file") MultipartFile file) {
		Users data = new Users();
		try {
			System.out.print(dob+username+password+type+desx+about+name+file.getSize());
			data.setCreatedat(new Timestamp(System.currentTimeMillis()));
			data.setUpdatedat(new Timestamp(System.currentTimeMillis()));
			data.setDob(new SimpleDateFormat("yyyy-MM-dd").parse(dob));
			data.setEmail(email);
			data.setPhno(phno);
			data.setAddress(address);
			data.setFb(fb);
			data.setInsta(insta);
			data.setTwitter(twitter);
			data.setUserName(username);
			data.setPassword(password);
			data.setType(type);
			data.setAbout(about);
			data.setDesx(desx);
			data.setName(name);
			samp.save(data, file);
		} catch (ParseException e) {
			e.printStackTrace();
		}
	}
	@GetMapping(value = "/user/getall")
	public List<Users> name() {
		return samp.getAll();
	}
	@Async
	@GetMapping(value="/user/get/{username}")
	public Users getuser(@PathVariable("username") String username) {
		return samp.getusername(username);
	}
	@DeleteMapping(value = "/user/delete/{id}")
	public void dell(@RequestParam("id") String id) {
		samp.deleteUser(Integer.parseInt(id));
	}
	@PutMapping(value = "/user/update/{userName}")
	@Async
	public void UpdateUser(@RequestPart(name="dob",required = false) String dob, @RequestPart(name="email",required = false) String email,
			@RequestPart(name="phno",required = false) String phno, @PathVariable(name="userName") String username,
			@RequestPart(name="password",required = false) String password,@RequestPart(name="id",required = false) Integer id,
			@RequestPart(name="desx",required = false) String desx, @RequestPart(name="about",required = false) String about,@RequestPart("address") String address ,@RequestPart(name="name",required = false) String name) {
		Users data = samp.getUsers(username);
		try {
			data.setUpdatedat(new Timestamp(System.currentTimeMillis()));
			if(dob!=null)
				data.setDob(new SimpleDateFormat("yyyy-MM-dd").parse(dob));
			if(email!=null)
				data.setEmail(email);
			if(address != null)
				data.setAddress(address);
			if(phno!=null)
				data.setPhno(phno);
			data.setUserName(username);
			if(password!=null)
				data.setPassword(password);
			if(about!=null)
				data.setAbout(about);
			if(desx!=null)
				data.setDesx(desx);
			if(name!=null)
				data.setName(name);
			samp.savex(data);
		} catch (ParseException | IOException e) {
			e.printStackTrace();
		}
	}
	@Async
	@GetMapping("/user/get/file/{id}")
	public ResponseEntity<byte[]> getFile(@PathVariable Integer id) {
		byte[] fileEntity = samp.getFile(id).getData();
		if (fileEntity == null) {
			return ResponseEntity.notFound().build();
		}
		return ResponseEntity.ok().contentType(MediaType.IMAGE_JPEG).body(fileEntity);
	}
}
