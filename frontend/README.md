# Üniversite Soru Havuzu

Bu proje, iki ayrı frontend projesinin birleştirilmesiyle oluşturulmuş bir üniversite soru havuzu uygulamasıdır.

## Özellikler

### Giriş Sistemi (Proje1)
- Modern ve animasyonlu giriş sayfası
- Google OAuth entegrasyonu
- Şifremi unuttum sayfası
- Kayıt olma sayfası
- Karanlık/Aydınlık tema desteği
- Otomatik form kaydetme
- Gerçek zamanlı şifre gücü kontrolü

### Ana Uygulama (Proje2)
- Soru editörü
- Sınav oluşturma
- Sınav analizi
- Bölüm yönetimi
- Dönem işlemleri
- Ders yönetimi
- Kullanıcı işlemleri

## Kurulum

1. Projeyi klonlayın:
```bash
git clone <repository-url>
cd birlesik-proje
```

2. Bağımlılıkları yükleyin:
```bash
npm install
```

3. Uygulamayı başlatın:
```bash
npm start
```

## Kullanım

### Demo Giriş Bilgileri
- **Kullanıcı Adı:** admin
- **Şifre:** password123

### Giriş Yöntemleri
1. **E-posta ile giriş:** Yukarıdaki demo bilgilerini kullanın
2. **Google ile giriş:** Google hesabınızla giriş yapın

### Ana Özellikler
- **Soru Editörü:** Yeni sorular oluşturun ve düzenleyin
- **Sınav Oluşturma:** Sorulardan sınav oluşturun
- **Sınav Analizi:** Sınav sonuçlarını analiz edin
- **Sistem Yönetimi:** Bölüm, dönem ve ders ayarlarını yapın

## Teknolojiler

- **React 18**
- **React Router DOM**
- **Tailwind CSS**
- **Lucide React Icons**
- **Google OAuth**
- **Framer Motion**

## Proje Yapısı

```
birlesik-proje/
├── public/
│   ├── images/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── MainApp.js
│   │   ├── SinavOlusturma.js
│   │   ├── SinavAnaliz.js
│   │   ├── Bolumler.js
│   │   ├── DonemIslemleri.js
│   │   ├── Dersler.js
│   │   └── Kullanicilar.js
│   ├── pages/
│   │   ├── LoginPage.js
│   │   ├── SignupPage.js
│   │   └── ForgotPasswordPage.js
│   ├── App.js
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## Geliştirme

### Yeni Sayfa Ekleme
1. `src/pages/` klasörüne yeni sayfa bileşenini ekleyin
2. `src/App.js` dosyasında route'u tanımlayın

### Yeni Bileşen Ekleme
1. `src/components/` klasörüne yeni bileşeni ekleyin
2. `src/components/MainApp.js` dosyasında import edin ve route'u ekleyin

## Lisans

Bu proje MIT lisansı altında lisanslanmıştır. 