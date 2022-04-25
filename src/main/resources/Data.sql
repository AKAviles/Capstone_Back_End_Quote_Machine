-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.7.3-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             11.3.0.6295
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for usermanagementsystem
CREATE DATABASE IF NOT EXISTS `usermanagementsystem` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `usermanagementsystem`;

-- Dumping structure for table usermanagementsystem.answers
CREATE TABLE IF NOT EXISTS `answers` (
  `answer_id` int(11) NOT NULL AUTO_INCREMENT,
  `answer` varchar(255) NOT NULL,
  `answer_value` double DEFAULT NULL,
  PRIMARY KEY (`answer_id`),
  UNIQUE KEY `UK_jimcp9ad0b5cqcjwt8g2akibc` (`answer`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=latin1;

-- Dumping data for table usermanagementsystem.answers: ~31 rows (approximately)
/*!40000 ALTER TABLE `answers` DISABLE KEYS */;
INSERT INTO `answers` (`answer_id`, `answer`, `answer_value`) VALUES
	(1, 'Fade', 0),
	(2, 'Remove', 0),
	(5, 'Unsure', 0),
	(6, 'I.', 0),
	(7, 'II.', 0),
	(8, 'III.', 0),
	(9, 'IV.', 0),
	(10, 'V.', 0),
	(11, 'VI.', 0),
	(12, 'Less than 3 months', 0),
	(13, '6 months or less', 0),
	(14, '6 - 11 months', 0),
	(15, '1 - 3 years', 0),
	(16, '5 - 10 years', 0),
	(17, '10+ years', 0),
	(18, 'Extra small', 0),
	(19, 'Small', 0),
	(20, 'Medium', 0),
	(21, 'Large', 0),
	(22, 'Extra Large', 0),
	(23, 'Eyebrows', 0),
	(24, 'Eyeliner or Eyelid', 0),
	(25, 'All Black', 0),
	(26, 'Black with some red', 0),
	(27, 'Black with some color', 0),
	(28, 'Multicolor', 0),
	(29, 'Amatuer', 0),
	(30, 'Minimal', 0),
	(31, 'Moderate', 0),
	(32, 'Significant', 0),
	(33, 'New Tattoo', 0);
/*!40000 ALTER TABLE `answers` ENABLE KEYS */;

-- Dumping structure for table usermanagementsystem.hibernate_sequence
CREATE TABLE IF NOT EXISTS `hibernate_sequence` (
  `next_not_cached_value` bigint(21) NOT NULL,
  `minimum_value` bigint(21) NOT NULL,
  `maximum_value` bigint(21) NOT NULL,
  `start_value` bigint(21) NOT NULL COMMENT 'start value when sequences is created or value if RESTART is used',
  `increment` bigint(21) NOT NULL COMMENT 'increment value',
  `cache_size` bigint(21) unsigned NOT NULL,
  `cycle_option` tinyint(1) unsigned NOT NULL COMMENT '0 if no cycles are allowed, 1 if the sequence should begin a new cycle when maximum_value is passed',
  `cycle_count` bigint(21) NOT NULL COMMENT 'How many cycles have been done'
) ENGINE=InnoDB SEQUENCE=1;

-- Dumping data for table usermanagementsystem.hibernate_sequence: ~1 rows (approximately)
/*!40000 ALTER TABLE `hibernate_sequence` DISABLE KEYS */;
INSERT INTO `hibernate_sequence` (`next_not_cached_value`, `minimum_value`, `maximum_value`, `start_value`, `increment`, `cache_size`, `cycle_option`, `cycle_count`) VALUES
	(1001, 1, 9223372036854775806, 1, 1, 1000, 0, 0);
/*!40000 ALTER TABLE `hibernate_sequence` ENABLE KEYS */;

-- Dumping structure for table usermanagementsystem.questions
CREATE TABLE IF NOT EXISTS `questions` (
  `question_id` int(11) NOT NULL AUTO_INCREMENT,
  `questions` varchar(255) NOT NULL,
  PRIMARY KEY (`question_id`),
  UNIQUE KEY `UK_lgsnx52no63smf4xjtik7hmsp` (`questions`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;

-- Dumping data for table usermanagementsystem.questions: ~7 rows (approximately)
/*!40000 ALTER TABLE `questions` DISABLE KEYS */;
INSERT INTO `questions` (`question_id`, `questions`) VALUES
	(6, 'Amount of Ink'),
	(1, 'Are you looking to fade or remove your tattoo?'),
	(7, 'Scarring'),
	(5, 'What color is your tattoo?'),
	(3, 'What is the age of your tattoo?'),
	(2, 'What is your skin type?'),
	(4, 'What size is your tattoo?');
/*!40000 ALTER TABLE `questions` ENABLE KEYS */;

-- Dumping structure for table usermanagementsystem.questions_answers
CREATE TABLE IF NOT EXISTS `questions_answers` (
  `Question_question_id` int(11) NOT NULL,
  `answers_answer_id` int(11) NOT NULL,
  KEY `FKml7yqku85099lovx56r7w9kuo` (`Question_question_id`),
  KEY `UK_qj3x3fo7h7f2ga4lh4x8cmhl4` (`answers_answer_id`) USING BTREE,
  CONSTRAINT `FKap3nlc1b96ej2k3en1eg3m9bj` FOREIGN KEY (`answers_answer_id`) REFERENCES `answers` (`answer_id`),
  CONSTRAINT `FKml7yqku85099lovx56r7w9kuo` FOREIGN KEY (`Question_question_id`) REFERENCES `questions` (`question_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table usermanagementsystem.questions_answers: ~31 rows (approximately)
/*!40000 ALTER TABLE `questions_answers` DISABLE KEYS */;
INSERT INTO `questions_answers` (`Question_question_id`, `answers_answer_id`) VALUES
	(1, 1),
	(1, 2),
	(1, 5),
	(2, 6),
	(2, 7),
	(2, 8),
	(2, 9),
	(2, 10),
	(2, 11),
	(3, 12),
	(3, 13),
	(3, 14),
	(3, 15),
	(3, 16),
	(3, 17),
	(4, 18),
	(4, 19),
	(4, 20),
	(4, 21),
	(4, 22),
	(4, 23),
	(4, 24),
	(5, 25),
	(5, 26),
	(5, 27),
	(5, 28),
	(6, 29),
	(6, 30),
	(6, 31),
	(6, 32),
	(6, 33);
/*!40000 ALTER TABLE `questions_answers` ENABLE KEYS */;

-- Dumping structure for table usermanagementsystem.quotes
CREATE TABLE IF NOT EXISTS `quotes` (
  `quote_id` int(11) NOT NULL AUTO_INCREMENT,
  `total_cost` double NOT NULL,
  `session_count` int(11) NOT NULL,
  PRIMARY KEY (`quote_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

-- Dumping data for table usermanagementsystem.quotes: ~2 rows (approximately)
/*!40000 ALTER TABLE `quotes` DISABLE KEYS */;
INSERT INTO `quotes` (`quote_id`, `total_cost`, `session_count`) VALUES
	(2, 7130, 23),
	(3, 8990, 29);
/*!40000 ALTER TABLE `quotes` ENABLE KEYS */;

-- Dumping structure for table usermanagementsystem.roles
CREATE TABLE IF NOT EXISTS `roles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

-- Dumping data for table usermanagementsystem.roles: ~3 rows (approximately)
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` (`id`, `name`) VALUES
	(1, 'ROLE_USER'),
	(2, 'ROLE_MODERATOR'),
	(3, 'ROLE_ADMIN');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;

-- Dumping structure for table usermanagementsystem.users
CREATE TABLE IF NOT EXISTS `users` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `phone_number` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_6dotkott2kjsp8vw4d0m25fb7` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;

-- Dumping data for table usermanagementsystem.users: ~4 rows (approximately)
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` (`id`, `email`, `first_name`, `last_name`, `password`, `phone_number`, `username`) VALUES
	(6, 'test@test.com', 'Test', 'User', '$2a$10$Y48pG2f/RUeG9aJfTwG8cuZH0aGLj.7.BPslHdb4E5YtIVWcW3aiu', '123456789', 'testUser1'),
	(7, 'admin@admin.com', 'admin', 'admin', '$2a$10$adVUC0ZcU34rdHZRWM5Rn./66613EpgaiLAmLoD4HvMLAP10/qXLy', '12345567956', 'testAdmin1'),
	(8, 'anthony@yahoo.com', 'Anthony', 'Aviles', '$2a$10$X2Xofy.aOVIYQY8QH5YuLeAks7CKZlTZRZstB.mQOc13aFHeh2HO6', '123-456-7890', 'antAviles'),
	(9, 'a@a.com', 'Anthony', 'Aviless', '$2a$10$wu0TuvUouzADJwLHohzCkeax3mppRTHYdmmlUKVl2JCUf.zfeFY8i', '123-456-7890', 'aAviles');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

-- Dumping structure for table usermanagementsystem.users_quotes
CREATE TABLE IF NOT EXISTS `users_quotes` (
  `User_id` bigint(20) NOT NULL,
  `quotes_quote_id` int(11) NOT NULL,
  KEY `FKdvebyt9f6rbr5shc1nqfrabwb` (`quotes_quote_id`),
  KEY `FK71ylvd1p0rn0wr7s6mmr830dd` (`User_id`),
  CONSTRAINT `FK71ylvd1p0rn0wr7s6mmr830dd` FOREIGN KEY (`User_id`) REFERENCES `users` (`id`),
  CONSTRAINT `FKdvebyt9f6rbr5shc1nqfrabwb` FOREIGN KEY (`quotes_quote_id`) REFERENCES `quotes` (`quote_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table usermanagementsystem.users_quotes: ~0 rows (approximately)
/*!40000 ALTER TABLE `users_quotes` DISABLE KEYS */;
/*!40000 ALTER TABLE `users_quotes` ENABLE KEYS */;

-- Dumping structure for table usermanagementsystem.user_roles
CREATE TABLE IF NOT EXISTS `user_roles` (
  `user_id` bigint(20) NOT NULL,
  `role_id` int(11) NOT NULL,
  PRIMARY KEY (`user_id`,`role_id`),
  KEY `FKh8ciramu9cc9q3qcqiv4ue8a6` (`role_id`),
  CONSTRAINT `FKh8ciramu9cc9q3qcqiv4ue8a6` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`),
  CONSTRAINT `FKhfh9dx7w3ubf1co1vdev94g3f` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table usermanagementsystem.user_roles: ~4 rows (approximately)
/*!40000 ALTER TABLE `user_roles` DISABLE KEYS */;
INSERT INTO `user_roles` (`user_id`, `role_id`) VALUES
	(6, 1),
	(7, 3),
	(8, 1),
	(9, 1);
/*!40000 ALTER TABLE `user_roles` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
