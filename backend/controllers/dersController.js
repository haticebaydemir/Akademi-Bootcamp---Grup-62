const pool = require('../config/db');

/**
 * Helper function to parse JSON fields safely.
 * @param {Array} rows - The array of objects from the database.
 * @param {string} fieldName - The name of the field to parse.
 * @returns {Array} The rows with the parsed JSON field.
 */
const parseJsonField = (rows, fieldName) => {
  return rows.map(row => {
    try {
      // JSON alanını JavaScript nesnesine dönüştür
      row[fieldName] = JSON.parse(row[fieldName]);
    } catch (e) {
      // Hata durumunda veya alan geçerli bir JSON değilse, orijinal dizeyi koru
      // ya da bir hata nesnesi ata
      row[fieldName] = { error: 'Geçersiz JSON formatı', value: row[fieldName] };
    }
    return row;
  });
};


// @desc    Tüm dersleri getirir
// @route   GET /api/dersler
// @access  Public
exports.getAllDersler = async (req, res) => {
  try {
    const sql = `
      SELECT d.*, b.BolumAdi 
      FROM dersler d
      LEFT JOIN bolumler b ON d.BolumId = b.Id
      ORDER BY d.DersAdi
    `;
    let [rows] = await pool.query(sql);
    
    // Kazanimlar alanını JSON'dan objeye çevir
    rows = parseJsonField(rows, 'Kazanimlar');

    res.status(200).json({ success: true, count: rows.length, data: rows });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Sunucu hatası', error: error.message });
  }
};

// @desc    ID'ye göre tek bir dersi getirir
// @route   GET /api/dersler/:id
// @access  Public
exports.getDersById = async (req, res) => {
    const { id } = req.params;
    try {
        const sql = `
            SELECT d.*, b.BolumAdi 
            FROM dersler d
            LEFT JOIN bolumler b ON d.BolumId = b.Id
            WHERE d.Id = ?
        `;
        let [rows] = await pool.query(sql, [id]);

        if (rows.length === 0) {
            return res.status(404).json({ success: false, message: 'Bu ID ile ders bulunamadı.' });
        }
        
        // Kazanimlar alanını JSON'dan objeye çevir
        const [parsedRow] = parseJsonField(rows, 'Kazanimlar');

        res.status(200).json({ success: true, data: parsedRow });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Sunucu hatası', error: error.message });
    }
};


// @desc    Yeni bir ders oluşturur
// @route   POST /api/dersler
// @access  Private (Protected)
exports.createDers = async (req, res) => {
  const { BolumId, DersKodu, DersAdi, Yariyil, Kazanimlar, Durum } = req.body;

  if (!BolumId || !DersKodu || !DersAdi || !Yariyil || !Durum) {
    return res.status(400).json({ success: false, message: 'Lütfen tüm zorunlu alanları doldurun.' });
  }

  try {
    // Kazanimlar objesini veritabanına kaydetmek için JSON string'ine çevir
    const kazanimlarString = typeof Kazanimlar === 'object' ? JSON.stringify(Kazanimlar) : Kazanimlar || '{}';

    const [result] = await pool.query(
      'INSERT INTO dersler (BolumId, DersKodu, DersAdi, Yariyil, Kazanimlar, Durum) VALUES (?, ?, ?, ?, ?, ?)',
      [BolumId, DersKodu, DersAdi, Yariyil, kazanimlarString, Durum]
    );
    res.status(201).json({ success: true, message: 'Ders başarıyla oluşturuldu.', data: { id: result.insertId, ...req.body } });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Sunucu hatası', error: error.message });
  }
};

// @desc    Bir dersi günceller
// @route   PUT /api/dersler/:id
// @access  Private (Protected)
exports.updateDers = async (req, res) => {
  const { id } = req.params;
  const { BolumId, DersKodu, DersAdi, Yariyil, Kazanimlar, Durum } = req.body;

  try {
    const kazanimlarString = typeof Kazanimlar === 'object' ? JSON.stringify(Kazanimlar) : Kazanimlar;

    const [result] = await pool.query(
      'UPDATE dersler SET BolumId = ?, DersKodu = ?, DersAdi = ?, Yariyil = ?, Kazanimlar = ?, Durum = ? WHERE Id = ?',
      [BolumId, DersKodu, DersAdi, Yariyil, kazanimlarString, Durum, id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ success: false, message: 'Bu ID ile ders bulunamadı.' });
    }

    res.status(200).json({ success: true, message: 'Ders başarıyla güncellendi.' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Sunucu hatası', error: error.message });
  }
};

// @desc    Bir dersi siler
// @route   DELETE /api/dersler/:id
// @access  Private (Protected)
exports.deleteDers = async (req, res) => {
  const { id } = req.params;
  try {
    const [result] = await pool.query('DELETE FROM dersler WHERE Id = ?', [id]);
    
    if (result.affectedRows === 0) {
      return res.status(404).json({ success: false, message: 'Bu ID ile ders bulunamadı.' });
    }

    res.status(200).json({ success: true, message: 'Ders başarıyla silindi.' });
  } catch (error) {
    // Foreign key hatası gibi durumları yakalamak için
    res.status(500).json({ success: false, message: 'Sunucu hatası veya bu ders başka bir kayıtla ilişkili olabilir.', error: error.message });
  }
};