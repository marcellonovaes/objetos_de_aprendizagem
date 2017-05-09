-- phpMyAdmin SQL Dump
-- version 4.2.10
-- http://www.phpmyadmin.net
--
-- Host: localhost:3306
-- Generation Time: May 09, 2017 at 04:25 PM
-- Server version: 5.5.38
-- PHP Version: 5.6.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `cs-oa-sbie`
--

-- --------------------------------------------------------

--
-- Table structure for table `segments`
--

CREATE TABLE `segments` (
`id` int(11) NOT NULL,
  `video` int(11) NOT NULL,
  `start` int(11) NOT NULL,
  `stop` int(11) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `segments`
--

INSERT INTO `segments` (`id`, `video`, `start`, `stop`) VALUES
(1, 2, 10, 18),
(2, 2, 18, 28),
(3, 2, 28, 40),
(4, 2, 40, 47),
(5, 5, 0, 14),
(6, 5, 14, 42),
(7, 5, 42, 58),
(8, 5, 58, 76),
(9, 5, 76, 87),
(10, 5, 87, 104);

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
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `task1`
--

INSERT INTO `task1` (`id`, `time`, `user`, `video`, `type`, `answer`, `position`) VALUES
(1, '2017-05-09 13:54:26', 1, 5, 1, 'Suscitar', 9),
(2, '2017-05-09 13:54:37', 1, 5, 1, 'Padecimento', 10),
(3, '2017-05-09 13:54:49', 1, 5, 1, 'ObliteraÃ§Ã£o', 11),
(4, '2017-05-09 13:55:21', 1, 5, 2, 'Quem foi GregÃ³rio IX ?', 17),
(5, '2017-05-09 13:55:45', 1, 5, 1, 'promulgou', 18),
(6, '2017-05-09 13:56:33', 1, 5, 2, 'O que Ã© a bula "Licet ad capiendos" ?', 22),
(7, '2017-05-09 13:56:57', 1, 2, 1, 'Show de bola', 42),
(8, '2017-05-09 13:57:07', 1, 2, 1, 'Dar um pulo', 44),
(9, '2017-05-09 13:57:19', 1, 2, 1, 'CaÃ´', 29),
(10, '2017-05-09 13:57:34', 1, 2, 1, 'Peita', 31),
(11, '2017-05-09 13:57:55', 1, 2, 2, 'Que Ã© Venon ?', 38),
(12, '2017-05-09 13:58:08', 1, 2, 2, 'CÃ£o dentro do pentagrama ?', 40),
(13, '2017-05-09 13:58:46', 1, 5, 2, 'Que foi a ExpansÃ£o MarÃ­tima ?', 65),
(14, '2017-05-09 13:59:13', 1, 5, 2, 'O que Ã© Peste BubÃ´nica ?', 76),
(15, '2017-05-09 14:00:29', 1, 5, 2, 'Turma do Topo Gigio', 79),
(16, '2017-05-09 14:02:36', 1, 5, 2, 'O que Ã© Vetor de TransmissÃ£o ?', 81),
(17, '2017-05-09 14:02:58', 1, 5, 2, 'Que doenÃ§a?', 82),
(18, '2017-05-09 14:03:24', 1, 5, 2, 'Qual era o predador natural?', 85),
(19, '2017-05-09 14:03:44', 1, 5, 2, 'Que epidemia foi essa?', 91),
(20, '2017-05-09 14:04:08', 1, 5, 2, 'Quem Ã© Tom?', 102),
(21, '2017-05-09 14:04:19', 1, 5, 2, 'Quem Ã© Jerry?', 103),
(22, '2017-05-09 14:05:56', 1, 5, 2, 'Parentes do Mickey ?', 73),
(23, '2017-05-09 14:06:52', 1, 2, 1, 'JoÃ£o sem BraÃ§o', 21),
(24, '2017-05-09 14:07:04', 1, 2, 1, 'Malocou', 23),
(25, '2017-05-09 14:07:19', 1, 2, 2, 'Quem Ã© Slayer?', 26),
(26, '2017-05-09 14:07:28', 1, 2, 1, 'Zuada', 27),
(27, '2017-05-09 14:08:30', 1, 2, 1, 'Tomou Doril ?', 18),
(28, '2017-05-09 14:09:30', 1, 5, 2, 'O que Ã© Ailurofobia ?', 26),
(29, '2017-05-09 14:10:00', 1, 5, 2, 'O que ele mais temia?', 31),
(30, '2017-05-09 14:10:36', 1, 5, 2, 'Quem eram estes seguidores ?', 39),
(31, '2017-05-09 14:11:20', 1, 5, 2, 'Que pobres seres indefesos?', 43),
(32, '2017-05-09 14:11:55', 1, 5, 2, 'Que criatura?', 45),
(33, '2017-05-09 14:12:44', 1, 5, 2, 'EspÃ©cie ratus ratus?', 54),
(34, '2017-05-09 14:13:34', 1, 5, 2, 'Qual Ã© o velho continente?', 55),
(35, '2017-05-09 14:14:37', 1, 5, 1, 'Solapar', 13),
(36, '2017-05-09 14:14:45', 1, 5, 1, 'Desafetos', 14);

-- --------------------------------------------------------

--
-- Table structure for table `task2`
--

CREATE TABLE `task2` (
`id` int(11) NOT NULL,
  `time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `user` int(11) NOT NULL,
  `video` int(11) NOT NULL,
  `gap_id` int(11) NOT NULL,
  `type` int(11) NOT NULL,
  `sugestion` mediumtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

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
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `segments`
--
ALTER TABLE `segments`
 ADD PRIMARY KEY (`id`);

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
-- AUTO_INCREMENT for table `segments`
--
ALTER TABLE `segments`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT for table `task1`
--
ALTER TABLE `task1`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=37;
--
-- AUTO_INCREMENT for table `task2`
--
ALTER TABLE `task2`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `task3`
--
ALTER TABLE `task3`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
