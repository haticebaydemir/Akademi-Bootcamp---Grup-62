const pool = require('../config/db');

// @desc    Tüm dönemleri getirir
// @route   GET /api/donemler
// @access  Public
exports.getAllDonemler = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM donemler ORDER BY EgitimYili DESC, DonemAdı');
    res.status(200).json({ success: true, count: rows.length, data: rows });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Sunucu hatası', error: error.message });
  }
};

// @desc    ID'ye göre tek bir dönemi getirir
// @route   GET /api/donemler/:id
// @access  Public
exports.getDonemById = async (req, res) => {
    const { id } = req.params;
    try {
        const [rows] = await pool.query('SELECT * FROM donemler WHERE Id = ?', [id]);
        if (rows.length === 0) {
            return res.status(404).json({ success: false, message: 'Bu ID ile dönem bulunamadı.' });
        }
        res.status(200).json({ success: true, data: rows[0] });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Sunucu hatası', error: error.message });
    }
};

// @desc    Yeni bir dönem oluşturur
// @route   POST /api/donemler
// @access  Private (Protected)
exports.createDonem = async (req, res) => {
  // Not: Tablo adında 'ı' karakteri var. Buna dikkat edelim.
  const { EgitimYili, DonemAdı, Durum } = req.body;

  if (!EgitimYili || !DonemAdı || !Durum) {
    return res.status(400).json({ success: false, message: 'Lütfen tüm alanları doldurun.' });
  }

  try {
    const [result] = await pool.query(
      'INSERT INTO donemler (EgitimYili, DonemAdı, Durum) VALUES (?, ?, ?)',
      [EgitimYili, DonemAdı, Durum]
    );
    res.status(201).json({ success: true, message: 'Dönem başarıyla oluşturuldu.', data: { id: result.insertId, ...req.body } });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Sunucu hatası', error: error.message });
  }
};

// @desc    Bir dönemi günceller
// @route   PUT /api/donemler/:id
// @access  Private (Protected)
exports.updateDonem = async (req, res) => {
  const { id } = req.params;
  const { EgitimYili, DonemAdı, Durum } = req.body;

  try {
    const [result] = await pool.query(
      'UPDATE donemler SET EgitimYili = ?, DonemAdı = ?, Durum = ? WHERE Id = ?',
      [EgitimYili, DonemAdı, Durum, id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ success: false, message: 'Bu ID ile dönem bulunamadı.' });
    }

    res.status(200).json({ success: true, message: 'Dönem başarıyla güncellendi.' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Sunucu hatası', error: error.message });
  }
};

// @desc    Bir dönemi siler
// @route   DELETE /api/donemler/:id
// @access  Private (Protected)
exports.deleteDonem = async (req, res) => {
  const { id } = req.params;
  try {
    const [result] = await pool.query('DELETE FROM donemler WHERE Id = ?', [id]);
    
    if (result.affectedRows === 0) {
      return res.status(404).json({ success: false, message: 'Bu ID ile dönem bulunamadı.' });
    }

    res.status(200).json({ success: true, message: 'Dönem başarıyla silindi.' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Sunucu hatası', error: error.message });
  }
};