package com.example.domain.service.impl;

import org.springframework.beans.factory.annotation.Autowired;

import com.example.domain.model.MemoList;
import com.example.domain.service.MemoListService;
import com.example.repository.MemoListRepository;

public class MemoListServiceImpl implements MemoListService{
	
	@Autowired
	private MemoList memolist;
	@Autowired
	private MemoListRepository memolistrepository;
	
	@Override
	/**アクティブメモ更新*/
	public void updateMemoActive(int memoId,int userId){
		memolist.setMemoId(memoId);
		memolist.setUserId(userId);

		memolistrepository.updateMemoActive(memolist);
	}
	
	@Override
	/**承認ユーザー追加*/
	public void insertUser(int memoId, int userId) {
		memolist.setMemoId(memoId);
		memolist.setUserId(userId);

		memolistrepository.insertUser(memolist);
	}
	
	@Override
	/**承認待ちユーザー削除*/
	public void deleteUser(int memoId, int userId) {
		memolist.setMemoId(memoId);
		memolist.setUserId(userId);

		memolistrepository.deleteUser(memolist);
	}
}
