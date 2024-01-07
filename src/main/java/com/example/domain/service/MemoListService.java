package com.example.domain.service;

public interface MemoListService {
	/**アクティブメモ更新*/
	public void updateMemoActive(int memoId,int userId);
	
	/**承認ユーザー追加*/
	public void insertUser(int memoId, int userId);
	
	/**承認待ちユーザー削除*/
	public void deleteUser(int memoId, int userId);
}
