# Üniversite Soru Bankası – Akademik Sınav Yönetim ve Analiz Sistemi

## Takım Bilgileri

**Takım İsmi:** AI-62

### Takım Üyeleri

- Product Owner: Yavuz Selim Paksoy  
- Scrum Master: Umut Can Konukçu  
- Developer #1: Buse Bahadır  
- Developer #2: Hatice Bekdemir  

---

## Proje Hakkında

**Üniversite Soru Bankası**, yükseköğretim kurumlarının sınav hazırlık ve değerlendirme süreçlerini dijital ortama taşıyan bütünleşik bir platformdur. Sistem; sınav planlama, editör görevlendirme, soru havuzu yönetimi ve sınav analiz modüllerini içerir.

Kullanıcılar:

- Sınav oluşturabilir  
- Görevli editörleri belirleyebilir  
- Sorular hazırlayabilir  
- Sınav sonuçlarını analiz edebilir  

---

## Uygulama Özellikleri

### 1. Sınav Yönetimi

- Sınav adı, kodu, tarihi ile adım adım sınav oluşturma
- Editör atama (popup yapıda)
- Validasyon destekli görev formu

### 2. Soru Editörü

- Soru metni, şıklar ve doğru cevap işaretleme
- Zorluk derecesi, kaynak bilgisi, kazanım eşleştirme
- Dönem/hafta bazlı zamanlama
- Aktif/Pasif durumu (toggle switch)

### 3. Sınav Analizi Modülü

- Kitapçık türü, soru numarası, cevap analizleri
- Şık dağılımı ve başarı yüzdesi
- Renkli başarı kutuları:
  - %75 ve üzeri  
  - %50–74  
  - %0–49  
- Filtreleme, sıralama, Excel çıktısı





## Projenin Nihai Hedefi

Bu proje, sınav süreçlerini:

- **Sayısal**,  
- **Objektif**,  
- **Kazanım odaklı** bir yapıya oturtarak;

akademik kaliteyi artırmak ve eğitim çıktılarını izlenebilir hale getirmek için tasarlanmıştır.

Uzun vadede, sınav performansları ile bölüm öğrenim çıktıları arasında **istatistiksel ilişki kurulması** hedeflenmektedir.

---

## Kullanılan Teknolojiler

- **Frontend:** React.js + Tailwind CSS  
- **Backend:** MySQL+ExpressJS (Realtime Database, Auth)  
- **Görselleştirme:** Chart.js  
- **Excel Çıktısı:** ExcelJS  
- **Tasarım:** Mobil uyumlu, sade, kurumsal arayüz  

---

## Hedef Kitle

- Üniversite öğretim elemanları  
- Fakülte sınav sorumluları  
- Eğitim teknolojileri birimleri  
- Soru havuzu yöneticileri  
- Dijital sınav altyapısı arayan kurumlar  

---

## Sprint 1

### Sprint Notları

- Projenin vizyonu ve mimarisi oluşturuldu  
- Giriş sistemi (Login Sayfası) geliştirildi  
- Auth0 Authentication ile tam entegre  
- Google, Facebook ve e-posta ile giriş desteklendi  

### Planlanan Puan: `100 puan`

### Puanlama Mantığı
Toplamda yaklaşık 300 puanlık bir backlog hazırlanmıştır.  
İlk sprintte planlama ve altyapı kurulumları önceliklendirildiği için hedef 100 puan belirlenmiştir.

### Daily Scrum

> Günlük gelişmeler WhatsApp grubunda yazılı olarak paylaşıldı.
![](Sprint1_images/meet.png)
![](Sprint1_images/meet1.png)

### Sprint Board
<img width="1600" height="1002" alt="image" src="https://github.com/user-attachments/assets/83267a8e-5f81-40df-b9ab-b57a191d9a92" />


### Ürün Durumu

- Giriş ekranı UI/UX tamamlandı  
- Validasyon ve hata uyarıları eklendi  
- Mobil uyumlu yapıya geçildi  
- Şifremi unuttum & hesap oluştur bağlantıları aktif  

### Sprint Review

- Giriş akışı başarıyla çalışıyor  
- Backend (MySQL+ExpressJS) stabil çalışıyor  
- Sosyal girişler (Google/Facebook) test edildi  
- Masaüstü ve mobil cihazlarda başarıyla test edildi  

### Ekran Görüntüsü

![](Sprint1_images/login.jpg)

### Retrospective

**İyi Gidenler**
- Net görev tanımı ile hızlı ilerleme  
- Veritabanı entegrasyonu problemsiz  
- UI tasarımı sade ve etkili  

**Geliştirilebilecek Noktalar**
- UI testleri daha erken başlamalı  
- Figma prototipleri önceden paylaşılmalı  
- Git commit mesajları daha açıklayıcı olmalı  

### Sprint 2'ye Hedefler

- Sınav Oluşturma süreci başlayacak  
- Editör Görev Atama popup geliştirilecek  
- Soru Editörü arayüzü çizilecek  
- Rol tabanlı kullanıcı erişimleri tanımlanacak  

---

## Sprint 2

### Sprint Notları

- Editör Görev Atama, Soru Editörü ve Sınav Oluşturma akışı geliştirildi  
- UI sade ve kurumsal çizgide tutuldu  
- Kullanıcı rollerine göre erişim sistemi planlandı  

### Planlanan Puan: `100 puan`
Sprint 2'de odak, sistemin temel işlevsel modüllerinin geliştirilmesine verilmiştir.
Bu sprint için 100 puanlık görev tanımlanmıştır. Puanlama şu modüllerin kapsamına göre dağıtılmıştır:

Editör Görev Atama (popup form, validasyon): 30 puan
Soru Editörü (tam ekran, tüm bileşenlerle): 40 puan
Sınav Oluşturma Süreci (3 adımlı yapı, yönlendirme akışı): 30 puan

