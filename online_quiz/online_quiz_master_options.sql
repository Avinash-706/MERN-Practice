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
-- Table structure for table `master_options`
--

DROP TABLE IF EXISTS `master_options`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `master_options` (
  `option_id` int NOT NULL AUTO_INCREMENT,
  `ques_id` int DEFAULT NULL,
  `option_data` text,
  PRIMARY KEY (`option_id`),
  KEY `fk_master_options_question_idx` (`ques_id`),
  CONSTRAINT `fk_master_options_question` FOREIGN KEY (`ques_id`) REFERENCES `master_questions` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `master_options`
--

LOCK TABLES `master_options` WRITE;
/*!40000 ALTER TABLE `master_options` DISABLE KEYS */;
INSERT INTO `master_options` VALUES (1,1,'Styling web pages'),(2,1,'Managing databases'),(3,1,'Creating interactive web elements'),(4,1,'Designing logos'),(5,2,'var myVar = 5;'),(6,2,'int myVar = 5;'),(7,2,'let myVar == 5;'),(8,2,'myVar := 5;'),(9,3,'4'),(10,3,'\"22\"'),(11,3,'NaN'),(12,3,'undefined'),(13,4,'They all declare constants'),(14,4,'let and const are block scoped; var is function scoped'),(15,4,'var and let are the same'),(16,4,'const variables can be reassigned'),(17,5,'Functions that run automatically'),(18,5,'A shorter syntax for writing functions'),(19,5,'Functions used for sorting arrays'),(20,5,'Functions used only in Node.js'),(21,6,'Functions with access to global variables only'),(22,6,'Functions that execute immediately'),(23,6,'A function that retains access to its lexical scope'),(24,6,'A function without parameters'),(25,7,'Handling events on parent elements to affect child elements'),(26,7,'Assigning multiple IDs to a DOM element'),(27,7,'Avoiding the use of event listeners'),(28,7,'Cloning an event object'),(29,8,'It handles asynchronous calls directly'),(30,8,'It executes functions in Last In, First Out order'),(31,8,'It is a queue that runs parallel functions'),(32,8,'It stores only async functions'),(33,9,'To handle errors'),(34,9,'To make synchronous code run faster'),(35,9,'To handle asynchronous operations'),(36,9,'To validate data types'),(37,10,'They block the main thread'),(38,10,'They replace event loops'),(39,10,'They simplify promise-based syntax using a synchronous style'),(40,10,'They are used for animations only');
/*!40000 ALTER TABLE `master_options` ENABLE KEYS */;
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
