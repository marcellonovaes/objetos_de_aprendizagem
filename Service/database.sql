-- phpMyAdmin SQL Dump
-- version 4.2.10
-- http://www.phpmyadmin.net
--
-- Host: localhost:3306
-- Generation Time: May 01, 2017 at 07:49 PM
-- Server version: 5.5.38
-- PHP Version: 5.6.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `cs-oa-sbie`
--

-- --------------------------------------------------------

--
-- Table structure for table `task2`
--

CREATE TABLE `task2` (
`id` int(11) NOT NULL,
  `time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `user` int(11) NOT NULL,
  `gap_id` int(11) NOT NULL,
  `type` int(11) NOT NULL,
  `sugestion` mediumtext NOT NULL,
  `ranking` int(11) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `task2`
--

INSERT INTO `task2` (`id`, `time`, `user`, `gap_id`, `type`, `sugestion`, `ranking`) VALUES
(1, '2017-05-01 17:42:56', 1, 2, 5, 'TESTE', 0),
(2, '2017-05-01 17:43:13', 1, 2, 4, '2_4_1493660593.png', 0),
(3, '2017-05-01 17:45:00', 1, 5, 1, '5_1_1493660700.png', 0),
(4, '2017-05-01 17:45:09', 1, 3, 6, 'https://www.google.com.br/search?q=base64+mysql+column+type&oq=base64+mysql+type&aqs=chrome.1.69i57j0l2.8321j0j7&sourceid=chrome&ie=UTF-8', 0),
(5, '2017-05-01 17:46:44', 1, 5, 1, '5_1_1493660804.png', 0),
(6, '2017-05-01 17:47:06', 1, 3, 6, 'http://stackoverflow.com/questions/9722603/storing-image-in-database-directly-or-as-base64-data', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `task2`
--
ALTER TABLE `task2`
 ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `task2`
--
ALTER TABLE `task2`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=7;
