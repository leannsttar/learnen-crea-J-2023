const express = require('express');
const router = express.Router();
const feedController = require('../controladores/feed-controlador.js');

router.post('/feed', feedController.createPost);

router.get('/feed', feedController.readPosts);

router.post('/feed/like', feedController.setlikes)

router.get('/feed/like', feedController.likepost)

module.exports = router;