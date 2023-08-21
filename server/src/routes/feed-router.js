const express = require('express');
const router = express.Router();
const feedController = require('../controladores/feed-controlador.js');

router.post('/feed', feedController.createPost);

router.get('/feed', feedController.readPosts);

router.post('/feed/like', feedController.setlikes)

// router.get('/feed/like/:id', feedController.likepost)

router.delete('/feed/like/:id_cliente/:id_publicacion', feedController.deleteLike)

router.get('/feed/like/:id_cliente/:id_publicacion', feedController.alreadyLiked)

module.exports = router;