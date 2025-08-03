const pool = require('../config/db');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

// Helper function to create JWT token
const generateToken = (id, rol) => {
  return jwt.sign({ id, rol }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

exports.login = async (req, res) => {
  const { eposta, sifre } = req.body;

  if (!eposta || !sifre) {
    return res.status(400).json({ success: false, message: 'Lütfen e-posta ve şifre giriniz.' });
  }

  try {
    // Veritabanındaki şifre MD5 ile hash'lenmiş olduğu için gelen şifreyi de MD5'e çeviriyoruz.
    const passwordHash = crypto.createHash('md5').update(sifre).digest('hex');

    const [rows] = await pool.query('SELECT * FROM kullanicilar WHERE eposta = ? AND Durum = "Aktif"', [eposta]);

    if (rows.length === 0 || rows[0].sifre !== passwordHash) {
      return res.status(401).json({ success: false, message: 'Geçersiz e-posta veya şifre.' });
    }

    const user = rows[0];
    const token = generateToken(user.Id, user.rol);
    
    // Şifre bilgisini frontend'e göndermiyoruz.
    const { sifre: _, ...userData } = user;

    res.status(200).json({
      success: true,
      message: 'Giriş başarılı.',
      token,
      user: userData
    });

  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ success: false, message: 'Sunucu hatası oluştu.' });
  }
};