-- phpMyAdmin SQL Dump
-- version 4.0.10deb1
-- http://www.phpmyadmin.net
--
-- Host: localhost:3306
-- Generation Time: Sep 19, 2018 at 07:00 AM
-- Server version: 5.7.21
-- PHP Version: 5.5.9-1ubuntu4.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `emorylanggengjaya`
--

-- --------------------------------------------------------

--
-- Table structure for table `about_us`
--

CREATE TABLE IF NOT EXISTS `about_us` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `company_overview` text NOT NULL,
  `vision` text NOT NULL,
  `mission` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `about_us`
--

INSERT INTO `about_us` (`id`, `company_overview`, `vision`, `mission`) VALUES
(1, '<p style="text-align:justify"><span style="font-family:comic sans ms,cursive"><span style="color:#F0FFF0">PT Emory Langgeng Jaya is a manufacturer of plastic trays and packaging. The company focuses on the customization of plastic specifications and dimensions to suit our customers&rsquo; needs using state of the art technology. Established in 2012, the company provides high quality trays using our German thermoforming machine and specializes in PET, PP, HIPS and PS plastic materials. After customer consultation, our design team is able to provide accurate and customizable tray with a veriety of shapes, dimensions and colour. Located in Ungaran, Central Java &ndash; Indonesia, PT. Emory Langgeng Jaya mainly produces plastic tray widely used in PT Emory Langgeng Jaya&nbsp;</span></span></p>\r\n', '<p><span style="font-family:comic sans ms,cursive"><em>&quot;To be a leading plastic tray and packaging manufacturer in Indonesia&quot;</em></span></p>\r\n', '<p><span style="font-family:comic sans ms,cursive"><em>&quot;To produce high quality trays and packaging which would satisfy our customers&rsquo; expectation and needs&quot;</em></span></p>\r\n');

-- --------------------------------------------------------

--
-- Table structure for table `contact`
--

CREATE TABLE IF NOT EXISTS `contact` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `address` varchar(100) NOT NULL,
  `phone` varchar(100) NOT NULL,
  `fax` varchar(100) NOT NULL,
  `info` varchar(100) NOT NULL,
  `marketing` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `contact`
--

INSERT INTO `contact` (`id`, `address`, `phone`, `fax`, `info`, `marketing`) VALUES
(1, 'Jl. Pemuda No. 302 Ungaran - Indonesia', '-', '024 - 76914325', 'emorylanggengjaya@gmail.com ', '-');

-- --------------------------------------------------------

--
-- Table structure for table `design`
--

CREATE TABLE IF NOT EXISTS `design` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `manufacturing_1` varchar(100) NOT NULL,
  `manufacturing_2` varchar(100) NOT NULL,
  `npd_1` varchar(100) NOT NULL,
  `npd_2` varchar(100) NOT NULL,
  `our_service` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `design`
--

INSERT INTO `design` (`id`, `manufacturing_1`, `manufacturing_2`, `npd_1`, `npd_2`, `our_service`) VALUES
(1, '1480732286884-process-02.png', '1480734903835-manufacturing process step-02.png', '1480732299914-process-03.png', '1480734842867-new product development and design1-01.png', '1480732551799-process-04.png');

-- --------------------------------------------------------

--
-- Table structure for table `kritik_saran`
--

CREATE TABLE IF NOT EXISTS `kritik_saran` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nama` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `telp` varchar(100) NOT NULL,
  `msg` text NOT NULL,
  `inserted` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deleted` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=36 ;

--
-- Dumping data for table `kritik_saran`
--

