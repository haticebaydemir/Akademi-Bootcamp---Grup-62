-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Anamakine: localhost
-- Üretim Zamanı: 03 Ağu 2025, 15:49:26
-- Sunucu sürümü: 10.11.10-MariaDB-log
-- PHP Sürümü: 8.3.22

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Veritabanı: `portaeduka`
--

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `ayarlar`
--

CREATE TABLE `ayarlar` (
  `Id` int(5) NOT NULL,
  `SiteBasligi` text NOT NULL,
  `SiteAciklamasi` text NOT NULL,
  `CaptchaSiteKey` text NOT NULL,
  `CaptchaSecretKey` text NOT NULL,
  `FooterAlani` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Tablo döküm verisi `ayarlar`
--

INSERT INTO `ayarlar` (`Id`, `SiteBasligi`, `SiteAciklamasi`, `CaptchaSiteKey`, `CaptchaSecretKey`, `FooterAlani`) VALUES
(1, 'Üniversite Soru Bankası', 'Üniversite Soru Bankası\'na Hoş Geldiniz', '', '', 'Copyright © 2025 Grup 62');

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `bolumler`
--

CREATE TABLE `bolumler` (
  `Id` int(11) NOT NULL,
  `BagliBirim` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `BolumAdi` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `BolumKazanim` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`BolumKazanim`)),
  `Durum` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Tablo döküm verisi `bolumler`
--

