-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 23-08-2019 a las 00:44:55
-- Versión del servidor: 5.7.21
-- Versión de PHP: 7.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `owner_test`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `search_log`
--

DROP TABLE IF EXISTS `search_log`;
CREATE TABLE IF NOT EXISTS `search_log` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `search` varchar(200) NOT NULL COMMENT 'Searches in git',
  `date_search` date NOT NULL COMMENT 'Date of',
  `number_records` int(11) NOT NULL COMMENT 'Total records',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=116 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `search_log`
--

INSERT INTO `search_log` (`id`, `search`, `date_search`, `number_records`) VALUES
(115, 'KitpagesFileSystemBundle', '2019-08-23', 1),
(114, 'KnpLabs', '2019-08-23', 30),
(113, 'BehatContexts', '2019-08-23', 5),
(112, 'KnpLabs', '2019-08-23', 30),
(111, 'react', '2019-08-23', 30),
(110, 'php git', '2019-08-22', 30),
(109, 'KnpLabs', '2019-08-22', 30),
(108, 'KnpLabs', '2019-08-22', 30),
(107, 'owner', '2019-08-22', 30),
(106, 'python', '2019-08-22', 30),
(105, 'python', '2019-08-22', 30),
(104, 'python', '2019-08-22', 30),
(103, 'python', '2019-08-22', 30),
(102, 'python', '2019-08-22', 30),
(101, 'python', '2019-08-22', 30),
(100, 'python', '2019-08-22', 30),
(99, 'python', '2019-08-22', 30),
(98, 'python', '2019-08-22', 30),
(97, 'python', '2019-08-22', 30),
(96, 'python', '2019-08-22', 30),
(95, 'python', '2019-08-22', 30),
(94, 'python', '2019-08-22', 30),
(93, 'python', '2019-08-22', 30),
(92, 'python', '2019-08-22', 30),
(91, 'python', '2019-08-22', 30),
(90, 'python', '2019-08-22', 30),
(89, 'python', '2019-08-22', 30),
(88, 'python', '2019-08-22', 30),
(87, 'python', '2019-08-22', 30),
(86, 'ruby y php', '2019-08-22', 20),
(85, 'ruby y php', '2019-08-22', 20),
(84, 'ruby y php', '2019-08-22', 20),
(83, 'php y ruby', '2019-08-22', 20),
(82, 'react', '2019-08-22', 0),
(81, 'php y ruby', '2019-08-22', 20);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
