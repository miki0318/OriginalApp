package com.example.domain.service;

public interface NewAccService {
	/**ユーザー名・パスワード・アドレス・生年月日登録*/
	public void insertNewAcc(String userName, String password, String address, String birthday);
}
