const express = require("express");
const router = express.Router();
const { followUser, unfollowUser, getFollowsUsers } = require("../controladores/seguidores-controlador");
const {auth} = require('../middleware/auth') 


router.get("/follow/:id_usuario", auth, followUser);
router.get("/unfollow/:id_usuario", auth, unfollowUser);
router.get("/followers/:id_usuario", auth, getFollowsUsers);

module.exports = router;
