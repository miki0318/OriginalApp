package com.example.domain.service.impl;

import org.springframework.beans.factory.annotation.Autowired;

import com.example.domain.model.Top;
import com.example.domain.service.TopService;
import com.example.repository.TopRepository;

public class TopServiceImpl implements TopService{
	
	@Autowired
	private Top top;
	@Autowired
	private TopRepository toprepository;
	
	@Override
	/**メモ内容更新*/
	public void updateTop(String content1, String content2, String content3, int memoId) {
//		repositoryクラス
		top.setContent1(content1);
		top.setContent2(content2);
		top.setContent3(content3);
		top.setMemoId(memoId);
		
		toprepository.updateTop(top);
	}	
}
