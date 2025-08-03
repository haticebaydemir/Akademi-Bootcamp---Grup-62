const jwt = require('jsonwebtoken');
const pool = require('../config/db');

exports.protect = async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      // Token'ı header'dan al (Bearer kısmı olmadan)
      token = req.headers.authorization.split(' ')[1];

      // Token'ı doğrula
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Token'dan gelen kullanıcı ID'si ile kullanıcıyı bul ve req objesine ekle
      const [rows] = await pool.query('SELECT Id, rol FROM kullanicilar WHERE Id = ?', [decoded.id]);
      
      if(rows.length === 0) {
        return res.status(401).json({ success: false, message: 'Bu token\'a sahip kullanıcı bulunamadı.' });
      }

      req.user = rows[0]; // { Id: 1, rol: 'Admin' }
      next();

    } catch (error) {
      console.error(error);
      return res.status(401).json({ success: false, message: 'Yetkisiz erişim, token geçersiz.' });
    }
  }

  if (!token) {
    return res.status(401).json({ success: false, message: 'Yetkisiz erişim, token bulunamadı.' });
  }
};