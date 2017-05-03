-- phpMyAdmin SQL Dump
-- version 4.2.10
-- http://www.phpmyadmin.net
--
-- Host: localhost:3306
-- Generation Time: May 03, 2017 at 01:51 PM
-- Server version: 5.5.38
-- PHP Version: 5.6.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `cs-oa-sbie`
--

-- --------------------------------------------------------

--
-- Table structure for table `task1`
--

CREATE TABLE `task1` (
`id` int(11) NOT NULL,
  `time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `user` int(11) NOT NULL,
  `video` int(11) NOT NULL,
  `type` int(11) NOT NULL,
  `answer` varchar(128) NOT NULL,
  `position` int(11) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `task1`
--

INSERT INTO `task1` (`id`, `time`, `user`, `video`, `type`, `answer`, `position`) VALUES
(1, '2017-04-27 18:53:06', 1, 1, 2, 'TESTE', 0),
(2, '2017-04-27 18:54:05', 1, 1, 1, 'cachorro', 1),
(3, '2017-04-27 20:07:01', 1, 1, 1, 'te', 4),
(4, '2017-04-28 13:08:21', 1, 2, 2, 'Que coisa Ã© essa que foi mencionada?', 8),
(5, '2017-04-28 14:06:46', 1, 2, 1, 'cccccc', 42),
(6, '2017-05-01 17:46:13', 1, 2, 1, 'Pocou', 24),
(7, '2017-05-02 13:47:52', 1, 2, 1, 'Pocar', 12);

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
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `task2`
--

INSERT INTO `task2` (`id`, `time`, `user`, `gap_id`, `type`, `sugestion`, `ranking`) VALUES
(1, '2017-05-01 17:42:56', 1, 2, 5, 'TESTE', 0),
(2, '2017-05-01 17:43:13', 1, 2, 4, '2_4_1493660593.png', 0),
(3, '2017-05-01 17:45:00', 1, 5, 1, '5_1_1493660700.png', 0),
(4, '2017-05-01 17:45:09', 1, 3, 6, 'https://en.wikipedia.org/wiki/Hunspell', 0),
(5, '2017-05-01 17:46:44', 1, 5, 1, '5_1_1493660804.png', 0),
(6, '2017-05-01 17:47:06', 1, 3, 6, 'https://en.wikipedia.org/wiki/Enchant_(software)', 0),
(7, '2017-05-02 12:15:24', 1, 5, 1, '5_1_1493727324.png', 0),
(8, '2017-05-02 12:16:14', 1, 4, 5, 'RRRRR', 0),
(9, '2017-05-02 13:48:18', 1, 1, 4, '1_4_1493732898.png', 0);

-- --------------------------------------------------------

--
-- Table structure for table `task3`
--

CREATE TABLE `task3` (
`id` int(11) NOT NULL,
  `time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `user_id` int(11) NOT NULL,
  `gap_id` int(11) NOT NULL,
  `sugestion_id` int(11) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `task3`
--

INSERT INTO `task3` (`id`, `time`, `user_id`, `gap_id`, `sugestion_id`) VALUES
(1, '2017-05-03 11:51:35', 1, 5, 5);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `task1`
--
ALTER TABLE `task1`
 ADD PRIMARY KEY (`id`);

--
-- Indexes for table `task2`
--
ALTER TABLE `task2`
 ADD PRIMARY KEY (`id`);

--
-- Indexes for table `task3`
--
ALTER TABLE `task3`
 ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `task1`
--
ALTER TABLE `task1`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=8;
--
-- AUTO_INCREMENT for table `task2`
--
ALTER TABLE `task2`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=10;
--
-- AUTO_INCREMENT for table `task3`
--
ALTER TABLE `task3`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
