-- phpMyAdmin SQL Dump
-- version 4.2.11
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Sep 26, 2015 at 01:42 PM
-- Server version: 5.6.21
-- PHP Version: 5.6.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `olx`
--

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE IF NOT EXISTS `user` (
`id` int(12) NOT NULL,
  `firstname` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `gender` varchar(10) NOT NULL,
  `type` varchar(5) NOT NULL,
  `created_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `firstname`, `lastname`, `email`, `gender`, `type`, `created_date`) VALUES
(26, 'Pardeep', 'Kumar', 'pardeep26k@gmail.com', 'male', 'fb', '2015-09-26 11:34:37');

-- --------------------------------------------------------

--
-- Table structure for table `userlikes`
--

CREATE TABLE IF NOT EXISTS `userlikes` (
`id` int(12) NOT NULL,
  `likename` varchar(255) NOT NULL,
  `fb_id` int(12) NOT NULL,
  `fb_created_date` datetime NOT NULL,
  `created_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `user_id` int(12) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=576 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `userlikes`
--

INSERT INTO `userlikes` (`id`, `likename`, `fb_id`, `fb_created_date`, `created_date`, `user_id`) VALUES
(551, 'Taruni', 2147483647, '2015-09-23 04:51:18', '2015-09-26 11:34:37', 26),
(552, 'Expedia', 2147483647, '2015-09-22 07:06:17', '2015-09-26 11:34:37', 26),
(553, 'Booking.com Careers', 2147483647, '2015-09-18 11:49:36', '2015-09-26 11:34:37', 26),
(554, 'OYO Rooms', 2147483647, '2015-09-08 05:55:12', '2015-09-26 11:34:37', 26),
(555, 'Massimo Amato', 2147483647, '2015-09-01 02:01:00', '2015-09-26 11:34:37', 26),
(556, 'trivago', 2147483647, '2015-08-20 10:30:26', '2015-09-26 11:34:37', 26),
(557, 'What''s Hot', 2147483647, '2015-08-20 10:24:44', '2015-09-26 11:34:37', 26),
(558, 'Nimbuzz', 2147483647, '2015-08-18 17:02:03', '2015-09-26 11:34:38', 26),
(559, 'LIFEbeat', 2147483647, '2015-07-15 15:12:48', '2015-09-26 11:34:38', 26),
(560, 'Google', 2147483647, '2015-07-14 08:49:15', '2015-09-26 11:34:38', 26),
(561, 'Stickboy Creative', 2147483647, '2015-06-18 18:10:57', '2015-09-26 11:34:38', 26),
(562, 'iScribed Transcription Service', 2147483647, '2015-06-13 05:59:05', '2015-09-26 11:34:38', 26),
(563, 'Burrn', 2147483647, '2015-06-12 00:46:22', '2015-09-26 11:34:38', 26),
(564, 'Ibibo Ryde', 2147483647, '2015-06-09 11:38:49', '2015-09-26 11:34:38', 26),
(565, 'Desi Jaat', 2147483647, '2015-05-27 06:43:08', '2015-09-26 11:34:38', 26),
(566, 'Dainik Bhaskar', 2147483647, '2015-05-21 18:00:39', '2015-09-26 11:34:38', 26),
(567, 'Quantico', 2147483647, '2015-05-13 16:25:22', '2015-09-26 11:34:38', 26),
(568, 'Archana Vijaya', 2147483647, '2015-05-11 16:26:56', '2015-09-26 11:34:38', 26),
(569, 'Toyota Etios', 2147483647, '2015-05-10 11:02:39', '2015-09-26 11:34:38', 26),
(570, 'PBJ Marketing', 2147483647, '2015-05-08 15:33:56', '2015-09-26 11:34:38', 26),
(571, 'Upwork', 2147483647, '2015-05-05 17:44:35', '2015-09-26 11:34:38', 26),
(572, 'Adobe Business Catalyst', 2147483647, '2015-05-04 05:49:49', '2015-09-26 11:34:38', 26),
(573, 'Poster Plus', 2147483647, '2015-04-27 16:40:53', '2015-09-26 11:34:38', 26),
(574, 'Filmipop', 2147483647, '2015-04-24 09:05:12', '2015-09-26 11:34:38', 26),
(575, 'UTV Motion Pictures', 2147483647, '2015-03-28 01:44:49', '2015-09-26 11:34:38', 26);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `user`
--
ALTER TABLE `user`
 ADD PRIMARY KEY (`id`);

--
-- Indexes for table `userlikes`
--
ALTER TABLE `userlikes`
 ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
MODIFY `id` int(12) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=27;
--
-- AUTO_INCREMENT for table `userlikes`
--
ALTER TABLE `userlikes`
MODIFY `id` int(12) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=576;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
