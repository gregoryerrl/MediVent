-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: May 21, 2024 at 09:51 AM
-- Server version: 8.2.0
-- PHP Version: 8.2.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `medivent`
--

-- --------------------------------------------------------

--
-- Table structure for table `pillstable`
--

DROP TABLE IF EXISTS `pillstable`;
CREATE TABLE IF NOT EXISTS `pillstable` (
  `id` int NOT NULL AUTO_INCREMENT,
  `brand` varchar(255) NOT NULL,
  `generic_name` varchar(255) NOT NULL,
  `cost` int NOT NULL,
  `qty` int NOT NULL DEFAULT '0',
  `dropper` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `pillstable`
--

INSERT INTO `pillstable` (`id`, `brand`, `generic_name`, `cost`, `qty`, `dropper`) VALUES
(8, 'Biogesinghot', 'Paracetamol', 25, 1, 3),
(7, 'Biogesing', 'Paracetamol', 25, 1, 1),
(9, '', 'Biogesic', 25, 25, 1),
(10, 'Biogesic', 'Paracetamol', 25, 25, 1),
(11, 'Biogesic', 'Paracetamol', 25, 25, 1),
(12, 'Biogesic', 'Paracetamol', 25, 25, 1),
(13, 'Biogesic', 'Paracetamol', 25, 25, 1),
(14, 'Biogesic', 'Paracetamol', 25, 25, 1),
(15, 'Biogesic', 'Paracetamol', 25, 25, 1),
(16, 'Biogesic', 'Paracetamol', 25, 25, 1),
(17, 'Biogesic', 'Paracetamol', 25, 25, 1),
(18, 'Biogesic', 'Paracetamol', 25, 25, 1),
(19, 'Biogesic', 'Paracetamol', 25, 25, 1),
(20, 'Biogesic', 'Paracetamol', 25, 25, 1),
(21, 'Biogesic', 'Paracetamol', 25, 25, 1);

-- --------------------------------------------------------

--
-- Table structure for table `userstable`
--

DROP TABLE IF EXISTS `userstable`;
CREATE TABLE IF NOT EXISTS `userstable` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL,
  `fullname` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `credits` int DEFAULT NULL,
  `contact` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `userstable`
--

INSERT INTO `userstable` (`id`, `username`, `password`, `role`, `fullname`, `credits`, `contact`) VALUES
(1, 'admin', 'admin321', 'admin', 'admin', NULL, NULL);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
