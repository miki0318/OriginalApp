package com.example.domain.service.impl;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.example.domain.model.Login;
import com.example.domain.service.LoginService;
import com.example.repository.LoginRepository;

public class LoginServiceImpl implements LoginService{
	
	@Autowired
	private LoginRepository loginrepository;

	@Override
	/**トップ画面初期表示必要情報取得*/
	public List<Login> selectLoginInfo(int userId){
		Date now = new Date();
		SimpleDateFormat f = new SimpleDateFormat("yyyy/MM/dd");
		String today1 = f.format(now);
		return loginrepository.selectLoginInfo(userId, today1);
	}
	
	
}