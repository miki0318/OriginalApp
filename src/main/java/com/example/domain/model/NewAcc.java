package com.example.domain.model;

/**
 * ユーザー情報
 * @author  Miki Osaki
 * @since   2023/08/21
 * @version 1.0.0
 */

public class NewAcc {
	private String userName;
	private String address;
	private String password;
	private String birthday;

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}
	
	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getBirthday() {
		return birthday;
	}

	public void setBirthday(String birthday) {
		this.birthday = birthday;
	}

}
