-- phpMyAdmin SQL Dump
-- version 4.2.10
-- http://www.phpmyadmin.net
--
-- Host: localhost:3306
-- Generation Time: May 12, 2017 at 04:37 PM
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
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `task1`
--

INSERT INTO `task1` (`id`, `time`, `user`, `video`, `type`, `answer`, `position`) VALUES
(1, '2017-05-09 13:54:26', 1, 5, 1, 'Suscitar', 9),
(2, '2017-05-09 13:54:37', 1, 5, 1, 'Padecimento', 10),
(3, '2017-05-09 13:54:49', 1, 5, 1, 'ObliteraÃ§Ã£o', 11),
(4, '2017-05-09 13:55:21', 1, 5, 2, 'Quem foi GregÃ³rio IX?', 17),
(5, '2017-05-09 13:55:45', 1, 5, 1, 'promulgou', 18),
(6, '2017-05-09 13:56:33', 1, 5, 2, 'O que Ã© a bula "Licet ad capiendos"?', 22),
(7, '2017-05-09 13:56:57', 1, 2, 1, 'Show de bola', 42),
(8, '2017-05-09 13:57:07', 1, 2, 1, 'Dar um pulo', 44),
(9, '2017-05-09 13:57:19', 1, 2, 1, 'CaÃ´', 29),
(10, '2017-05-09 13:57:34', 1, 2, 1, 'Peita', 31),
(11, '2017-05-09 13:57:55', 1, 2, 2, 'Que Ã© Venon?', 38),
(12, '2017-05-09 13:58:08', 1, 2, 2, 'CÃ£o dentro do pentagrama?', 40),
(13, '2017-05-09 13:58:46', 1, 5, 2, 'Que foi a ExpansÃ£o MarÃ­tima?', 65),
(14, '2017-05-09 13:59:13', 1, 5, 2, 'O que Ã© Peste BubÃ´nica ?', 76),
(15, '2017-05-09 14:00:29', 1, 5, 2, 'Turma do Topo Gigio', 79),
(16, '2017-05-09 14:02:36', 1, 5, 2, 'O que Ã© Vetor de TransmissÃ£o?', 81),
(17, '2017-05-09 14:02:58', 1, 5, 2, 'Que doenÃ§a?', 82),
(18, '2017-05-09 14:03:24', 1, 5, 2, 'Qual era o predador natural?', 85),
(19, '2017-05-09 14:03:44', 1, 5, 2, 'Que epidemia foi essa?', 91),
(20, '2017-05-09 14:04:08', 1, 5, 2, 'Quem Ã© Tom?', 102),
(21, '2017-05-09 14:04:19', 1, 5, 2, 'Quem Ã© Jerry?', 103),
(22, '2017-05-09 14:05:56', 1, 5, 2, 'Parentes do Mickey?', 73),
(23, '2017-05-09 14:06:52', 1, 2, 1, 'JoÃ£o sem BraÃ§o', 21),
(24, '2017-05-09 14:07:04', 1, 2, 1, 'Malocou', 23),
(25, '2017-05-09 14:07:19', 1, 2, 2, 'Quem Ã© Slayer?', 26),
(26, '2017-05-09 14:07:28', 1, 2, 1, 'Zuada', 27),
(27, '2017-05-09 14:08:30', 1, 2, 1, 'Tomou Doril?', 18),
(28, '2017-05-09 14:09:30', 1, 5, 2, 'O que Ã© Ailurofobia?', 26),
(29, '2017-05-09 14:10:00', 1, 5, 2, 'O que ele mais temia?', 31),
(30, '2017-05-09 14:10:36', 1, 5, 2, 'Quem eram estes seguidores?', 39),
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
) ENGINE=InnoDB AUTO_INCREMENT=77 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `task2`
--

