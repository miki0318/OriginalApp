package com.example.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * トップ画面情報
 * @author  Miki Osaki
 * @since   2023/08/19
 * @version 1.0.0
 */

@Controller
@RequestMapping("/main")
public class TopController {
//	@Autowired
//	private TopService topService;
//	
//	@Autowired
//	private UserMapper userMapper;
//	
//	@Autowired
//	private MemoMapper memoMapper;
//	
//	@Autowired
//	private MemoContentMapper contentMapper;
//	
//	@Autowired
//	private SettingMapper settingMapper;
//	
    /**メモ内容更新*/
	@PostMapping("/first")
	public void updateTopMemo(String content1, String content2, String content3, int memoId) {
//		フォームクラスを作る
//		topService.updateMemoContent(content1, content2, content3, memoId);
	}
}