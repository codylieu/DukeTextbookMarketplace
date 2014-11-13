-- phpMyAdmin SQL Dump
-- version 4.2.5
-- http://www.phpmyadmin.net
--
-- Host: localhost:3306
-- Generation Time: Nov 13, 2014 at 02:52 PM
-- Server version: 5.5.38
-- PHP Version: 5.4.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `duke_textbook_marketplace`
--

-- --------------------------------------------------------

--
-- Table structure for table `class_to_book`
--

CREATE TABLE IF NOT EXISTS `class_to_book` (
  `class_id` varchar(100) NOT NULL,
  `isbn` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `course`
--

CREATE TABLE IF NOT EXISTS `course` (
  `class_id` varchar(100) NOT NULL,
  `dept_id` varchar(100) NOT NULL,
  `course_num` varchar(100) NOT NULL DEFAULT 'NO COURSE NUM LISTED',
  `course_name` varchar(100) NOT NULL DEFAULT 'UNKNOWN COURSE NAME'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `department`
--

CREATE TABLE IF NOT EXISTS `department` (
  `dept_id` varchar(100) NOT NULL,
  `deptName` varchar(100) NOT NULL DEFAULT 'UNKNOWN DEPARTMENT NAME'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `listings`
--

CREATE TABLE IF NOT EXISTS `listings` (
  `listing_id` int(11) NOT NULL,
  `netid` varchar(100) NOT NULL,
  `isbn` varchar(100) NOT NULL,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `statusOfBook` tinyint(1) NOT NULL DEFAULT '1',
  `conditionOfBook` varchar(100) DEFAULT NULL,
  `price` float NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `score`
--

CREATE TABLE IF NOT EXISTS `score` (
`tid` int(11) NOT NULL,
  `score` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `textbooks`
--

CREATE TABLE IF NOT EXISTS `textbooks` (
  `isbn` varchar(100) NOT NULL,
  `title` varchar(100) NOT NULL DEFAULT 'NO TITLE INSERTED',
  `author` varchar(100) NOT NULL DEFAULT 'NO AUTHORS INSERTED',
  `description` varchar(300) NOT NULL DEFAULT 'NO DESCRIPTION',
  `edition` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `transactions`
--

CREATE TABLE IF NOT EXISTS `transactions` (
`tid` int(11) NOT NULL,
  `netid` varchar(100) NOT NULL,
  `listing_id` int(11) NOT NULL,
  `type` varchar(100) NOT NULL DEFAULT 'NO TYPE',
  `status` tinyint(1) NOT NULL DEFAULT '0',
  `date_posted` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `date_paid` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `netid` varchar(100) NOT NULL,
  `firstName` varchar(100) NOT NULL DEFAULT 'UNKNOWN FIRSTNAME',
  `lastName` varchar(100) NOT NULL DEFAULT 'UNKNOWN LASTNAME',
  `major` varchar(100) NOT NULL DEFAULT 'UNDECIDED',
  `phoneNumber` varchar(100) NOT NULL DEFAULT 'UNKNOWN PHONE NUMBER'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `class_to_book`
--
ALTER TABLE `class_to_book`
 ADD KEY `class_id` (`class_id`), ADD KEY `isbn` (`isbn`);

--
-- Indexes for table `course`
--
ALTER TABLE `course`
 ADD PRIMARY KEY (`class_id`), ADD KEY `dept_id` (`dept_id`);

--
-- Indexes for table `department`
--
ALTER TABLE `department`
 ADD PRIMARY KEY (`dept_id`);

--
-- Indexes for table `listings`
--
ALTER TABLE `listings`
 ADD PRIMARY KEY (`listing_id`), ADD KEY `netid` (`netid`), ADD KEY `isbn` (`isbn`);

--
-- Indexes for table `score`
--
ALTER TABLE `score`
 ADD PRIMARY KEY (`tid`);

--
-- Indexes for table `textbooks`
--
ALTER TABLE `textbooks`
 ADD PRIMARY KEY (`isbn`);

--
-- Indexes for table `transactions`
--
ALTER TABLE `transactions`
 ADD PRIMARY KEY (`tid`), ADD KEY `netid` (`netid`), ADD KEY `listing_id` (`listing_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
 ADD PRIMARY KEY (`netid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `score`
--
ALTER TABLE `score`
MODIFY `tid` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `transactions`
--
ALTER TABLE `transactions`
MODIFY `tid` int(11) NOT NULL AUTO_INCREMENT;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `class_to_book`
--
ALTER TABLE `class_to_book`
ADD CONSTRAINT `class_to_book_ibfk_1` FOREIGN KEY (`class_id`) REFERENCES `course` (`class_id`),
ADD CONSTRAINT `class_to_book_ibfk_2` FOREIGN KEY (`isbn`) REFERENCES `textbooks` (`isbn`);

--
-- Constraints for table `course`
--
ALTER TABLE `course`
ADD CONSTRAINT `course_ibfk_1` FOREIGN KEY (`dept_id`) REFERENCES `department` (`dept_id`);

--
-- Constraints for table `listings`
--
ALTER TABLE `listings`
ADD CONSTRAINT `listings_ibfk_1` FOREIGN KEY (`netid`) REFERENCES `users` (`netid`),
ADD CONSTRAINT `listings_ibfk_2` FOREIGN KEY (`isbn`) REFERENCES `textbooks` (`isbn`);

--
-- Constraints for table `transactions`
--
ALTER TABLE `transactions`
ADD CONSTRAINT `transactions_ibfk_1` FOREIGN KEY (`netid`) REFERENCES `users` (`netid`),
ADD CONSTRAINT `transactions_ibfk_2` FOREIGN KEY (`listing_id`) REFERENCES `listings` (`listing_id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
