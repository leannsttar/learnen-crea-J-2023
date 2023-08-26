import { React, useState, Fragment, useRef, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import editProfile from "../../../assets/editProfile.svg";
import axios from "axios";
import { useSession } from "../../../components/Header/useSession.js";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { MessageModal } from "../../../components/modalMessages/MessageModal";

export function CambioContraseniaForm({ usuario, closeModal }) {
  const { register, handleSubmit, getValues } = useForm();

  const onSubmitPassword = async (data) => {
    const { contrasenia, newContrasenia } = getValues();

    if (!contrasenia || !newContrasenia) {
      toast.warn("Debes completar ambos campos de contraseña.");
      return;
    }

    try {
      const mappedData = {
        contrasenia: contrasenia,
        newContrasenia: newContrasenia,
        id: usuario.id,
      };

      console.log(data);

      // Actualizar
      const response = await axios.put(
        "http://localhost:5000/settings/cuentaInfo",
        mappedData
      );
      console.log("Password updated:", response.data);
      if (response.data.message === "Contraseñas no son iguales") {
        toast.error(
          "La contraseña no coincide con la original. Inténtalo de nuevo."
        );
      } else if (response.data.message === "Contraseña actualizada") {
        // Contraseña actualizada correctamente
        toast.success("Contraseña actualizada exitosamente.");
        closeModal();
      }
    } catch (error) {
      console.error("Error updating password:", error);
      toast.error("Ocurrió un error al actualizar la contraseña.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmitPassword)}>
      <div className="mt-2 flex flex-col gap-5 mb-7 w-full">
        <div className="flex flex-col gap-2">
          <label htmlFor="" className="font-light text-[#757575] text-[13px]">
            Digite su actual contraseña
          </label>
          <input
            {...register("contrasenia")}
            type="password"
            placeholder="Ingresa tu contraseña"
            className="w-full rounded-xl py-2 px-4 outline-none border-[1px] border-gray-300 font-light"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="" className="font-light text-[#757575] text-[13px]">
            Digite su nueva contraseña
          </label>
          <input
            {...register("newContrasenia")}
            type="password"
            placeholder="Ingresa tu nueva contraseña"
            className="w-full rounded-xl py-2 px-4 outline-none border-[1px] border-gray-300 font-light"
          />
        </div>
      </div>

      <div className="mt-4 flex justify-center gap-8">
        <button
          type="button"
          className="inline-flex justify-center rounded-md border border-transparent bg-[#000000] px-7 py-2 text-sm font-medium text-white hover:bg-[#364C97] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
          onClick={closeModal}
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="inline-flex justify-center rounded-md border border-transparent bg-[#ffdfe5b9] px-4 py-2 text-sm font-medium text-[#FF8399] hover:bg-[#ffdfe5f5] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
        >
          Cambiar contraseña
        </button>
      </div>
    </form>
  );
}

//Este componente es el input de cambiar contraseña dentro del modal
export function InputChangePass({ placeholder, name }) {
  const { register, handleSubmit, reset, getValues } = useForm();

  return (
    <input
      {...register(name)}
      type="password"
      placeholder={placeholder}
      className="w-full rounded-xl py-2 px-4 outline-none border-[1px] border-gray-300 font-light"
    />
  );
}

//Componente de cada dato de la parte de cuenta
export function EditInfoAccount({ dataName, dataUser, pass, name }) {
  const { usuario } = useSession();
  //Este open es para el modal de contraseña
  let [isOpen, setIsOpen] = useState(false);

  // const [isLoading, setIsLoading] = useState(false);

  //Este state es para poder modificar el value del input si se quiere escribir en él
  const [inputValue, setInputValue] = useState(dataUser);

  //Este state es para saber si esta en modo editar o no esa data
  let [onEdit, setOnEdit] = useState(false);

  //Esto es para que quede en focus el input cuando le de click, abajo se hace eso
  const inputRef = useRef(null);

  //Cada vez que el onEdit cambia el input se pondrá en focus
  useEffect(() => {
    if (onEdit) {
      inputRef.current.focus();
    }
  }, [onEdit]);

  //Cerrar el modal
  function closeModal() {
    setIsOpen(false);
  }

  //Abrir el modal
  function openModal() {
    setIsOpen(true);
  }

  //Función para cambiar el edit a true
  function yesOnEdit() {
    setOnEdit(true);
  }

  function notOnEdit() {
    setOnEdit(false);
    setInputValue(dataUser);
  }

  //Función que se ejecutara cuando cambie el input, osea se va a poner en el value lo que escribimos en él, es para poder modificarlo, arriba ya tenemos el inputValue definido como 'userData' osea la data original, acá decimos que la data de ese input va a ser lo que escribamos
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  //Esto es que cuando se quite el focus del input, osea le demos click afuera que cambie el modo de edición
  const handleInputBlur = () => {
    setOnEdit(false);
  };

  const [isMessageOpen, setIsMessageOpen] = useState(false);

  function openMessageModal() {
    setIsMessageOpen(true);
  }

  const { register, handleSubmit, reset, getValues } = useForm();

  const onSubmit = async (data) => {
    
    try {
      const mappedData = {
        [name]: inputValue,
        id: usuario.id,
      };

      // Actualizar
      const response = await axios.put(
        "http://localhost:5000/settings/cuentaInfo",
        mappedData
      );

      console.log('ajflksd')

      console.log("Data updated successfully:", response.data);
      openMessageModal();
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <MessageModal
          to={"/settings"}
          message="Datos actualizados"
          success
          open={isMessageOpen}
        />
        <div className="flex border-b-2 border-[#e2e2e2] py-4 text-[20px] justify-between">
          <div className="flex gap-8">
            <p className="font-[600]">{dataName}</p>
            {/* Si esta en modo edición que se ponga ese input */}
            {onEdit ? (
              <>
                <input
                  value={inputValue}
                  //Esto se pone para tipo referenciar el Ref XD, nose
                  ref={inputRef}
                  onChange={handleInputChange}
                  // onBlur={handleInputBlur}
                  className="font-[300] bg-[#e2e2e2a9] rounded-md px-2 outline-none"
                />
                <input
                  {...register(name)}
                  // onBlur={handleInputBlur}
                  className="font-[300] bg-[#e2e2e2a9] rounded-md px-2 outline-none hidden"
                />
              </>
            ) : (
              // Si no está en modo edición se pondrá ese <p>
              <p className="font-[300]">{pass ? "*******" : dataUser}</p>
            )}
          </div>
          <div className={pass ? "hidden" : "block"}>
            {onEdit ? (
              <div className="flex gap-5">
                <button
                  onClick={() => notOnEdit()}
                  className="font-bold  text-[17px]"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="bg-[#FF8399] rounded-3xl text-white py-1 px-3 text-[17px]"
                >
                  Guardar
                </button>
              </div>
            ) : (
              <button
                onClick={() => yesOnEdit()}
                className="flex gap-3 items-center font-[600] text-[16px]"
              >
                <img src={editProfile} alt="" />
                <p className="text-[#FF8399]">Editar</p>
              </button>
            )}
          </div>

          {/* Condición de que si se pasó la prop 'pass' que se muestre o no el botón de cambiar contraseña */}
          <div className={pass ? "block" : "hidden"}>
            <button
              // onClick={() => setModal2Open(true)}
              type="button"
              onClick={openModal}
              className=" hover:bg-[#364C97] bg-black text-white p-3 rounded-xl text-[16px]"
            >
              Cambiar contraseña
            </button>
          </div>
        </div>
      </form>
      {pass && (
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-10 h-screen"
            onClose={closeModal}
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25 h-screen z-100" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900 flex justify-center mb-8"
                    >
                      Cambiar contraseña
                    </Dialog.Title>
                    <CambioContraseniaForm
                      usuario={usuario}
                      closeModal={closeModal}
                    />
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      )}
    </>
  );
}
