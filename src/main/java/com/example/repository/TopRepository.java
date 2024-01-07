package com.example.repository;

import org.apache.ibatis.annotations.Mapper;

import com.example.domain.model.Top;

@Mapper
public interface TopRepository {
	/**メモ内容更新*/
	public void updateTop(Top top);
}
