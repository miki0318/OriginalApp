package com.example.domain.service;

import java.util.List;

import com.example.domain.model.Login;

public interface LoginService {
	/**トップ画面初期表示必要情報取得*/
	public List<Login> selectLoginInfo(int userId);	
}