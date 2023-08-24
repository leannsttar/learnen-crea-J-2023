const prisma = require("../config/prisma");

const followUser = async (req, res) => {
  try {
    const id_user_sigue_a = req.usuario.id;
    const id_user_seguido = +req.params.id_usuario;

    await prisma.follows.create({
      data: {
        id_user_sigue_a,
        id_user_seguido,
      },
    });

    res.status(200).json({ message: "Usuario seguido exitosamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Hubo un error" });
  }
};

const unfollowUser = async (req, res) => {
  try {
    const id_user_sigue_a = req.usuario.id;
    const id_user_seguido = +req.params.id_usuario;

    await prisma.follows.deleteMany({
      where: {
        id_user_sigue_a,
        id_user_seguido,
      },
    });

    res.status(200).json({ message: "Dejaste de seguir" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Hubo un error" });
  }
};

const getFollowsUsers = async (req, res) => {
  try {
    const fetch = await prisma.cliente.findFirst({
      where: {
        id: +req.params.id_usuario,
      },
      include: {
        seguidores: true,
        seguidos: true,
      },
    });
    return res.json(fetch);
  } catch (error) {
    console.log(error);

    res.status(500).json({ error: "Hubo un error" });
  }
};

module.exports = { followUser, unfollowUser, getFollowsUsers };