INSERT INTO `kritik_saran` (`id`, `nama`, `email`, `telp`, `msg`, `inserted`, `deleted`) VALUES
(1, 'aa', 'd@gmail.com', '00', 'ajja', '2017-01-19 13:00:45', 1),
(2, 'aa', 'sd@gmail.com', 'akks', 'aasd', '2017-01-19 13:00:45', 1),
(3, 'sd', 'ss@h.com', 'a21', 'adsada', '2017-01-19 13:00:45', 1),
(4, 'ada', 'as@g.n', 'sad ', 'dw', '2017-01-19 13:00:45', 1),
(5, '3er', 'asd@h.b', 'asda', 'asda', '2017-01-19 13:00:45', 1),
(6, 'Hari ', 'wismoyohari@gmail.com', '085727336621', 'cek ', '2017-01-19 13:00:45', 1),
(7, 'Nissin Produk', 'aa@sss', 'as', 'sss', '2017-01-19 13:00:45', 1),
(8, 'hari', 'wismoyohari@gmail.com', '085', '333', '2017-01-19 13:00:45', 1),
(9, 'ga', 'wismoyohari@gmail.com', '085727336621', 's', '2017-01-19 13:00:45', 1),
(10, 'danang', 'danangrangers@rocketmail.com', '12334567890', 'dsdsds', '2017-01-19 13:00:45', 1),
(11, 'Hari', 'wismoyohari@gmail.com', '085727336621', 'test', '2017-01-19 13:00:45', 1),
(12, 'Hari Wismoyo', 'wismoyohari@gmail.com', '085727336621', 'Admin emory langgengjaya', '2017-01-19 13:00:45', 1),
(13, 'Hari Wismoyo', 'wismoyohari@gmail.com', '085727336621', 'admin emory langgengjaya', '2017-01-19 13:00:45', 1),
(14, 'HARI', 'wismoyohari@gmail.com', '085727336621', 'Test ', '2017-01-19 13:00:45', 1),
(15, 'Hari', 'wismoyohari@gmail.com', '085727336621', 'Jl. Pemuda No. 302 Ungaran - Indonesia\r\n	024 - 76914325\r\n	024 - 76914325\r\n	Info  :  emorylanggengjaya@gmail.com , Marketing  :  marketing@emory.co.idJl. Pemuda No. 302 Ungaran - Indonesia\r\n	024 - 76914325\r\n	024 - 76914325\r\n	Info  :  emorylanggengjaya@gmail.com , Marketing  :  marketing@emory.co.idJl. Pemuda No. 302 Ungaran - Indonesia\r\n	024 - 76914325\r\n	024 - 76914325\r\n	Info  :  emorylanggengjaya@gmail.com , Marketing  :  marketing@emory.co.idJl. Pemuda No. 302 Ungaran - Indonesia\r\n	024 - 76914325\r\n	024 - 76914325\r\n	Info  :  emorylanggengjaya@gmail.com , Marketing  :  marketing@emory.co.idJl. Pemuda No. 302 Ungaran - Indonesia\r\n	024 - 76914325\r\n	024 - 76914325\r\n	Info  :  emorylanggengjaya@gmail.com , Marketing  :  marketing@emory.co.id\r\nJl. Pemuda No. 302 Ungaran - Indonesia\r\n	024 - 76914325\r\n	024 - 76914325\r\n	Info  :  emorylanggengjaya@gmail.com , Marketing  :  marketing@emory.co.idJl. Pemuda No. 302 Ungaran - Indonesia\r\n	024 - 76914325\r\n	024 - 76914325\r\n	Info  :  emorylanggengjaya@gmail.com , Marketing  :  marketing@emory.co.id', '2017-01-19 13:00:45', 1),
(16, 'adada', 'adada@gmail.com', 'ad', 'ad', '2017-01-19 13:00:45', 1),
(17, 'Nama Mobilenya', 'emailmobilenya@gmail.com', '12334467qcontactnumber', 'Mobilenyamessage', '2017-01-19 13:00:45', 1),
(18, 'Aa', 'a@jjn', '088', 'Test', '2017-01-19 13:00:45', 1),
(19, 'test notif', 'testnotif@gmail.com', 'testnotif', 'testnotif\r\n', '2017-02-08 05:00:39', 1),
(20, 'test', 'wismoyohari@gmail.com', '085727336621', 'test oke', '2017-01-21 04:49:21', 1),
(21, 'aaaa', 'aa@Gf', '000', 'sssss', '2017-01-24 07:07:13', 1),
(22, 'testadmin notif', 'testadminnotif@gmail.com', 'testadmin notif', 'testadmin notif', '2017-01-24 07:07:10', 1),
(23, 'Testadmin notif mobile', 'testadminnotifmobile@gmail.com', 'Testadmin notif mobile', 'Test admin notif mobile', '2017-01-24 07:07:06', 1),
(24, 'Notifmobile', 'notifmobile@gmail.com', 'Notifmobile', 'Notifmobile', '2017-01-24 07:07:01', 1),
(25, 'Hari', 'wismoyohari@gmail.com', '085727336621', 'Testing submit', '2017-02-08 05:00:42', 1),
(26, 'Wismoyo', 'wismoyoharu@gmail.com', '085727336621', 'Testing Mobile', '2017-02-08 05:00:45', 1),
(27, 'aaa', 'aaa@gmail.com', '000', 'aaaa', '2017-02-08 05:00:48', 1),
(28, 'Hari', 'wismoyohari@gmail.com', '085727336621', 'percobaan', '2017-11-14 01:18:57', 1),
(29, 'Tony Fu ', 'jtjingfu@yahoo.com', '08123507084, 085101575818', 'saya penggilingan Plastik botol PET di surabaya, mau menawarkan hasil penggilingan plastik PET cuci , adapun yang kami tawarkan hasil gilingan bening bersih dan biru muda bersih. kapasitas saya 60-80Ton/bulan', '2017-10-30 15:04:02', 0),
(30, 'R. Hari Wismoyo', 'wismoyohari@gmail.com', '085727336621', 'Testing 03 Novembe 2017', '2017-11-14 01:18:54', 1),
(31, 'Christopher ', 'enquiries@jayapurapermata.com', '081277711198', 'Dear Team,\r\n\r\nApa boleh request sample?\r\n1x ABT1\r\n1x FB1\r\n\r\nThanks', '2018-01-29 06:51:27', 0),
(32, 'Johan alamsyah', 'johanalamsyah40@gmail.com', '089668220939', 'Apakah ada lowongan kerja di devisi extruder', '2018-02-05 14:02:17', 0),
(33, 'Johan alamsyah', 'johanalamsyah40@gmail.com', '089668220939', 'Apakah ada lowongan di devisi extruder', '2018-02-05 14:03:56', 0),
(34, 'Jenita ', 'jenita@kara-indonesia.com', '089674564299', 'Dengan Hormat,\r\n\r\nPerkenalkan, nama saya Jenita. Saya ingin tahu lebih lanjut tentang packaging biscuit tray, khususnya yang untuk flat biscuit. Yang ingin saya tanyakan adalah apakah ukuran tray bisa custom? Jika bisa, berapa MOQ nya?\r\nLalu, berapa harga satu piece tray nya? Dan apakah memungkinkan jika kirim sample terlebih dahulu? Lokasi saya ada di Jakarta.\r\nTerima Kasih banyak.\r\n\r\nBest Regards,\r\n\r\nJenita Chandra', '2018-04-24 02:32:44', 0),
(35, 'Doga YENIGUN', 'dogayenigun@guncanplastik.com.tr', '05331669737', '\r\nDear all, \r\n\r\n\r\nOur company,Guncan Plastics is a manufacturer that is known as an  expert in  rigid sheet producer in Turkey and over  abroad.We have produced rigid  APET,RPET,PET/PE,PET/PE/EVOH/PE, PVC,PVC/PE,PVC/PE/EVOH/PE,PET-G  and C-PET sheet since 2003 in Istanbul. \r\nQuality is primary importance of everything for us .Our company has established a Hygiene and Quality system accredited  with BRC IoP v5 ,ISO 9001:2008 and ISO 22000:2005 Quality Management System. \r\n\r\nOur PET/PE and PET/PE/EVOH/PE   sheets is using for MAP packagings . \r\nWe would be very pleased to do business with you . If you like,We can offer some  competitive price. \r\n\r\n\r\nKind regards,\r\n\r\nDo?a Fehmi YEN?GÜN\r\nExport Manager\r\n\r\n \r\n\r\nGuncan Plastik Ambalaj San. ve Tic. Ltd. Sti.\r\nEsenkent Mah. Barajyolu Cad. No: 3/2\r\nP.O. Box 34776 Umraniye / Istanbul – TURKEY\r\n\r\nMobile : +90 533 166 97 37\r\nPhone   : +90 216 527 09 69  Ext: 123     \r\nFax         : +90 216 527 94 79\r\nE-mail   : dogayenigun@guncanplastik.com.tr\r\nWeb      : www.guncanplastik.com.tr\r\n\r\n\r\n\r\n\r\n\r\n', '2018-05-23 09:16:34', 0);

