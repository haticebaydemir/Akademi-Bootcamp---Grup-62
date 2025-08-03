const express = require('express');
const router = express.Router();
const {
  getAllDonemler,
  getDonemById,
  createDonem,
  updateDonem,
  deleteDonem
} = require('../controllers/donemController');
const { protect } = require('../middleware/authMiddleware');

router.route('/')
  .get(getAllDonemler)
  .post(protect, createDonem);

router.route('/:id')
  .get(getDonemById)
  .put(protect, updateDonem)
  .delete(protect, deleteDonem);

module.exports = router;