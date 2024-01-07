package com.example.domain.service.impl;

import org.springframework.beans.factory.annotation.Autowired;

import com.example.domain.model.Setting;
import com.example.domain.service.SettingService;
import com.example.repository.SettingRepository;

public class SettingServiceImpl implements SettingService {
	
	@Autowired
	private Setting setting;
	@Autowired
	private SettingRepository settingrepository;
	
	@Override
	/**ユーザー名・アイコン・言語・フォント・フォントサイズ更新*/
	public void updateSetting(String userName, long icon, byte languague, byte font, byte fontSize, int userId) {
		setting.setUserName(userName);
		setting.setIcon(icon);
		setting.setLanguague(languague);
		setting.setFont(font);
		setting.setFontSize(fontSize);
		setting.setUserId(userId);
		
		settingrepository.updateSetting(setting);
		settingrepository.updateUsers(setting);
	}
}
