package com.example.domain.model;

/**
 * ユーザー情報
 * @author  Miki Osaki
 * @since   2023/08/21
 * @version 1.0.0
 */

public class Setting {
	private byte languague;
	private byte font;
	private byte fontSize;
	private int userId;
	private String userName;
	private long icon;
	
	public byte getLanguague() {
		return languague;
	}
	public void setLanguague(byte languague) {
		this.languague = languague;
	}
	
	public byte getFont() {
		return font;
	}
	public void setFont(byte font) {
		this.font = font;
	}
	
	public byte getFontSize() {
		return fontSize;
	}
	public void setFontSize(byte fontSize) {
		this.fontSize = fontSize;
	}
	public int getUserId() {
		return userId;
	}
	public void setUserId(int userId) {
		this.userId = userId;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public long getIcon() {
		return icon;
	}
	public void setIcon(long icon) {
		this.icon = icon;
	}
	
}
