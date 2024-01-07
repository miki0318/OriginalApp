package com.example.demo.login;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

/**ログイン実装コントローラー*/
@Controller
public class LoginController {
	
	@GetMapping("/login")
	public String login() {
		return "login";
	}
}
