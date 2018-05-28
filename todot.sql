-- phpMyAdmin SQL Dump
-- version 4.8.0.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- 생성 시간: 18-05-28 07:19
-- 서버 버전: 5.7.22
-- PHP 버전: 7.1.17

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 데이터베이스: `todot`
--

-- --------------------------------------------------------

--
-- 테이블 구조 `posts`
--

CREATE TABLE `posts` (
  `postId` int(15) NOT NULL,
  `authorId` int(11) DEFAULT NULL,
  `date` varchar(30) DEFAULT NULL,
  `title` varchar(100) NOT NULL,
  `share` int(1) DEFAULT '0',
  `content` varchar(3000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 테이블의 덤프 데이터 `posts`
--

INSERT INTO `posts` (`postId`, `authorId`, `date`, `title`, `share`, `content`) VALUES
(1, NULL, NULL, '', 0, ''),
(2, NULL, NULL, 'title', 0, 'content'),
(3, NULL, NULL, '하하', 0, '하하하하하ㅏ'),
(4, NULL, NULL, 'sdjfiosdj', 0, 'sdojfsaoidj'),
(5, NULL, NULL, 'sdfsd', 0, 'dsf'),
(6, 3, NULL, 'sdkjfsih', 0, 'isdjfois'),
(7, 3, '2018-05-28 14:05:20', 'wlsdyddl', 0, 'qkqh'),
(8, 7, '2018-05-28 14:05:23', 'tlagkdud', 0, '천재'),
(9, 7, '2018-05-28 14:05:00', 'ㄴㅇㄹ', 0, 'ㄴㅇㄹ'),
(10, 7, 'May 28, 2018 2:12 PM', '바바바바바', 0, '유바바바'),
(11, 7, '2018-05-28T14:13:52+09:00', 'sdfdf', 0, 'sdf'),
(12, 8, '2018-05-28T15:02:59+09:00', 'I\'m', 0, 'lion'),
(13, 10, '2018-05-28T16:06:05+09:00', '안녕', 0, '하영이조아'),
(14, 5, '2018-05-28T22:47:08+09:00', '언니', 0, '안녕');

-- --------------------------------------------------------

--
-- 테이블 구조 `sessions`
--

CREATE TABLE `sessions` (
  `session_id` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `expires` int(11) UNSIGNED NOT NULL,
  `data` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 테이블의 덤프 데이터 `sessions`
--

INSERT INTO `sessions` (`session_id`, `expires`, `data`) VALUES
('XqGvU18B21ePYOGmKMt83gojv2JT4vmO', 1527601629, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"passport\":{\"user\":\"local:jiwoo@naver.com\"}}');

-- --------------------------------------------------------

--
-- 테이블 구조 `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `authId` varchar(50) NOT NULL,
  `username` varchar(30) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `salt` varchar(255) DEFAULT NULL,
  `block` int(3) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 테이블의 덤프 데이터 `users`
--

INSERT INTO `users` (`id`, `authId`, `username`, `password`, `salt`, `block`) VALUES
(3, 'local:shyme2055@naver.com', 'shyme2055@naver.com', '+SEHZxMX2zvLE/hzIQUj6rbgxJw6X2y931hBKXEaDM57KfRU726b+dmiJXKxxzIha3G7XUwibIfFyXSb2NyOWpf2S6igt+qU6wJjZ7dMhpSXm8djtb4A8DsfuHSadvdJ2RWssi94oIs2WO1FgqrtBKaN3WUj6QDHvPOzGuFC9os=', 'rRV9cYgtkpdZLnsTJU9TJqJVjW4pJYXay76tufYPZ6Z2qHDDI/RVXeFhRT5O4WPHVEXem3+9pSOnaB2KWJeamw==', 0),
(4, 'local:sogong@naver.com', 'sogong@naver.com', 'CLlxs+sSXAWx9XDVbx3TPE634cS1px+gipq164qNu1BbhVgk1yX3U4xUBin7QpmJ6oAQFP+ZdusbcFXnDTr8rRAI/mRNoPV9Pe3GSvyXYWCL1C2J0n8OJpBlf6pShDXQUerfvkiyUJNaUdA9lobd7qwHR5WkxmnI/EbKlj0etx4=', '2ldvf8DhmxEVkHHgBqVq/y5Yw3tkon8wxZ+6r5hWcZaQhslynch0fMq8Ek+ntr3UajYfZXuawkRUj1m3dcLTCQ==', 0),
(5, 'local:jiwoo@naver.com', 'jiwoo@naver.com', 'CbI2sgzbTOA91l0d12xFxdjj8qqXXoentJD8BDQySDf18S3DhIAMYzzlFffGb/vGgeqRrJl8bOAmkhuXSTgepQKrVI/86SzODQrUHNWVNY4gWWlPC6vWKKdSsOYVeHZxt4PYT53dCKfPzCVBno2rp9vO5UK3J6s7oM5k3ZneL28=', 'HwO9EnnOrNeFi8jmXeiTpE4FRlmW1TT8Aen0FtWQuNx8+q3CumEvZLnQJfF4lLR5WuI38mSAGSZXonYAnI6s4g==', 0),
(6, 'local:hanzo@gmail.com', 'hanzo@gmail.com', 'zYhdO/fTb2PpaGJRGpwp1uYPube/srmYnXdv+nnSqTbX/BsenqbE13135yeAousScJ2p6IauiRYnO+ucHpgvabjHPqCcQt9sTlRn6bKLoAKK1FEN+b9LIPxKthq+okVfI2wcTA3v2dbh5XugXzQMeAAVSp0OxObRufnrkdxwx2U=', 'j7TZVUT9R/eYHi3PWDZZEdHkuBZE19mrr0+5NmuEp+k5kkHVMTmgdCdZmu1gnaPd06c3+k0qhjgX8s8xGD/oHQ==', 0),
(7, 'local:jinyong@naver.com', 'jinyong@naver.com', '9oKgkyINbHXt1KRp70dwqGmBuCuF5abIrJHarHxS7mS2coMqlXCCi6ciz7YO9uOSahELgQ6i7HfbOkasoEfYHkolUWDCyA106dfXxaW+/lVGu4beFdU+7k3riuquQ0lT0fclRQluLHxEUQ1zLXbnRHIxwtXv7fxJuId/cEezlwU=', 'YmsgF3blqh6sXVJWdx9wd36Z0ykCC2vb/0ajUNzgX8NDJgOc3tczQhjYQPkzoj+XVllQbJNu37fTKc9FT0KLGg==', 0),
(8, 'local:ryan@kakao.com', 'ryan@kakao.com', 'YL/WdA3Zsp+9JRqBIlAcoQZqSX71KBHmK12eEO1X0LDK9I6oQGP1quXuGvTgCoeVcN8UNaDuuktpOVrAIMOYL79uuPc1NGaKdvnff5JXOhAbL/Z1eClsyN9pPRzZft36Z+ns6aBnJReHhVsMQIX0vLJXrywrlD6KWOUBUkyZ//c=', 'bXl5K0lNfvWt5wHN79wZzX/NNCw35puD4e6KWzL8/3WtFYPUZTZHuXejHmL+z7dNXSBraHdfVo0kzEn53CycUw==', 0),
(9, 'local:doublejbs@naver.com', 'doublejbs@naver.com', '7nua412BVW/T/37AbGCcvptoytnDP43gEh9F2THGB+jEUl+ZR2lgPUzwhtIfFfrLagxMULkre8gllljT4FVUAOx7d2a+jC7e1ylkQwFXCZSjN40Vb69or21juoV9bmkRcDB8D2Ne9rsq9+4CPVtjNZcZA+eb/oB9TlaalAsP1Gc=', 'xe5ZsLv/P9ofo6o6jC8ecYQpbPRhRwN4O0kfsngW26xpX4r97+Ojs/oJYyhujnFSvpG3PxmLSx0C5T8f6NwG4g==', 0),
(10, 'local:pand3570', 'pand3570', 'AhRVhP6K1pwDRyvAx4UKhYg4gA/+EVORAYiF+k0G++bgUfEYY4VsAcB2I4+Ei1C0Dqgku0fNujOhtSy7YYb0K1nuWpJUDnTalQdghR2M3tJY84rbl2GOp05/fSndOqXIF0W2ja6bBWAZ0bdVwzwXGqzttm3qZ61vAwAujb7bZ5w=', 'jVSb2jA0sDGS7iFLHHJQwvmJvxgW3FflWn9qosz8efK4rWZ/RhFmBPId1+Vf2i91XtmHDhhiCS7OipV2RPn6DQ==', 0);

--
-- 덤프된 테이블의 인덱스
--

--
-- 테이블의 인덱스 `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`postId`),
  ADD KEY `authorId` (`authorId`);

--
-- 테이블의 인덱스 `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`session_id`);

--
-- 테이블의 인덱스 `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `authId` (`authId`);

--
-- 덤프된 테이블의 AUTO_INCREMENT
--

--
-- 테이블의 AUTO_INCREMENT `posts`
--
ALTER TABLE `posts`
  MODIFY `postId` int(15) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- 테이블의 AUTO_INCREMENT `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- 덤프된 테이블의 제약사항
--

--
-- 테이블의 제약사항 `posts`
--
ALTER TABLE `posts`
  ADD CONSTRAINT `posts_ibfk_1` FOREIGN KEY (`authorId`) REFERENCES `users` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
