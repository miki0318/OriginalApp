package com.example.domain.model;

/**
 * ユーザー情報
 * @author  Miki Osaki
 * @since   2023/08/21
 * @version 1.0.0
 */

public class Pw {
	private String password;
	private int userId;

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}
}
