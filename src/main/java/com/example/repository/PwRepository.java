package com.example.repository;

import org.apache.ibatis.annotations.Mapper;

import com.example.domain.model.Pw;

@Mapper
public interface PwRepository {
		/**パスワード更新*/
		public void updatePassword(Pw pw);
}