INSERT INTO `task2` (`id`, `time`, `user`, `video`, `gap_id`, `type`, `sugestion`) VALUES
(1, '2017-05-09 18:41:52', 1, 5, 28, 5, 'Medo de gatos.'),
(2, '2017-05-09 18:44:47', 1, 5, 15, 6, 'https://www.youtube.com/watch?v=b6GBzPvsjN8'),
(3, '2017-05-09 18:55:09', 1, 5, 22, 5, 'Ratos'),
(4, '2017-05-09 18:55:44', 1, 5, 31, 5, 'Gatos.'),
(5, '2017-05-09 18:55:57', 1, 5, 32, 5, 'Gatos.'),
(6, '2017-05-09 18:56:09', 1, 5, 20, 5, 'Gato.'),
(7, '2017-05-09 18:56:27', 1, 5, 4, 5, 'Um papa.'),
(8, '2017-05-09 19:30:06', 1, 5, 4, 6, 'https://pt.wikipedia.org/wiki/Papa_Greg%C3%B3rio_IX'),
(9, '2017-05-09 19:33:35', 1, 5, 20, 4, '20_4_1494358415.png'),
(10, '2017-05-09 19:48:51', 1, 2, 10, 3, 'Camiseta'),
(11, '2017-05-09 19:51:04', 1, 5, 34, 5, 'O Velho Continente Ã© a Europa.'),
(12, '2017-05-09 19:51:19', 1, 5, 29, 5, 'Os gatos'),
(13, '2017-05-09 19:52:22', 1, 2, 24, 3, 'Roubou'),
(14, '2017-05-09 19:52:47', 1, 5, 14, 6, 'https://pt.wikipedia.org/wiki/Peste_bub%C3%B4nica'),
(15, '2017-05-09 20:05:04', 1, 2, 23, 2, 'Pessoa que se faz de desentendia.'),
(16, '2017-05-09 20:21:44', 1, 2, 10, 3, 'Camisa de banda'),
(17, '2017-05-09 20:27:08', 1, 5, 18, 6, 'http://logosapologetica.com/10514-2/#axzz4gcDLa1Iv'),
(18, '2017-05-09 20:29:06', 1, 5, 28, 5, 'AILUROFOBIA: A FOBIA DO MEDO DOS GATOS'),
(19, '2017-05-09 20:31:11', 1, 5, 31, 6, 'http://historiadomundo.uol.com.br/curiosidades/os-gatos-na-historia.htm'),
(20, '2017-05-09 20:32:20', 1, 2, 23, 2, 'Se refere a uma pessoa que finge nÃ£o entender o que esta acontecendo para tirar vantagem da situaÃ§Ã£o ou para o prÃ³prio bem'),
(21, '2017-05-09 20:33:39', 1, 5, 14, 6, 'https://www.tuasaude.com/peste-bubonica/'),
(22, '2017-05-09 20:35:45', 1, 5, 31, 4, '31_4_1494362145.png'),
(23, '2017-05-09 20:36:31', 1, 2, 11, 6, 'http://revistameupet.uol.com.br/upload/imagens_upload/rato_gato_1.jpg'),
(24, '2017-05-09 20:37:49', 1, 5, 32, 5, 'Os gatos que foram exterminados ,pois teoricamente o Papa tinha uma fobia dos gatos.'),
(25, '2017-05-09 20:38:22', 1, 5, 29, 4, '29_4_1494362302.png'),
(26, '2017-05-09 20:39:50', 1, 5, 5, 2, 'Promulgar Ã© a aÃ§Ã£o de tornar algo de conhecimento pÃºblico, termo utilizado quando uma lei ou decreto passa a vigorar na prÃ¡tica.'),
(27, '2017-05-09 20:41:15', 1, 5, 3, 3, 'eliminaÃ§Ã£o, anulaÃ§Ã£o, desaparecimento, extinÃ§Ã£o'),
(28, '2017-05-09 20:42:07', 1, 2, 8, 2, 'gÃ­ria informando que alguÃ©m vai para algum lugar  '),
(29, '2017-05-09 20:42:42', 1, 5, 15, 6, 'https://www.youtube.com/watch?v=b6GBzPvsjN8'),
(30, '2017-05-09 20:43:18', 1, 2, 25, 6, 'https://www.facebook.com/slayer/'),
(31, '2017-05-09 20:44:01', 1, 5, 20, 4, '20_4_1494362641.png'),
(32, '2017-05-09 20:44:31', 1, 2, 24, 2, 'gÃ­ria informando que alguÃ©m furtou um objeto.'),
(33, '2017-05-09 20:45:07', 1, 5, 34, 5, 'EurÃ¡sia e Ãfrica: os continentes europeu, africano, asiÃ¡tico e os quatro arquipÃ©lagos da MacaronÃ©sia'),
(34, '2017-05-09 20:45:24', 1, 5, 32, 5, 'Gatos'),
(35, '2017-05-09 21:03:52', 1, 5, 31, 4, '31_4_1494363832.png'),
(36, '2017-05-09 21:04:12', 1, 5, 33, 6, 'https://pt.wikipedia.org/wiki/Rato-preto'),
(37, '2017-05-09 21:04:48', 1, 5, 16, 6, 'https://pt.wikipedia.org/wiki/Vetor_(epidemiologia)'),
(38, '2017-05-09 21:05:37', 1, 5, 22, 4, '22_4_1494363937.png'),
(39, '2017-05-09 21:06:04', 1, 5, 5, 3, 'Publicou'),
(40, '2017-05-09 21:06:28', 1, 5, 1, 3, 'Provocar'),
(41, '2017-05-09 21:07:13', 1, 5, 4, 4, '4_4_1494364033.png'),
(42, '2017-05-09 21:09:52', 1, 2, 23, 1, '23_1_1494364192.png'),
(43, '2017-05-09 21:10:31', 1, 2, 12, 4, '12_4_1494364231.png'),
(44, '2017-05-09 21:10:48', 1, 2, 27, 3, 'Sumiu'),
(45, '2017-05-09 21:11:18', 1, 2, 26, 2, 'Barulho irritante'),
(46, '2017-05-09 21:12:31', 1, 5, 13, 5, 'A expansÃ£o ultramarina EuropÃ©ia deu inÃ­cio ao processo da RevoluÃ§Ã£o Comercial, que caracterizou os sÃ©culos XV, XVI e XVII. AtravÃ©s das Grandes NavegaÃ§Ãµes.'),
(47, '2017-05-09 21:12:58', 1, 5, 2, 2, 'sofrimento fÃ­sico ou moral'),
(48, '2017-05-09 21:13:12', 1, 5, 29, 4, '29_4_1494364392.png'),
(49, '2017-05-09 21:13:42', 1, 2, 9, 2, 'Mentira contada com intenÃ§Ã£o de enganar, conquistar ou forma de brincadeira.'),
(50, '2017-05-09 21:14:18', 1, 2, 10, 1, '10_1_1494364458.png'),
(51, '2017-05-09 21:14:46', 1, 5, 17, 5, 'A peste bubÃ´nica.'),
(52, '2017-05-09 21:15:01', 1, 5, 33, 5, 'Rato Preto.'),
(53, '2017-05-09 21:15:45', 1, 5, 14, 5, 'A peste bubÃ´nica, tambÃ©m chamada de peste negra, Ã© uma doenÃ§a grave e muitas vezes fatal causada pela bactÃ©ria da peste, YersÃ­nia pestis, que Ã© transmitida por animais roedores aos seres humanos. A maioria dos indivÃ­duos nÃ£o tratados morre nas 48 horas que sucedem o inÃ­cio dos sintomas.'),
(54, '2017-05-09 21:16:21', 1, 5, 21, 4, '21_4_1494364581.png'),
(55, '2017-05-09 22:16:44', 1, 5, 31, 5, 'Gatos'),
(56, '2017-05-09 22:20:10', 1, 2, 26, 2, 'referÃªncia Ã  opiniÃ£o sobre qualidade da mÃºsica nÃ£o compreendida pelo ouvinte.'),
(57, '2017-05-09 22:20:30', 1, 5, 19, 5, 'Peste BubÃ´nica'),
(58, '2017-05-10 11:46:23', 1, 5, 20, 5, 'A doenÃ§a Ã© a peste negra. Como a bacteria causadora estava no rato, bastava utilizar vinagre nos navios para que as pulgas e ratos nÃ£o entrassem, pois o cheiro Ã© forte, elas evitariam a entrada nos navios prevenindo milhoes da morte.'),
(59, '2017-05-10 15:20:27', 1, 5, 6, 5, 'Peste negra'),
(60, '2017-05-10 15:20:52', 1, 5, 16, 5, 'Peste negra'),
(61, '2017-05-10 15:27:58', 1, 5, 15, 5, 'Ratos.'),
(62, '2017-05-10 15:39:09', 1, 2, 23, 2, 'Vagabundo.'),
(63, '2017-05-10 16:02:47', 1, 5, 36, 2, 'Inimigos'),
(64, '2017-05-10 16:25:51', 1, 5, 19, 5, 'Dizimou a maior parte da Europa, trazida por ratos, que seriam caÃ§ados com gatos mas o cara que mandava na Europa nÃ£o gosta de gatos e mandou matar tudo. Resultado: cerca de 1/3 dos Europeus morreram'),
(65, '2017-05-10 17:02:27', 1, 5, 30, 5, 'Os Católicos.'),
(66, '2017-05-10 17:02:27', 1, 5, 30, 6, 'https://pt.wikipedia.org/wiki/Inquisi%C3%A7%C3%A3o'),
(67, '2017-05-10 17:05:53', 1, 5, 35, 5, 'solapar\r\n\r\nverbo\r\n\r\n1. transitivo direto\r\nfazer cova ou covão em; escavar.\r\n\r\n2. transitivo direto\r\np.ext. abalar os fundamentos de; aluir, minar.\r\n"a água da enchente solapou os alicerces de várias casas"'),
(68, '2017-05-10 17:05:53', 1, 5, 35, 6, 'https://www.dicio.com.br/solapar/'),
(69, '2017-05-10 17:27:39', 1, 5, 4, 5, 'Foi o Papa que editou a bula que deu inÃ­cio Ã  InquisiÃ§Ã£o.'),
(70, '2017-05-11 00:00:46', 1, 2, 26, 2, 'Barulho irritante'),
(71, '2017-05-11 02:08:07', 1, 5, 20, 5, 'Gato Tom, do desenho Tom e Jerry'),
(72, '2017-05-11 03:22:32', 1, 5, 4, 6, 'https://en.wikipedia.org/wiki/Pope_Gregory_IX#Demonization_of_cats'),
(73, '2017-05-12 12:52:54', 1, 5, 19, 5, 'A Peste Negra.'),
(74, '2017-05-12 12:53:19', 1, 2, 12, 4, '12_4_1494593599.png'),
(75, '2017-05-12 12:54:48', 1, 5, 17, 4, '17_4_1494593688.png'),
(76, '2017-05-12 12:55:02', 1, 5, 3, 3, 'DestruiÃ§Ã£o');

