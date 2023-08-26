import { React, useState, useEffect } from "react";
import { SobreMiData } from "./SobreMiData";
// import { EditButton } from "./EditButton";
import editProfile from "../../../assets/editProfile.svg";
import { useSession } from "../../../components/Header/useSession.js";
import { set, useForm } from "react-hook-form";
import axios from "axios";
import { MessageModal } from "../../../components/modalMessages/MessageModal.jsx";

export function SobreMi() {
  const { usuario } = useSession();

  // const sobreMiUserData = {
  //   comoEres: "Reservada, tímida pero muy empática",
  //   tusMetas: "Vivir en otro pais",
  //   gustosConversacion: "Los deportes, la comida, los idiomas y los libros",
  // };

  let [onEdit, setOnEdit] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const [isMessageOpen, setIsMessageOpen] = useState(false);

  function openMessageModal() {
    setIsMessageOpen(true);
  }

  useEffect(() => {}, []);

  function yesOnEdit() {
    setOnEdit(true);
    // inputRef.current.focus();
  }

  function notOnEdit() {
    setOnEdit(false);
  }

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      data.id = usuario.id;
      // Actualizar
      const response = await axios.put(
        "http://localhost:5000/settings/sobremi",
        data
      );
      console.log("Data updated successfully:", response.data);
      
      setTimeout(() => {
        setIsLoading(false);
        setOnEdit(false); 
        openMessageModal();
      }, 1000); 
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <MessageModal
        to={"/settings"}
        message="Infomación actualizada"
        success
        open={isMessageOpen}
      />
      {/* <EditButton
          onEdit={onEdit ? true : false}
          setEdit={() => setOnEdit(true)}
          setNotEdit={() => setOnEdit(false)}
          size="w-7"
          fontSize={"text-[25px]"}
        /> */}
      {onEdit ? (
        <div className="flex gap-5 text-[19px]">
          <button onClick={() => notOnEdit()} className="font-bold  ">
            Cancelar
          </button>
          <button
            type="submit"
            className="bg-[#FF8399] rounded-3xl text-white py-1 px-3 "
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="flex justify-center items-center">
                <div
                  className="circular-spinner"
                  style={{
                    border: "3px solid rgba(255, 255, 255, 0.3)",
                    borderTop: "3px solid #FFF",
                    borderRadius: "50%",
                    width: "24px",
                    height: "24px",
                    animation: "spin 1s linear infinite",
                  }}
                ></div>{" "}
                {/* Circular spinner animation */}
              </div>
            ) : (
              "Guardar"
            )}
          </button>
        </div>
      ) : (
        <button
          onClick={() => yesOnEdit()}
          className="flex gap-3 items-center font-[600] text-[16px]"
        >
          <img src={editProfile} alt="" className="w-7" />
          <div className="text-[25px]">
            <p className="text-[#FF8399]">Editar</p>
          </div>
        </button>
      )}
      <div className="flex flex-col gap-10 mt-10 text-[20px]">
        <SobreMiData
          onEdit={onEdit ? true : false}
          label="Describe cómo eres"
          data={usuario.como_soy}
          name="como_soy"
          register={register}
        />
        <SobreMiData
          onEdit={onEdit ? true : false}
          label="Cuáles son tus metas para aprender idiomas?"
          data={usuario.objetivos}
          name="objetivos"
          register={register}
        />
        <SobreMiData
          onEdit={onEdit ? true : false}
          label="De qué te gusta hablar?"
          data={usuario.me_gusta}
          name="me_gusta"
          register={register}
        />
      </div>
    </form>
  );
}
