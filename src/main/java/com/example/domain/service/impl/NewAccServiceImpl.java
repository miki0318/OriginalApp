package com.example.domain.service.impl;

import org.springframework.beans.factory.annotation.Autowired;

import com.example.domain.model.NewAcc;
import com.example.domain.service.NewAccService;
import com.example.repository.NewAccRepository;

public class NewAccServiceImpl implements NewAccService {
	
	@Autowired
	private NewAcc newacc;
	@Autowired
	private NewAccRepository newaccrepository;
	
	@Override
	/**ユーザー名・パスワード・アドレス・生年月日登録*/
	public void insertNewAcc(String userName, String password, String address, String birthday) {
		newacc.setUserName(userName);
		newacc.setAddress(address);
		newacc.setPassword(password);
		newacc.setBirthday(birthday);
		
		newaccrepository.insertNewAcc(newacc);
	}
}
