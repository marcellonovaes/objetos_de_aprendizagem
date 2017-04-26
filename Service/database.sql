-- phpMyAdmin SQL Dump
-- version 4.2.10
-- http://www.phpmyadmin.net
--
-- Host: localhost:3306
-- Generation Time: Apr 26, 2017 at 11:41 PM
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
  `answer` varchar(128) NOT NULL,
  `position` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `task1`
--
ALTER TABLE `task1`
 ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `task1`
--
ALTER TABLE `task1`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
