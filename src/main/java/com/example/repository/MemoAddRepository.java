package com.example.repository;

import org.apache.ibatis.annotations.Mapper;

import com.example.domain.model.MemoAdd;

@Mapper
public interface MemoAddRepository {
	/**メモ追加*/
	public void memoAdd(MemoAdd memoadd);
}
