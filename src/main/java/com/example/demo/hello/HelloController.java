package com.example.demo.hello;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HelloController {
//	@Autowired
//	private LoginService loginService;
	
	@GetMapping("/hello")
	public String getHello() {
//		hello.htmlに画面遷移
		return "login";
	}
	
	@GetMapping("/hello/top")
	public String gettop(int userId){	
//		loginService.selectLoginInfo(userId);
		return "top";
	}
}
