package com.example.security;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

public interface UserDetailsServiceCust {
	/**ユーザー情報取得*/
	UserDetails loadUser(String address, String password) throws UsernameNotFoundException;
}
