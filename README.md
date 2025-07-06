Takım İsmi
Takım AI-62

Takım Elemanları
Product Owner: Yavuz Selim Paksoy

Scrum Master: Umut Can

Developer #1: Buse Bahadır

Developer #2: Hatice Bekdemir

Proje Adı
Yapay Zeka Destekli Uyku Günlüğü ve Kişisel Tavsiye Sistemi

Proje Hakkında
SleepWise — Yapay Zeka Destekli Kişisel Uyku Koçu, sadece uyku süresini kaydeden bir uygulama olmanın ötesine geçerek, kullanıcıların uyku alışkanlıklarını analiz etmeye ve iyileştirmeye odaklanan kişiselleştirilmiş bir sağlık teknolojisidir.

Uygulama, kullanıcıdan günlük olarak yapılandırılmış veri toplar: uyku süresi, stres seviyesi, fiziksel aktivite, ekran süresi, kafein tüketimi, duygudurum gibi parametreler Firebase üzerinde saklanır ve yapay zeka desteğiyle analiz edilir.

Bu veriler üzerinden GenAI (Gemini) tarafından kullanıcıya özel öneriler oluşturulur. Örneğin:
“Stres düzeyinizin arttığı günlerde uyku süreniz %20 düşmektedir. Gece rutinlerinizi gözden geçirmeyi deneyebilirsiniz.”

Veriler, kullanıcıya grafiklerle sunulur ve öneriler gerçek zamanlı olarak güncellenir.

Projenin Nihai Hedefi
SleepWise’in hedefi, uyku problemleri yaşayan bireyler için veri destekli, kişiselleştirilmiş bir rehberlik sistemi sunmaktır. Uygulama; uyku alışkanlıklarını analiz eden, yapay zeka ile çalışan, kullanıcıya sürekli geri bildirim veren, dijital sağlık asistanı işlevi görür.

Uygulama Arayüzü
Uygulamanın ilk sürümünde geliştirilen ekranlar:

Kullanıcı Girişi ve Kayıt Olma Sayfası

Ana Menü (Profil ve Uyku Takibi seçenekleri)

Uyku Takibi Simülasyonu: Kullanıcının yaş, cinsiyet, meslek, uyku süresi, stres düzeyi, nabız, tansiyon vb. verileri girdiği arayüz

Sonuç Ekranı:

Girilen verilerin özetlendiği panel

Uyku bozukluğu tespiti (örneğin: Insomnia)

GenAI tarafından oluşturulmuş kişisel öneri alanı

Özellikler
Kişiselleştirilmiş Veri Toplama
Kullanıcıdan günlük olarak kısa ve yapılandırılmış sorular aracılığıyla veri toplanır.

Uyku süresi ve kalitesi

Stres seviyesi

Fiziksel aktivite düzeyi

Ekran süresi

Duygudurum

Kafein tüketimi

Nabız, tansiyon, adım sayısı

Yapay Zeka Destekli Analiz ve Öneri
Uyku alışkanlıkları analiz edilir

Geçmiş verilere göre kişisel öneriler sunulur

Olası riskli durumlarda uyarılar verilir

Yaşam tarzı ile uyku arasındaki korelasyonlar tespit edilir

Kullanıcı Dostu Arayüz
Hızlı ve yapılandırılmış veri girişi

Gerçek zamanlı analiz

Görsel geri bildirim ve sade sonuç ekranları

Kullanılan Teknolojiler
Frontend: React.js

Backend: Firebase (Authentication & Realtime Database)

LLM: Google Gemini (LangChain ile)

Veri Görselleştirme: Chart.js

Dataset: Kaggle – Sleep Health and Lifestyle Dataset

Hedef Kitle
Uyku problemi yaşayan çalışanlar

Üniversite öğrencileri

Sağlıklı yaşam odaklı bireyler

Dijital sağlık uygulamalarını aktif kullanan kişiler

İkincil hedef: Uyku terapistleri, psikologlar, danışmanlar

Sprint 1
Sprint Notları
Bu ilk sprint, SleepWise projesinin temelini oluşturmak üzere planlanmıştır. Projenin vizyonu netleştirilmiş, MVP kapsamı belirlenmiş ve teknik ön hazırlıklar yapılmıştır. Kullanıcıdan toplanacak veriler yapılandırılmış, öneri sistemi için yapay zeka planlaması yapılmıştır.

Sprint İçinde Tamamlanması Tahmin Edilen Puan
100 puan

Puan Tamamlama Mantığı
Toplamda yaklaşık 300 puanlık bir backlog hazırlanmıştır. İlk sprintte planlama ve altyapı kurulumları önceliklendirildiği için hedef 100 puan belirlenmiştir.

Daily Scrum
Zaman kısıtları nedeniyle günlük gelişmeler Whatsapp grubunda yazılı olarak paylaşılmıştır.

Ürün Durumu
Proje vizyonu ve kullanıcı değeri netleştirildi

Uyku ile ilişkili veri alanları yapılandırıldı

Genel uygulama akışı planlandı

Yapay zeka algoritması ve LLM altyapısı araştırıldı

Uygulama arayüzünün ilk versiyonları tasarlandı ve çalıştırıldı

Uyku Takibi Simülasyon Ekranı geliştirildi

Sonuç ekranında uyku bozukluğu tespiti ve GenAI önerisi başarıyla sunuluyor

Sprint Review
Ürün fikri, kullanıcı gereksinimlerine göre net tanımlandı

Veri yapısı oluşturuldu, yapay zekaya uygun formatta hazırlandı

Uyku bozukluğu tespiti ekranı geliştirildi

GenAI ile öneri üretimi başarıyla başlatıldı

Kullanıcı arayüzü temel olarak çalışır durumda

Sprint Retrospective
İyi Gidenler

Vizyon netliği ve ekip içi motivasyon

Yapılandırılmış veri yapısı

Başarılı ekran geliştirme ve test çıktısı

LLM ile ilk entegrasyon denemeleri

Geliştirilebilecek Noktalar

Ekip içi görev dağılımı daha netleştirilmeli

UI geliştirme süreçleri daha erken başlamalı

Daily Scrum süreçleri daha aktif takip edilmeli

İyileştirme Hedefleri (Sprint 2 için)

Wireframe ve UI prototip tamamlanacak

GenAI öneri motoru genişletilecek

Backend API bağlantısı tamamlanacak

Kullanıcı senaryoları tanımlanacak ve test edilecek

 
