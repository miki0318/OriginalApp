package com.example.security;

 import java.util.Collection;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.example.domain.model.UserLogin;

 public class UserDetailsImpl implements UserDetails {
     private final UserLogin userlogin;
     private final Collection<GrantedAuthority> authorities;
     
     public UserDetailsImpl(UserLogin userlogin, Collection<GrantedAuthority> authorities) {
         this.userlogin = userlogin;
         this.authorities = authorities;
     }
     
     public UserLogin getUser() {
         return userlogin;
     }
     
     // ハッシュ化済みのパスワードを返す
     @Override
     public String getPassword() {
         return userlogin.getPassword();
     }
     
     // ログイン時に利用するユーザー名（メールアドレス）を返す
     @Override
     public String getUsername() {
         return userlogin.getAddress();
     }
     
     // ロールのコレクションを返す
     @Override
     public Collection<? extends GrantedAuthority> getAuthorities() {
         return authorities;
     }
     
     // アカウントが期限切れでなければtrueを返す
     @Override
     public boolean isAccountNonExpired() {
         return true;
     }
     
     // ユーザーがロックされていなければtrueを返す
     @Override
     public boolean isAccountNonLocked() {
         return true;
     }    
     
     // ユーザーのパスワードが期限切れでなければtrueを返す
     @Override
     public boolean isCredentialsNonExpired() {
         return true;
     }
     
     // ユーザーが有効であればtrueを返す
     @Override
     public boolean isEnabled() {
         return userlogin.getEnabled();
     }
}
