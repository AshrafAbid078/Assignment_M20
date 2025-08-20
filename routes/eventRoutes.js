const express = require('express');
const router = express.Router();
const { createEvent, getAllEvents, getEventById, updateEvent, deleteEvent } = require('../Controllers/eventController');
const authMiddleware = require('../middleware/autoMiddleware');

router.post('/events', authMiddleware, createEvent);
router.get('/events', getAllEvents);
router.get('/events/:eventId', getEventById);
router.put('/events/:eventId', authMiddleware, updateEvent);
router.delete('/events/:eventId', authMiddleware, deleteEvent);

module.exports = router;
