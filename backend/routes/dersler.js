const express = require('express');
const router = express.Router();
const {
  getAllDersler,
  getDersById,
  createDers,
  updateDers,
  deleteDers
} = require('../controllers/dersController');
const { protect } = require('../middleware/authMiddleware');

// Public routes (herkes erişebilir)
router.route('/')
  .get(getAllDersler);

router.route('/:id')
  .get(getDersById);

// Private routes (sadece giriş yapmış kullanıcılar erişebilir)
router.route('/')
  .post(protect, createDers);

router.route('/:id')
  .put(protect, updateDers)
  .delete(protect, deleteDers);

module.exports = router;