-- --------------------------------------------------------

--
-- Table structure for table `management_home`
--

CREATE TABLE IF NOT EXISTS `management_home` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `foto` varchar(100) NOT NULL,
  `slideshow` int(11) NOT NULL,
  `deleted` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=42 ;

--
-- Dumping data for table `management_home`
--

INSERT INTO `management_home` (`id`, `foto`, `slideshow`, `deleted`) VALUES
(1, '1479467056672-new-slideshow-1.png', 1, 0),
(2, '1479467530621-new-slideshow-3.png', 2, 0),
(3, '1479467641530-slideshow-product-1.png', 3, 1),
(4, '1479012541711-hellokitty.jpg', 4, 1),
(5, '1479467160715-new-slideshow-2.png', 1, 0),
(6, '1479467550975-new-slideshow-4.png', 2, 0),
(7, '1479467655226-slideshow-product-2.png', 3, 1),
(8, '1479467671306-slideshow-product-3.png', 3, 1),
(9, '1479467509396-new-slideshow-3.png', 1, 1),
(10, '1479467601207-new-slideshow-5.png', 2, 0),
(11, '1479467687574-slideshow-product-4.png', 3, 1),
(12, '1479467699143-slideshow-product-5.png', 3, 1),
(13, '1481946434260-Bento Tray.jpg', 4, 1),
(14, '1481946445219-Bento Tray.jpg', 4, 1),
(15, '1481946453348-Bento Tray.jpg', 4, 1),
(16, '1481946460418-Bento Tray.jpg', 4, 1),
(17, '1484360467089-Assorted Biscuit Tray.png', 3, 1),
(18, '1484361610576-Assorted Biscuit Tray.png', 3, 1),
(19, '1484361669141-Assorted Biscuit Tray.png', 3, 1),
(20, '1500364176857-Mesinbaru1.jpg', 1, 0),
(21, '1500349400963-Mesinbaru2.jpg', 2, 0),
(22, '1500349540898-Mesinbaru3.jpg', 1, 0),
(23, '1500349671549-Mesinbaru4.jpg', 2, 0),
(24, '1500350153464-Cutting.JPG', 4, 1),
(25, '1500517730317-Bento Tray.jpg', 3, 1),
(26, '1500519005641-Assorted Biscuit Tray.jpg', 4, 0),
(27, '1500519479644-Assorted Biscuit Tray.jpg', 4, 0),
(28, '1500519575389-Biscuit Roll.jpg', 3, 1),
(29, '1500519648432-Assorted Biscuit Tray.jpg', 3, 1),
(30, '1500519736141-Bento Tray.jpg', 3, 1),
(31, '1500519755988-Flat Biscuit.jpg', 3, 0),
(32, '1500519765721-Biscuit Roll.jpg', 3, 0),
(33, '1500519775465-Assorted Biscuit Tray.jpg', 3, 0),
(34, '1500519786353-Cokkies Tray.jpg', 3, 0),
(35, '1500519799382-Egg Tray.jpg', 3, 0),
(36, '1500519825205-Lucnh Box.jpg', 3, 0),
(37, '1500519879105-Snack Tray.jpg', 3, 0),
(38, '1500520699567-packing 2.jpg', 1, 1),
(39, '1500520795128-packing 2.jpg', 1, 0),
(40, '1500520795304-packing 2.jpg', 1, 0),
(41, '1500520861422-packing 1.jpg', 2, 0);

