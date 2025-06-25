-- MySQL dump 10.13  Distrib 8.0.42, for Win64 (x86_64)
--
-- Host: localhost    Database: online_quiz
-- ------------------------------------------------------
-- Server version	8.0.42

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `master_questions`
--

DROP TABLE IF EXISTS `master_questions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `master_questions` (
  `id` int NOT NULL AUTO_INCREMENT,
  `cate_id` int DEFAULT NULL,
  `sub_cate_id` int DEFAULT NULL,
  `questions` varchar(255) DEFAULT NULL,
  `correct_ans` int DEFAULT NULL,
  `ques_complexity_id` int DEFAULT NULL,
  `is_enable` enum('true','false') DEFAULT 'true',
  PRIMARY KEY (`id`),
  KEY `fk_master_questions_category_idx` (`cate_id`),
  KEY `fk_master_questions_sub_category
_idx` (`sub_cate_id`),
  KEY `fk_master_questions_correct_ans

_idx` (`correct_ans`),
  KEY `fk_master_questions_complexity_idx` (`ques_complexity_id`),
  CONSTRAINT `fk_master_questions_category` FOREIGN KEY (`cate_id`) REFERENCES `master_category` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `fk_master_questions_complexity` FOREIGN KEY (`ques_complexity_id`) REFERENCES `master_ques_complexity` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `fk_master_questions_correct_ans

` FOREIGN KEY (`correct_ans`) REFERENCES `master_options` (`option_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `fk_master_questions_sub_category
` FOREIGN KEY (`sub_cate_id`) REFERENCES `master_sub_category` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB AUTO_INCREMENT=1000 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `master_questions`
--

LOCK TABLES `master_questions` WRITE;
/*!40000 ALTER TABLE `master_questions` DISABLE KEYS */;
INSERT INTO `master_questions` VALUES (1,1,1,'What is JavaScript primarily used for in web development?',3,1,'true'),(2,1,1,'Which of the following is a correct way to declare a variable in JavaScript?',5,1,'true'),(3,1,1,'What is the output of \"2\" + 2 in JavaScript?',10,1,'true'),(4,1,1,'What is the difference between let, var, and const?',14,2,'true'),(5,1,1,'What are arrow functions in JavaScript?',18,2,'true'),(6,1,1,'Explain the concept of closures in JavaScript with an example.',23,3,'true'),(7,1,1,'What is event delegation in JavaScript and why is it useful?',25,3,'true'),(8,1,1,'How does the call stack work in JavaScript?',30,2,'true'),(9,1,1,'What is the use of promises in JavaScript?',35,2,'true'),(10,1,1,'Explain async/await in JavaScript and how it improves readability over promises.',39,3,'true');
/*!40000 ALTER TABLE `master_questions` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-06-20 11:20:30
