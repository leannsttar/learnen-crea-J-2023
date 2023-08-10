const express = require('express');
const app = express();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const cors = require('cors')
const path = require('path')
const multer = require("multer");
const sharp = require("sharp");
const fs = require("fs");
const { loginUser } = require('../controladores/login-controlador.js');


const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
const {createUser} = require('../controladores/register-controlador.js');
const {createPost, readPosts} = require('../controladores/feed-controlador.js');

app.use(cors())
app.use(express.json());
app.use('/imagenes', express.static('./public/images/postImages/'));


const port = 5000;

app.get('/', (req, res) => {
  res.send('Server funcionando');
});

app.post('/auth/login', loginUser);

app.post('/auth/register', upload.single("photoProfile"), createUser);

app.post('/feed', createPost);
app.get('/feed', readPosts)

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