INSERT INTO `bolumler` (`Id`, `BagliBirim`, `BolumAdi`, `BolumKazanim`, `Durum`) VALUES
(1, 'SBF', 'Hemşirelik', '{   \"1\": \"Mesleki profesyonellik doğrultusunda uygulamaları planlama, yürütme, değerlendirme ve sonuçları etkin bir şekilde yorumlama kabiliyeti kazanır.\",   \"2\": \"Sağlıkla ilgili araştırma, proje ve diğer etkinliklere katılır.\",   \"3\": \"Bilimsel faaliyet içerisinde olarak, mesleği ile ilgili verilerin araştırılması ve bunların yayınlanmasında etkin rol üstlenir.\",   \"4\": \"Sağlıklı veya hasta bireylerin her ortamda hemşirelik bakım gereksinimlerini belirler.\",   \"5\": \"Mesleki otonomisini kullanarak bütüncül yaklaşımla hastalarına bakım sağlar.\",   \"6\": \"Birey, aile ve toplumun sağlığına yönelik eğitim, danışmanlık, yönetim ve organizasyon, araştırma ve bakım hizmetlerini sunma becerisi edinir.\",   \"7\": \"Kalite anlayışını benimseyerek hemşirelik hizmetlerini uluslararası standartlara uygun bir şekilde yapar.\",   \"8\": \"Alanıyla ilgilli yasal süreçleri bilip, etik ilkeleri doğru kullanarak mesleki sorumlulukları üstlenir.\",   \"9\": \"Hastaların fizyolojik, psikolojik, sosyal ve kültürel özelliklerine ilişkin öğrenciler mesleki bilimsel bilgilere sahip olur.\",   \"10\": \"Hemşirelik mesleğinde kullanılan sağlık, fen, sosyal alanlarına ilişkin bilimsel bilgileri kullanabilir.\",   \"11\": \"Çağdaş hemşireliğin rollerini özümseyerek çalışmalarını yürütür.\",   \"12\": \"Acil, kriz ve doğal afet durumlarında hemşirelik mesleğinin gerektirdiği sağlık hizmetlerini sunma becerisini kazanmıştır.\" }', 'Aktif'),
(2, 'SBF', 'Ebelik', '{   \"1\": \"Ebelik uygulamalarında temel oluşturacak insan, sağlık, kavram, kuram ve modelleri bilgisi kazandırmaktır.\",   \"2\": \"Kadını yaşamının tüm dönemleri boyunca kanıta dayalı uygulamalar doğrultusunda üreme sağlığı ihtiyaçlarını karşılayabilme bilgi ve beceriye sahip olmasını sağlamaktır.\",   \"3\": \"Ebelik alanında edindiği bilgi ve becerileri kullanarak, kadın ve ailesinin gebelik, doğum eylemi ve doğum sonrası dönemlerde sağlık sorunlarını ve hastalıklara neden olacak risk faktörlerini değerlendirebilme, tanımlayabilme, analiz edebilme, araştırmalara ve kanıta dayalı uygulamalara yönelik çözüm önerileri geliştirebilme becerilerini kazanmasını sağlamaktır.\",   \"4\": \"Gebelik öncesi, gebelik, doğum ve doğum sonrası süreçlerde sağlığın geliştirilmesi ve yükseltilmesini sağlamasına katkıda bulunacak, riskli durumları ve sağlıktan sapmaları erken tanılamalarda yardımcı olacak, yaşadığı ve çalıştığı toplumun kültürel ve sağlık sorunlarına duyarlı sosyal sorumluluk bilinci ile yapılacak olan araştırma ve proje ve etkinlikleri planlayıp düzenleyebilme, eğitim verme, projelerde aktif olarak yer alabilme ya da yönetebilme becerisini kazandırmaktır.\",   \"5\": \"Normal doğumları kendi sorumluluğunda yaptırabilme becerisi kazandırmaktır.\",   \"6\": \"Ebelik mesleğinin uygulama alanlarında karşılaşılan ve öngörülemeyen karmaşık sorunları çözmek için bireysel ve ekip üyesi olarak rol ve sorumluluk alabilme becerisini sağlamaktadır.\",   \"7\": \"Ebelik eğitimi, yönetimi ve araştırmalarında diğer disiplinlerle işbirliği yapacak donanıma sahip ebeler yetiştirmektir.\",   \"8\": \"Ebelik meslek yaşamı boyunca sürekli öğrenmeyi amaç edinerek, sosyal yönlerini, iletişim, eleştirel düşünme, yaratıcılık ve girişimcilik becerilerini geliştirebilme yeteneğini kazandırmak ve meslektaşları ile iletişim becerilerini kazanmasını sağlamaktır.\",   \"9\": \"Ebelik ile ilgili konularda çalıştığı birimlerde meslektaşlarını ve diğer sağlık alanındaki sağlık elemanlarına edinmiş olduğu bilgi, beceri ve düşüncelerini aktarabilme, çıkabilecek sorunlara yönelik çözüm önerileri getirebilme yeteneğini kazandırmaktır.\",   \"10\": \"Alanıyla ilgili bilgisayar ve diğer bilişim ve iletişim teknolojilerini kullanabilme becerisine sahip olmasını sağlamaktır.\",   \"11\": \"Ebelik alanı ile ilgili verilerin toplanması, yorumlanması, uygulanması ve sonuçlarının duyurulması aşamalarında toplumsal, bilimsel, kültürel, etik değerlere uygun hareket edebilme bilgi ve becerisini kazandırmaktır.\",   \"12\": \"İnsan ve sosyal hakların evrenselliği, sosyal adalet, kalite kültürü ve kültürel değerlerin korunması ile çevre ve doğa bilinci doğrultusunda iş sağlığı ve güvenliği konularında yeterli bilgi ve birikime sahip olabilme becerisini kazandırmaktır.\",   \"13\": \"Bir Yabancı Dili kullanabilme ve mesleğine özgü yayınları takip edebilme, yabancı hasta ve ekip üyeleriyle iletişim kurma becerisi kazandırmaktır.\" }', 'Aktif'),
(3, 'SBF', 'Fizyoterapi ve Rehabilitasyon', '{   \"1\": \"Alanında uygulamanın gerektirdiği güncel kuramsal ve uygulamalı bilgilere sahiptir.\",   \"2\": \"Alanı ile ilgili araç-gereçleri ve teknolojileri kullanır ve bakımını yaparak sürdürür, temel düzeyde bilişim ve iletişim teknolojilerini kullanır.\",   \"3\": \"Alanında sorunları tanımlar, analiz eder, kanıta dayalı çözüm önerileri geliştirebilir ve önerilerini başkaları ile paylaşır.\",   \"4\": \"Yasal sorumluluklarının farkındadır, alanında temel düzeydeki çalışmaları bağımsız olarak yürütebilir.\",   \"5\": \"Hasta, hasta yakınları ve çalışma arkadaşları ile doğru, anlaşılır, dürüst ve açık iletişim kurar, düşünce ve bilgilerini yazılı ve sözlü iletişim yoluyla aktarabilir.\",   \"6\": \"Alanı ile ilgili uygulamalarda aktif bir ekip üyesi olarak sorumluluk alır.\",   \"7\": \"Alanında edindiği bilgileri kullanarak, bilimsel verileri eleştirel bir yaklaşımla yorumlar ve değerlendirir.\",   \"8\": \"Yaşam boyu öğrenmenin önemini kavrar, öğrenme gereksinimlerini belirleyerek karşılayabilir, bilim ve teknolojideki gelişmeleri izleyerek kendini sürekli yeniler.\",   \"9\": \"Sosyal, kültürel özellikler ve evrensel etik değerleri dikkate alarak davranır; mesleğinin gerektirdiği etik ilke ve standartları korur ve sürdürür.\" }', 'Aktif'),
(4, 'SBF', 'Beslenme ve Diyetetik', '{\"Hata\": \"Kazanım Mevcut Değil\"}', 'Aktif');

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `dersler`
--

