const express = require('express');
const router = express.Router();
const multer = require('multer');
const Member = require('../models/Member');

// Setup multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    const uniqueName = Date.now() + '-' + file.originalname;
    cb(null, uniqueName);
  }
});
const upload = multer({ storage: storage });

// POST /api/members
router.post('/', upload.single('image'), async (req, res) => {
  try {
    const member = new Member({
      ...req.body,
      image: req.file.filename
    });
    await member.save();
    res.status(201).json({ message: 'Member added', member });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /api/members
router.get('/', async (req, res) => {
  try {
    const members = await Member.find();
    res.json(members);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /api/members/:id
router.get('/:id', async (req, res) => {
  try {
    const member = await Member.findById(req.params.id);
    res.json(member);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