-- --------------------------------------------------------

--
-- Table structure for table `task3`
--

CREATE TABLE `task3` (
`id` int(11) NOT NULL,
  `time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `gap_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `video_id` int(11) NOT NULL,
  `sugestion_id` int(11) NOT NULL,
  `sugestion_text` mediumtext NOT NULL,
  `sugestion_type` int(11) NOT NULL,
  `gap_position` int(11) NOT NULL,
  `gap_answer` varchar(128) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `task3`
--

INSERT INTO `task3` (`id`, `time`, `gap_id`, `user_id`, `video_id`, `sugestion_id`, `sugestion_text`, `sugestion_type`, `gap_position`, `gap_answer`) VALUES
(1, '2017-05-11 18:59:49', 26, 1, 2, 45, 'Barulho irritante ', 2, 27, 'Zuada'),
(2, '2017-05-11 19:00:16', 1, 1, 5, 40, 'Provocar ', 3, 9, 'Suscitar'),
(3, '2017-05-11 19:01:04', 9, 1, 2, 49, 'Mentira contada com intenÃ§Ã£o de enganar, conquistar ou forma de brincadeira. ', 2, 29, 'CaÃ´'),
(4, '2017-05-11 19:01:09', 31, 1, 5, 19, 'http://historiadomundo.uol.com.br/curiosidades/os-gatos-na-historia.htm ', 6, 43, 'Que pobres seres indefesos?'),
(5, '2017-05-11 19:01:30', 27, 1, 2, 44, 'Sumiu ', 3, 18, 'Tomou Doril ?'),
(6, '2017-05-11 19:03:22', 21, 1, 5, 54, '21_4_1494364581.png ', 4, 103, 'Quem Ã© Jerry?'),
(7, '2017-05-11 19:03:36', 10, 1, 2, 50, '10_1_1494364458.png ', 1, 31, 'Peita'),
(8, '2017-05-11 19:06:39', 13, 1, 5, 46, 'A expansÃ£o ultramarina EuropÃ©ia deu inÃ­cio ao processo da RevoluÃ§Ã£o Comercial, que caracterizou os sÃ©culos XV, XVI e XVII. AtravÃ©s das Grandes NavegaÃ§Ãµes. ', 5, 65, 'Que foi a ExpansÃ£o MarÃ­tima?'),
(9, '2017-05-11 19:06:41', 2, 1, 5, 47, 'sofrimento fÃ­sico ou moral ', 2, 10, 'Padecimento'),
(10, '2017-05-11 19:06:50', 15, 1, 5, 2, 'https://www.youtube.com/watch?v=b6GBzPvsjN8 ', 6, 79, 'Turma do Topo Gigio'),
(11, '2017-05-11 19:06:54', 22, 1, 5, 38, '22_4_1494363937.png ', 4, 73, 'Parentes do Mickey?'),
(12, '2017-05-12 12:55:41', 27, 1, 2, 44, 'Sumiu ', 3, 18, 'Tomou Doril?'),
(13, '2017-05-12 12:56:09', 32, 1, 5, 34, 'Gatos ', 5, 45, 'Que criatura?'),
(14, '2017-05-12 12:56:13', 23, 1, 2, 15, 'Pessoa que se faz de desentendia. ', 2, 21, 'JoÃ£o sem BraÃ§o'),
(15, '2017-05-12 12:56:37', 12, 1, 2, 43, '12_4_1494364231.png ', 4, 40, 'CÃ£o dentro do pentagrama?'),
(16, '2017-05-12 12:56:41', 16, 1, 5, 37, 'https://pt.wikipedia.org/wiki/Vetor_(epidemiologia) ', 6, 81, 'O que Ã© Vetor de TransmissÃ£o?'),
(17, '2017-05-12 12:57:30', 36, 1, 5, 63, 'Inimigos ', 2, 14, 'Desafetos'),
(18, '2017-05-12 12:57:36', 3, 1, 5, 76, 'DestruiÃ§Ã£o ', 3, 11, 'ObliteraÃ§Ã£o'),
(19, '2017-05-12 12:57:40', 10, 1, 2, 50, '10_1_1494364458.png ', 1, 31, 'Peita'),
(20, '2017-05-12 12:57:55', 14, 1, 5, 14, 'https://pt.wikipedia.org/wiki/Peste_bub%C3%B4nica ', 6, 76, 'O que Ã© Peste BubÃ´nica ?');

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
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=38;
--
-- AUTO_INCREMENT for table `task2`
--
ALTER TABLE `task2`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=77;
--
-- AUTO_INCREMENT for table `task3`
--
ALTER TABLE `task3`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=21;