CREATE TABLE `dersler` (
  `Id` int(11) NOT NULL,
  `BolumId` int(11) NOT NULL,
  `DersKodu` varchar(255) NOT NULL,
  `DersAdi` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `Yariyil` int(11) NOT NULL,
  `Kazanimlar` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`Kazanimlar`)),
  `Durum` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Tablo döküm verisi `dersler`
--

INSERT INTO `dersler` (`Id`, `BolumId`, `DersKodu`, `DersAdi`, `Yariyil`, `Kazanimlar`, `Durum`) VALUES
(1, 1, 'HE113', 'HEMŞİRELİĞE GİRİŞ', 1, '{\"1\":\"Hemşirelik mesleğinin görev, yetki ve sorumluluklarını bilir\",\"2\":\"İnsan, çevre, sağlık ve hastalık, hemşirelik kavramlarını anlar\",\"3\":\"Sağlığın korunması, sürdürülmesi ve geliştirilmesinin öncelikli olduğunu anlar\",\"4\":\"Hemşirelik mesleğinin varoluş nedenini ve mesleğin tarihçesini kavrar\",\"5\":\"Hemşirelik kuramlarını anlayarak kendi mesleki bakış açısını geliştirir.\",\"6\":\"Hemşireliğin etik kodlarını ve mesleki değerleri anlar ve bilir.\",\"7\":\"Hemşirelik süreci basamaklarını bilir ve hasta bakımı planının uygulanması arasındaki ilişkiyi kavrar.\",\"8\":\"Hemşireliğin meslekleşme sürecini bilir.\",\"9\":\"Hemşirelikle İlgili Ulusal ve Uluslararası Örgütleri bilir.\"}', 'Aktif'),
(4, 1, 'HE115', 'MİKROBİYOLOJİ VE PARAZİTOLOJİ', 1, '{\"1\":\"Bu dersin sonunda öğrenciler bakterileri tanır\",\"2\":\"bu dersin sonunda öğrenciler virüsleri tanırlar\",\"3\":\"bu dersin sonucunda öğrenciler mantarları tanırlar\",\"4\":\"bu dersin sonucunda öğrenciler parazitleri tanırlar\",\"5\":\"bu dersin sonunda öğrenci mikropların insanlar üzerindeki etkilerini açıklar\"}', 'Aktif'),
(5, 1, 'HE119', 'FİZYOLOJİ', 1, '{\"1\":\"İnsan vücudunun fizyolojik yapısını ayırt etmek\",\"2\":\"Solunum sistemi fizyolojisini ayırt etmek\",\"3\":\"Dolaşım sisteminin fizyolojisini ayırt etmek\",\"4\":\"Sinir sistemi fizyolojini ayırt etmek\",\"5\":\"Diğer vücut sistemleri ve duyu organlarının fizyolojisini ayırt etmek\"}', 'Aktif');

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `donemler`
--

