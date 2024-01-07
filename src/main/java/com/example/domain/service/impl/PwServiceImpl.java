package com.example.domain.service.impl;

import org.springframework.beans.factory.annotation.Autowired;

import com.example.domain.model.Pw;
import com.example.domain.service.PwService;
import com.example.repository.PwRepository;

public class PwServiceImpl implements PwService {
	
	@Autowired
	private Pw pw;
	
	@Autowired
	private PwRepository pwrepository;
	
	@Override
	/**パスワード更新*/
	public void updateUsers(String password, int userId) {
		pw.setPassword(password);
		pw.setUserId(userId);
		
		pwrepository.updatePassword(pw);
	}
}
