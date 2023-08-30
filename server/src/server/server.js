const express = require("express");
const app = express();
const cors = require("cors");
const multer = require("multer");

const { loginUser } = require("../controladores/login-controlador.js");
const { obtenerPerfilPorToken } = require("../controladores/Obtenerperfil-controlador.js");
const {commentsRoutes} = require('../routes/commentsRoutes')
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
const { createUser } = require("../controladores/register-controlador.js");
const {routerReport} = require("../routes/reportes-router");

const {
  createPost,
  readPosts,
  setlikes,
  likepost,
  deleteLike,
  alreadyLiked,
  deletePost,
  getUserImages
} = require("../controladores/feed-controlador.js");
const {
  countUsers,
    countLanguages,
    countPosts,
    latestUsers,
    allLanguages,
    createLanguage,
    updateLanguage,
    deleteLanguage,
    allAdmins,
    createAdmin,
    deleteAdmin,
    updateAdmin,
    getAllReports,
    authenticateAdmin
} = require("../controladores/dashboard-controlador")
const {updatePhoto, updateProfileInfo, updateAccountInfo, getLikedPosts, updateUserLanguages} = require("../controladores/settings-controlador");
const Usuariosrouter = require("../routes/obtenerUsuarios-routes.js");
const { auth } = require("../middleware/auth.js");
const { enviarMensaje } = require("../controladores/enviar-mensaje-contralador.js");
const { misChats } = require("../controladores/mis-chats-controlador.js");
const { obtenerMensajes } = require("../controladores/obtener-mensajes-controlador.js");
const followRoutes = require("../routes/seguidores-routes");



const {Server} = require('socket.io')
const {createServer} = require('http');
const { dashboardRoutes } = require("../routes/dashboard-router.js");

app.use(cors());
app.use(express.json());
app.use("/imagenes", express.static("./public/images/postImages/"));
app.use("/perfil", express.static("./public/images/perfil/"));
app.use("/idioma_banderas", express.static("./public/images/idiomas_banderas/"));


const port = 5000;

app.get("/", (req, res) => {
  res.send("Server funcionando");
});

app.get("/perfil", obtenerPerfilPorToken);
app.post("/auth/login", loginUser);

app.post("/auth/register", upload.single("photoProfile"), createUser);

app.post("/feed", createPost);
app.get("/feed", readPosts);
app.post("/feed/like", setlikes)
// app.get("/feed/like/:id", likepost)

app.put("/settings/imagen", upload.single("imagen_perfil"), updatePhoto);
app.put("/settings/sobremi", updateProfileInfo);
app.put("/settings/cuentaInfo", updateAccountInfo);
app.get("/settings/likes/:id", getLikedPosts)
app.put("/settings/idiomas", updateUserLanguages)

app.delete("/feed/like/:id_cliente/:id_publicacion", deleteLike)
app.get("/feed/like/:id_cliente/:id_publicacion", alreadyLiked)


app.post("/enviar-mensaje/:id", auth, enviarMensaje)
app.get("/mensajes/:id", auth, obtenerMensajes)
app.get("/mis-chats", auth, misChats)

app.use("/comentarios", commentsRoutes);
app.use('/usuarios', Usuariosrouter)

app.use('/reports', routerReport )

app.use("/follow", followRoutes); 

app.delete('/delete-post/:id', auth, deletePost)

app.get("/user/images/:id", auth, getUserImages);

//weas del admin xd
app.get("/dashboard/countUsers", countUsers);
app.get("/dashboard/countPosts", countPosts);
app.get("/dashboard/countLanguages", countLanguages);
app.get('/dashboard/allReports', getAllReports);
app.use('/admin', authenticateAdmin);




app.get("/dashboard/lenguajes", allLanguages);
app.post("/dashboard/lenguajes", upload.single("imagen_bandera"), createLanguage);
app.put("/dashboard/lenguajes", upload.single("imagen_bandera"), updateLanguage);
app.delete("/dashboard/lenguajes", deleteLanguage);

app.get("/dashboard/administradores", allAdmins);
app.post("/dashboard/administradores", createAdmin);
app.put("/dashboard/administradores", updateAdmin);
app.delete("/dashboard/administradores", deleteAdmin);


const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*"
  }
});


server.listen(port, () => { 
  console.log(`Servidor escuchando en el puerto ${port}`);
});


io.on('connection', socket =>{
  socket.on('unirse-chat', chatid =>{

    socket.rooms.forEach(room => {
      if(room.startsWith("chat")){
        socket.leave(room)
      }
    })
    socket.join(chatid);
  })


  socket.on("enviar-mensaje", ({mensaje, chats_ids}) =>{
    console.log(chats_ids);
    socket.to(chats_ids).emit("nuevo-mensaje", mensaje)
  })

})
