package com.example.repository;

import org.apache.ibatis.annotations.Mapper;

import com.example.domain.model.Setting;

@Mapper
public interface SettingRepository {
	/**設定情報更新*/
	public void updateSetting(Setting setting);
	/**ユーザー情報更新*/
	public void updateUsers(Setting setting);
}
