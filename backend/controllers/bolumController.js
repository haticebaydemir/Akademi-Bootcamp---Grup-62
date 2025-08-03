const pool = require('../config/db');

// GET /api/bolumler -> Tüm bölümleri listele
exports.getAllBolumler = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM bolumler ORDER BY BolumAdi');
    res.status(200).json({ success: true, data: rows });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Sunucu hatası' });
  }
};

// POST /api/bolumler -> Yeni bölüm oluştur
exports.createBolum = async (req, res) => {
  const { BagliBirim, BolumAdi, BolumKazanim, Durum } = req.body;
  try {
    // BolumKazanim bir JSON objesi olarak gelirse, string'e çevir
    const kazanimString = typeof BolumKazanim === 'object' ? JSON.stringify(BolumKazanim) : BolumKazanim;
    
    const [result] = await pool.query(
      'INSERT INTO bolumler (BagliBirim, BolumAdi, BolumKazanim, Durum) VALUES (?, ?, ?, ?)',
      [BagliBirim, BolumAdi, kazanimString, Durum]
    );
    res.status(201).json({ success: true, message: 'Bölüm başarıyla oluşturuldu.', id: result.insertId });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Sunucu hatası', error: error.message });
  }
};

// PUT /api/bolumler/:id -> Bölümü güncelle
exports.updateBolum = async (req, res) => {
  const { id } = req.params;
  const { BagliBirim, BolumAdi, BolumKazanim, Durum } = req.body;
  try {
    const kazanimString = typeof BolumKazanim === 'object' ? JSON.stringify(BolumKazanim) : BolumKazanim;

    const [result] = await pool.query(
      'UPDATE bolumler SET BagliBirim = ?, BolumAdi = ?, BolumKazanim = ?, Durum = ? WHERE Id = ?',
      [BagliBirim, BolumAdi, kazanimString, Durum, id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ success: false, message: 'Bölüm bulunamadı.' });
    }
    res.status(200).json({ success: true, message: 'Bölüm başarıyla güncellendi.' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Sunucu hatası', error: error.message });
  }
};

// DELETE /api/bolumler/:id -> Bölümü sil
exports.deleteBolum = async (req, res) => {
  const { id } = req.params;
  try {
    // İpucu: Bu bölüme bağlı dersler varsa silme işlemini engellemek daha güvenli olabilir.
    const [result] = await pool.query('DELETE FROM bolumler WHERE Id = ?', [id]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ success: false, message: 'Bölüm bulunamadı.' });
    }
    res.status(200).json({ success: true, message: 'Bölüm başarıyla silindi.' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Sunucu hatası', error: error.message });
  }
};