-- --------------------------------------------------------

--
-- Table structure for table `master_kategori`
--

CREATE TABLE IF NOT EXISTS `master_kategori` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `kategori` varchar(100) NOT NULL,
  `deleted` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=6 ;

--
-- Dumping data for table `master_kategori`
--

INSERT INTO `master_kategori` (`id`, `kategori`, `deleted`) VALUES
(1, 'Bento Tray', 0),
(2, 'Biscuit Tray', 0),
(3, 'Egg Tray', 0),
(4, 'Lunch Tray', 0),
(5, 'Snack Tray', 0);

-- --------------------------------------------------------

--
-- Table structure for table `master_produk`
--

CREATE TABLE IF NOT EXISTS `master_produk` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_kategori` int(11) NOT NULL,
  `kode` varchar(100) NOT NULL,
  `deskripsi` text NOT NULL,
  `length` varchar(100) NOT NULL,
  `width` varchar(100) NOT NULL,
  `height` varchar(100) NOT NULL,
  `weight` varchar(100) NOT NULL,
  `foto` varchar(100) NOT NULL,
  `inserted` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deleted` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=16 ;

--
-- Dumping data for table `master_produk`
--

INSERT INTO `master_produk` (`id`, `id_kategori`, `kode`, `deskripsi`, `length`, `width`, `height`, `weight`, `foto`, `inserted`, `deleted`) VALUES
(1, 2, 'ABT1', 'OJO TUKU LARANG', '123', '456', '789', '112', '1480643130592-Assorted Biscuit Tray.jpg', '2016-12-02 01:46:00', 1),
(2, 1, 'BT1', 'Bento Tray', '257', '213', '34', '30,7', '1480644794201-Bento Tray.jpg', '2016-12-31 04:09:13', 0),
(3, 2, '3', 'tes data', '2', '3', '4', '5', '1477778561464-animate.jpg', '2016-12-02 01:46:03', 1),
(4, 2, '', 'OJO TUKU LARANG', '', '', '', '', '1480643197010-Assorted Biscuit Tray.jpg', '2016-12-02 01:47:13', 1),
(5, 2, 'ABT1', 'Assorted Biscuit Tray', '178', '150', '37', '13,9', '1480644815106-Assorted Biscuit Tray.jpg', '2016-12-02 02:13:35', 0),
(6, 2, 'BRT1', 'Biscuit Roll', '177', '92', '25', '7,1', '1480644829404-Biscuit Roll.jpg', '2016-12-02 02:13:49', 0),
(7, 2, 'CT1', 'Cokkies Tray', '173', '70', '50', '5,7', '1480644844716-Cokkies Tray.jpg', '2016-12-02 02:14:04', 0),
(8, 2, 'FB1', 'Flat Biscuit', '135', '86', '50', '3,25', '1480644869399-Flat Biscuit.jpg', '2016-12-02 02:14:29', 0),
(9, 2, 'RB1', 'Round Biscuit', '133', '88', '50', '5,35', '1480644897871-Round Biscuit.jpg', '2016-12-02 02:14:57', 0),
(10, 2, 'SB1', 'Square Biscuit (Cream)', '106', '86', '70', '5,5', '1480644913012-Square Biscuit.jpg', '2016-12-02 02:15:13', 0),
(11, 3, 'ET1', 'Egg Tray', '240', '150', '67', '27,1', '1480644928769-Egg Tray.jpg', '2016-12-02 02:15:28', 0),
(12, 4, 'LB1', 'Lucnh Box', '163', '135', '50', '15,2', '1480644943598-Lucnh Box.jpg', '2016-12-02 02:15:43', 0),
(13, 4, 'RTL1', 'Round Tray With', '183', '122', '60', '13,9', '1480644963259-Round Tray With.jpg', '2016-12-02 02:16:03', 0),
(14, 4, 'ST2', 'Sushi Tray', '194', '146', '24', '11,1', '1480644627242-Sushi Tray.jpg', '2016-12-02 02:10:27', 0),
(15, 5, 'ST1', 'Snack Tray', '127', '127', '40', '10', '1480644725851-Snack Tray.jpg', '2016-12-02 02:12:05', 0);

