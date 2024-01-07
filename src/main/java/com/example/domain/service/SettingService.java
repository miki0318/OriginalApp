package com.example.domain.service;

public interface SettingService {
	/**ユーザー名・アイコン・言語・フォント・フォントサイズ更新*/
	public void updateSetting(String userName, long icon, byte languague, byte font, byte fontSize, int userId);
}