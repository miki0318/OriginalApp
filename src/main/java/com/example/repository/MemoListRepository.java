package com.example.repository;

import org.apache.ibatis.annotations.Mapper;

import com.example.domain.model.MemoList;

@Mapper
public interface MemoListRepository {
	/**アクティブメモ更新*/
	public void updateMemoActive(MemoList memolist);
	
	/**承認ユーザー追加*/
	public void insertUser(MemoList memolist);
	
	/**承認待ちユーザー削除*/
	public void deleteUser(MemoList memolist);
}
