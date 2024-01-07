-- login
SELECT userId 
FROM users 
WHERE address = 'fujita725@example.org' 
AND pass = 'xpv6lSAsA7';

SELECT memo.memoName, memo_content.content1, memo_content.content2, memo_content.content3
FROM memo 
JOIN memo_content 
ON memo.memoId = memo_content.memoId
WHERE memo.userId = 12009
AND memo_content.today = '2020-01-01';

-- list
SELECT memoName,url
FROM memo
WHERE userId = 10000;

-- main
SELECT lauguague,font,fontSize
FROM setting;

SELECT userName, icon
FROM users;

SELECT memoName,memoId
FROM memo
WHERE userId = 12009;

SELECT users.userName
FROM users
JOIN wait_approve
ON users.userId = wait_approve.userId
WHERE wait_approve.memoId = 10000;

SELECT memo.memoName, memo_content.today, memo_content.content1, memo_content.content2, memo_content.content3
FROM memo 
JOIN memo_content 
ON memo.memoId = memo_content.memoId

-- forget
SELECT COUNT(address)
FROM users
WHERE address = 'fujita725@example.org';