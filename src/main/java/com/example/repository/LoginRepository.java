package com.example.repository;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.data.jpa.repository.JpaRepository;

import com.example.domain.model.Login;
import com.example.domain.model.UserLogin;

@Mapper
public interface LoginRepository  extends JpaRepository<UserLogin, Integer> {	
	/**ユーザー検索*/
 	public UserLogin selectLogin(String address, String password);
 	
    /**初期表示情報取得*/
	public List<Login> selectLoginInfo(int userId, String today);	
}
