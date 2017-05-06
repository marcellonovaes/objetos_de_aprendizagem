-- phpMyAdmin SQL Dump
-- version 4.2.10
-- http://www.phpmyadmin.net
--
-- Host: localhost:3306
-- Generation Time: 06-Maio-2017 às 21:16
-- Versão do servidor: 5.5.38
-- PHP Version: 5.6.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `cs-oa-sbie`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `task2`
--

CREATE TABLE `task2` (
`id` int(11) NOT NULL,
  `time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `user` int(11) NOT NULL,
  `video` int(11) NOT NULL,
  `gap_id` int(11) NOT NULL,
  `type` int(11) NOT NULL,
  `sugestion` mediumtext NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `task2`
--

INSERT INTO `task2` (`id`, `time`, `user`, `video`, `gap_id`, `type`, `sugestion`) VALUES
(1, '2017-05-05 15:59:07', 1, 2, 2, 2, 'FlexÃ£o de malocar.\r\n1. Aldeou (Ã­ndios).\r\n2. [Infrm.] Que colocou (alguÃ©m, algo, esp. produto de roubo ou contrabando, ou a si mesmo) em lugar no qual possa ficar oculto; ocultar, esconder.'),
(2, '2017-05-05 17:12:01', 1, 2, 2, 3, 'roubou'),
(3, '2017-05-06 19:07:46', 1, 0, 12, 5, 'ddddddd'),
(4, '2017-05-06 19:11:26', 1, 2, 12, 5, 'wwwwwwww');

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
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=5;
