const express = require('express');
const router = express.Router();
const {
  getAllBolumler,
  createBolum,
  updateBolum,
  deleteBolum
} = require('../controllers/bolumController');
const { protect } = require('../middleware/authMiddleware');

// Herkesin bölümleri görebilmesi için protect middleware'i yok.
router.get('/', getAllBolumler);

// Oluşturma, güncelleme ve silme işlemleri için yetkilendirme gerekli.
router.post('/', protect, createBolum);
router.put('/:id', protect, updateBolum);
router.delete('/:id', protect, deleteBolum);

module.exports = router;