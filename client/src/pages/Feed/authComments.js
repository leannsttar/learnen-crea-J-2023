import axios from "axios";
const axiosClient = axios.create({
  baseURL: "http://localhost:5000/comentarios",
});

export const postComent = async ({ datos }) => {
  const { data } = await axiosClient.post(`/${datos.id_publicacion}`, datos);
  return data;
};

export const getComents = async (id_publicacion) => {
  const { data } = await axiosClient.get(`/${id_publicacion}`);
  return data;
};

export const getCommentCount = async (id_publicacion) => {
  const { data } = await axiosClient.get(`/${id_publicacion}/count`);
  return data;
};

// export const deleteComment = async ({ id }) => {
//   const { data } = await axiosClient.delete(`/${id}`);
//   return { data };
// };

// export const getCommentById = async ({ id }) => {
//   const { data } = await axiosClient.get(`/${id}`);
//   return data;
// };

// export const updateComment = async ({ id, datos }) => {
//   const { data } = await axiosClient.put(`/${id}`, datos);
//   return data;
// };

// export const addComment = async ({ comentario }) => {
//   try {
//     const response = await postComment({ comentario });
//     return response;
//   } catch (error) {
//     console.error("Error al agregar el comentario", error);
//     throw error;
//   }
// };