-- --------------------------------------------------------

--
-- Table structure for table `material`
--

CREATE TABLE IF NOT EXISTS `material` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `symbol_name` varchar(100) NOT NULL,
  `deskripsi` text NOT NULL,
  `properties` text NOT NULL,
  `packaging` text NOT NULL,
  `foto` varchar(100) NOT NULL,
  `deleted` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=7 ;

--
-- Dumping data for table `material`
--

INSERT INTO `material` (`id`, `symbol_name`, `deskripsi`, `properties`, `packaging`, `foto`, `deleted`) VALUES
(1, 'kita coba edit', 'oke semoga bisa', 'iki propertis', 'packaging e', '1479126233873-1620525_3962184511105_1954868707_n.jpg', 1),
(2, 'wer', 'wer', 'wer', 'wer', '', 1),
(3, 'Polyethylene Terephthalate (PET)', 'PET is clear, tough, and has good gas and moisture barrier properties. Commonly used in soft drink bottles and both food and non-food containers.', 'Clarity, strength, toughness, barrier to gas and moisture, resistance to heat.', 'Plastic soft drink, water, sports drink, beer, mouthwash, catsup and salad dressing bottles. Peanut butter, pickle, jelly and jam jars. Ovenable film and ovenable prepared food trays.', '1480733201932-111.png', 0),
(4, 'Polypropylene (PP)', 'Polypropylene has good chemical resistance, is strong, and has a high melting point making it good for hot-fill liquids. PP is found in flexible and rigid packaging for consumer tray products.', 'Strength, toughness, resistance to heat, chemicals, grease and oil, versatile, barrier to moisture.', 'Catsup bottles, yogurt containers and margarine tubs, medicine bottles.', '1480733345067-555.png', 0),
(5, 'Polystyrene (PS)', 'Polystyrene is a versatile plastic that can be rigid or foamed. General purpose polystyrene is clear, hard and brittle. It has a relatively low melting point. Typical applications include protective packaging, containers, lids, cups, bottles and trays.', 'Versatility, insulation, clarity, easily formed', 'Food service applications, grocery store meat trays, egg cartons, aspirin bottles, cups, plates, cutlery.', '1480733418480-666.png', 0),
(6, 'Other', 'Use of this code indicates that the package in question is made with a resin other than the six listed above, or is made of more than one resin listed above, and used in a multi-layer combination.', 'Dependent on resin or combination of resins.', 'HIPS, OPS.', '1480733596656-777.png', 0);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE IF NOT EXISTS `user` (
  `id_user` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(20) NOT NULL DEFAULT '',
  `pwd` varchar(100) NOT NULL,
  `is_admin` int(11) NOT NULL,
  `id_kabupaten` int(11) NOT NULL DEFAULT '0',
  `fullname` varchar(255) DEFAULT '',
  `NIP` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `telp` varchar(100) DEFAULT NULL,
  `last_login` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `created_date` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE CURRENT_TIMESTAMP,
  `batas` int(11) NOT NULL DEFAULT '0',
  `isok` tinyint(1) NOT NULL DEFAULT '0',
  `deleted` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id_user`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=10 ;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id_user`, `username`, `pwd`, `is_admin`, `id_kabupaten`, `fullname`, `NIP`, `email`, `telp`, `last_login`, `created_date`, `updated`, `batas`, `isok`, `deleted`) VALUES
(1, 'emory', '1feda9ea274fd0850585e29301b36a34db22ee43', 1, 0, 'Hari Wismoyo', 'ITDEV01', 'wismoyohari@gmail.com', '085727336621', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2016-12-03 03:25:57', 0, 0, 0),
(9, 'danang', 'f99aecef3d12e02dcbb6260bbdd35189c89e6e73', 0, 0, 'Danang Soeko R', '-', 'danangsoekoraharjo@gmail.com', '-', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2016-06-29 11:56:38', 0, 0, 0);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