### Daily Scrum

> İletişim yine WhatsApp grubu üzerinden sürdürüldü. UI testleri yapılmaya başlandı.
![](Sprint1_images/meet3.png)


### Sprint Board  
<img width="1600" height="802" alt="image" src="https://github.com/user-attachments/assets/d7a67967-41d0-4f85-9aa9-c64cd65d3183" />


### Ürün Durumu

####  Soru Editörü

- Soru metni, zorluk derecesi, şıklar  
- Doğru cevap işaretleme  
- Bölüm & ders kazanımı eşleştirme (çoklu seçim)  
- Dönem/hafta ayarı, aktif/pasif toggle  
- “Kaydet” ve “Geri Dön” butonları

![](Sprint1_images/2501659159c94f2ba7dceebf0ef7141e.jpg)

####  Sınav Oluşturma Süreci

- 3 adımlı yapı: Sınav Bilgisi > Editör Seçimi > Önizleme  
- Üst akış çizgisiyle yönlendirici deneyim

![](Sprint1_images/3.jpg)

### Sprint Review

- Görev atama modülü stabil şekilde tamamlandı  
- Soru editörü kullanıcı dostu şekilde genişletildi  
- UI prototipler finalize edilerek yorumlara göre güncellendi  

### Retrospective

**İyi Gidenler**
- UI’da sade ve temiz çizgi  
- Validasyonlar sorunsuz  
- Mobil önizleme başarılı

**Geliştirilebilecek Noktalar**
- Kazanım verileri dinamikleşmeli  
- Şık sayısına alt/üst sınır eklenmeli  
- Sınav sonrası kullanıcı geri bildirimi gösterilmeli  


## Sprint 3
### Sprint Notları
Bu sprintte, projenin tüm modülleri birbirine entegre edilmiş, kullanıcı bazlı analizler ve yapay zeka destekli yorumlama sistemi tamamlanmıştır. Sistem, sadece sınav hazırlığı ve havuz yönetimiyle sınırlı kalmayıp; öğrenci performansını değerlendiren, bireysel geri bildirim sağlayan ve öğretim kalitesini iyileştirmeye yönelik çıktılar sunan bir yapıya kavuşmuştur.

Sprint Boyunca:
- AI Destekli Soru Analizi modülü tamamlandı
- Öğrenciye özel geri bildirim raporu tasarlandı
- Görselleştirme altyapısı genişletildi
- Kullanıcı deneyimi optimize edildi
- Tüm sistem testleri yapıldı ve proje sonlandırıldı

### Planlanan Puan: `100 puan`
-AI Analiz Paneli ve Metin Çıktıları: 40 puan
-Öğrenci Geri Bildirim Ekranı & Öneri Sistemi: 30 puan
-Sistem entegrasyon & testler: 30 puan

### Daily Scrum
Son sprintte yoğun test ve gözden geçirme süreçleri yürütüldü. Geliştirme boyunca ekip içi iletişim WhatsApp üzerinden devam etti.

### Sprint Board 

### Ürün Durumu
![]()
![](Sprint1_images/login.jpg)
![](Sprint1_images/2501659159c94f2ba7dceebf0ef7141e.jpg)
![](Sprint1_images/4ae35d9b12db49f887ea0a6203aa2f8f.jpg)
![](Sprint1_images/59eb335f00a74bfc89e1ba9ff5b607b2.jpg)
![](Sprint1_images/60602a357dae48f0b09e97471c730b28.jpg)
![](Sprint1_images/1.jpg)
![](Sprint1_images/2.jpg)
![](Sprint1_images/3.jpg)
![](Sprint1_images/4.jpg)
![](Sprint1_images/5.jpg)
![](Sprint1_images/6.jpg)

### AI Destekli Soru Analizi
- Her soru için başarı yüzdesi temel alınarak yorumlama yapıldı
- Alternatif şıklara yönelme eğilimleri, pedagojik anlamda analiz edildi
- Eğitimcilere yönelik tavsiye cümleleri üretildi
- Düşük başarı oranı olan sorular için "öğretimsel geri dönüş önerileri" üretildi

### Sprint Review
- Yapay zeka destekli analiz modülü başarılı şekilde çalışmakta
- Öğrenci geri bildirim ekranı sade ve motive edici tasarlandı
- Tüm sistem modülleri birbirine sorunsuz şekilde bağlandı
- Kullanıcı deneyimi hem masaüstü hem mobilde tatmin edici seviyeye ulaştı

### Retrospective

**İyi Gidenler**

AI modülü öğretimsel anlamda yüksek katkı sağladı
Öğrenciye özel geri bildirim sistemi kullanıcılar tarafından beğenildi
Tüm modüllerin kurumsal uyumu ve sade tasarımı projeye bütünlük kattı

**Geliştirilebilecek Noktalar**

AI yorumlarının doğruluğu kullanıcı verisi ile zamanla daha iyi optimize edilebilir
Öğrenci geri bildirimi PDF çıktısı olarak alınabilir hale getirilmeli
Grafiksel analizler ileride etkileşimli hale getirilebilir (Chart.js interaktif modlar)

### Genel Değerlendirme
Bu proje, akademik sınav süreçlerini sadece teknik olarak değil; pedagojik ve ölçme-değerlendirme perspektifiyle de ele alarak çok yönlü bir çözüm sunmuştur. Gerek yapay zeka analiz modülü gerekse kazanım bazlı değerlendirme altyapısıyla eğitim teknolojileri alanında örnek bir model oluşturmuştur.


Projemizin demo videosu:
<iframe width="560" height="315" src="https://www.youtube.com/embed/0ME_xQyHSZY?si=acyBK67J-yLhjzE1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
