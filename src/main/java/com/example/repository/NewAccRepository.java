package com.example.repository;

import org.apache.ibatis.annotations.Mapper;

import com.example.domain.model.NewAcc;

@Mapper
public interface NewAccRepository {
	/**新アカウント登録*/
	public void insertNewAcc(NewAcc newacc);
}
