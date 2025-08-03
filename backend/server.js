const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

// Ortam değişkenlerini yükle
dotenv.config();

// Rotaları import et
const authRoutes = require('./routes/auth');
const bolumRoutes = require('./routes/bolumler');
const dersRoutes = require('./routes/dersler'); // Yeni eklendi
const donemRoutes = require('./routes/donemler'); // Yeni eklendi

// Veritabanı bağlantısını başlat
require('./config/db');

const app = express();

// Middleware'ler
app.use(cors()); // CORS'u etkinleştir
app.use(express.json()); // Gelen JSON verilerini parse etmek için

// Ana Rotalar
app.get('/', (req, res) => {
  res.send('Üniversite Soru Bankası – Akademik Sınav Yönetim ve Analiz Sistemi | API Çalışıyor...');
});

// API Rotaları
app.use('/api/auth', authRoutes);
app.use('/api/bolumler', bolumRoutes);
app.use('/api/dersler', dersRoutes);
app.use('/api/donemler', donemRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Sunucu ${PORT} portunda çalışıyor...`));