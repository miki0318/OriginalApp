package com.example.domain.model;

/**
 * Login用メモ内容取得
 * @author  Miki Osaki
 * @since   2023/08/21
 * @version 1.0.0
 */

public class Login {
	private int memoId;
	private String memoName;
	private String content1;
	private String content2;
	private String content3;
	private int userId;
	private long icon;
	private String userName;
	private byte languague;
	private byte font;
	private byte fontSize;
	private String url;
	
	public int getMemoId() {
		return memoId;
	}
	public void setMemoId(int memoId) {
		this.memoId = memoId;
	}
	public String getMemoName() {
		return memoName;
	}
	public void setMemoName(String memoName) {
		this.memoName = memoName;
	}
	public String getContent1() {
		return content1;
	}
	public void setContent1(String content1) {
		this.content1 = content1;
	}
	public String getContent2() {
		return content2;
	}
	public void setContent2(String content2) {
		this.content2 = content2;
	}
	public String getContent3() {
		return content3;
	}
	public void setContent3(String content3) {
		this.content3 = content3;
	}
	public int getUserId() {
		return userId;
	}
	public void setUserId(int userId) {
		this.userId = userId;
	}
	public long getIcon() {
		return icon;
	}
	public void setIcon(long icon) {
		this.icon = icon;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
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
	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}
}
