package com.example.domain.service.impl;

import org.springframework.beans.factory.annotation.Autowired;

import com.example.domain.model.MemoAdd;
import com.example.domain.service.MemoAddService;
import com.example.repository.MemoAddRepository;

public class MemoAddServiceImpl implements MemoAddService {
	
	@Autowired
	private MemoAdd memoadd;
	@Autowired
	private MemoAddRepository memoaddrepository;
	
	@Override
	/**メモ名登録*/
	public void memoAdd(String memoName, int userId) {
		memoadd.setMemoName(memoName);
		memoadd.setUserId(userId);
		
		memoaddrepository.memoAdd(memoadd);
	}
}