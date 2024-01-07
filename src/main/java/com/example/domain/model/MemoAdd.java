package com.example.domain.model;

/**
 * ユーザー情報
 * @author  Miki Osaki
 * @since   2023/08/21
 * @version 1.0.0
 */

public class MemoAdd {
	private String memoName;
	private int userId;
	
	public String getMemoName() {
		return memoName;
	}
	public void setMemoName(String memoName) {
		this.memoName = memoName;
	}
	public int getUserId() {
		return userId;
	}
	public void setUserId(int userId) {
		this.userId = userId;
	}

}
