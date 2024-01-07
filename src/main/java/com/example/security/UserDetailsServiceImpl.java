package com.example.security;

import java.util.ArrayList;
import java.util.Collection;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.example.domain.model.UserLogin;
import com.example.repository.LoginRepository;

//サービスクラス

@Service
public class UserDetailsServiceImpl implements UserDetailsServiceCust {
    private final LoginRepository loginRepository;    
    
    public UserDetailsServiceImpl(LoginRepository loginRepository) {
        this.loginRepository = loginRepository;        
    }
    
    @Override
    public UserDetails loadUser(String address, String password) throws UsernameNotFoundException {  
        try {
            UserLogin userlogin = loginRepository.selectLogin(address, password);
            String userName = userlogin.getUserName();
            Collection<GrantedAuthority> authorities = new ArrayList<>();         
            authorities.add(new SimpleGrantedAuthority(userName));
            return new UserDetailsImpl(userlogin, authorities);
        } catch (Exception e) {
            throw new UsernameNotFoundException("ユーザーが見つかりませんでした。");
        }
    }   
}