CREATE TABLE `donemler` (
  `Id` int(11) NOT NULL,
  `EgitimYili` varchar(255) NOT NULL,
  `DonemAdı` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `Durum` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Tablo döküm verisi `donemler`
--

INSERT INTO `donemler` (`Id`, `EgitimYili`, `DonemAdı`, `Durum`) VALUES
(6, '2024-2025', 'Güz', 'Aktif'),
(7, '2024-2025', 'Bahar', 'Aktif');

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `kullanicilar`
--

CREATE TABLE `kullanicilar` (
  `Id` int(11) NOT NULL,
  `eposta` varchar(255) NOT NULL,
  `sifre` varchar(255) NOT NULL,
  `ad` text CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `soyad` text CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `telefon` varchar(15) NOT NULL,
  `unvan` text NOT NULL,
  `rol` varchar(255) NOT NULL,
  `tema` varchar(255) NOT NULL,
  `yetkilendirme` varchar(255) NOT NULL,
  `last_login` datetime NOT NULL,
  `last_login_ip` varchar(45) NOT NULL,
  `Durum` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Tablo döküm verisi `kullanicilar`
--

INSERT INTO `kullanicilar` (`Id`, `eposta`, `sifre`, `ad`, `soyad`, `telefon`, `unvan`, `rol`, `tema`, `yetkilendirme`, `last_login`, `last_login_ip`, `Durum`) VALUES
(4, 'admin@admin.com', '25f9e794323b453885f5181f1b624d0b', 'Admin', 'Adam', '', 'Sistem Yöneticisi', 'Admin', '', '1', '0000-00-00 00:00:00', '', 'Aktif');

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `sorular`
--

CREATE TABLE `sorular` (
  `Id` int(11) NOT NULL,
  `BolumId` int(11) NOT NULL,
  `DersKodu` int(11) NOT NULL,
  `SoruTipi` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `SoruMetni` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `Cevap` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`Cevap`)),
  `Zorluk` varchar(255) NOT NULL,
  `BolumKazanim` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `DersKazanim` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `Donem` varchar(255) NOT NULL,
  `Hafta` varchar(255) NOT NULL,
  `Kaynak` varchar(255) NOT NULL,
  `Kullanici` int(11) NOT NULL,
  `SonIşlem` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `Durum` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dökümü yapılmış tablolar için indeksler
--

--
-- Tablo için indeksler `ayarlar`
--
ALTER TABLE `ayarlar`
  ADD PRIMARY KEY (`Id`);

--
-- Tablo için indeksler `bolumler`
--
ALTER TABLE `bolumler`
  ADD PRIMARY KEY (`Id`);

--
-- Tablo için indeksler `dersler`
--
ALTER TABLE `dersler`
  ADD PRIMARY KEY (`Id`);

--
-- Tablo için indeksler `donemler`
--
ALTER TABLE `donemler`
  ADD PRIMARY KEY (`Id`);

--
-- Tablo için indeksler `kullanicilar`
--
ALTER TABLE `kullanicilar`
  ADD PRIMARY KEY (`Id`);

--
-- Tablo için indeksler `sorular`
--
ALTER TABLE `sorular`
  ADD PRIMARY KEY (`Id`);

--
-- Dökümü yapılmış tablolar için AUTO_INCREMENT değeri
--

--
-- Tablo için AUTO_INCREMENT değeri `bolumler`
--
ALTER TABLE `bolumler`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- Tablo için AUTO_INCREMENT değeri `dersler`
--
ALTER TABLE `dersler`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Tablo için AUTO_INCREMENT değeri `donemler`
--
ALTER TABLE `donemler`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Tablo için AUTO_INCREMENT değeri `kullanicilar`
--
ALTER TABLE `kullanicilar`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Tablo için AUTO_INCREMENT değeri `sorular`
--
ALTER TABLE `sorular`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
