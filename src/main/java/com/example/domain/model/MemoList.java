package com.example.domain.model;

/**
 * ユーザー情報
 * @author  Miki Osaki
 * @since   2023/08/21
 * @version 1.0.0
 */

public class MemoList {
	private int memoId;
	private int userId;

	public int getMemoId() {
		return memoId;
	}

	public void setMemoId(int memoId) {
		this.memoId = memoId;
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

}
