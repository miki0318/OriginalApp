
-- setting
UPDATE setting
SET lauguage = 1,font = 1,fontSize = 1 
WHERE userId = 11000;

UPDATE users
SET userName = '侍太郎', icon = '1829301'
WHERE userId = 11000;

-- list
UPDATE active
SET memoId = 10000
WHERE userId = 11000;

-- main
UPDATE memo_content
SET content1 = 'aaaaaa', content2 = 'aaaaaaaa', content3 = 'aaaaaaa'
WHERE memoId = 10000;

-- password
UPDATE users
SET pass = 'akakaaaa57'
WHERE userId = 12000;