package com.example.domain.model;

/**
 * Top用メモ内容更新
 * @author  Miki Osaki
 * @since   2023/08/21
 * @version 1.0.0
 */

public class Top {
	private String content1;
	private String content2;
	private String content3;
	private int memoId;
	
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
	public int getMemoId() {
		return memoId;
	}
	public void setMemoId(int memoId) {
		this.memoId = memoId;
	}
	
}