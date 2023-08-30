import { EditButtonLanguages } from "./EditButtonLanguages.jsx";
import { React, Fragment, useState } from "react";
import ConfigPhoto from "../../../assets/Female.png";
import { Dialog, Transition } from "@headlessui/react";
import { useForm } from "react-hook-form";
import { useSession } from "../../../components/Header/useSession";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Check from "../../../assets/check.svg";
import { MessageModal } from "../../../components/modalMessages/MessageModal";
import axios from 'axios'

export function DiffLanguages({
  label,
  languages,
  native,
  fluent,
  learning,
  allLanguages,
  allUserLanguages,
}) {
  const { usuario } = useSession();

  const [selectedLanguages, setSelectedLanguages] = useState(languages);

  console.log(selectedLanguages);

  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
    setSelectedLanguages(languages);
  }

  function removeLanguage(languageToRemove) {
    setSelectedLanguages((prevLanguages) =>
      prevLanguages.filter((language) => language !== languageToRemove)
    );
  }

  function removeSelectedLanguage(languageToRemove) {
    setSelectedLanguages((prevLanguages) =>
      prevLanguages.filter(
        (language) => language.idioma !== languageToRemove.idioma
      )
    );
  }

  function openModal() {
    setIsOpen(true);
  }

  const [isMessageOpen, setIsMessageOpen] = useState(false);

  function openMessageModal() {
    setIsMessageOpen(true);
  }

  const { register, handleSubmit, reset, getValues } = useForm();

  console.log(selectedLanguages)

  const onSubmit = async (data) => {
    try {
      if (native) {
        console.log('yes')
        console.log(selectedLanguages)
        const response = await axios.put(
          "http://localhost:5000/settings/idiomas",
          {
            id: usuario.id,
            idioma_materno: selectedLanguages,
          }
        );
      }

      if (fluent) {
        const response = await axios.put(
          "http://localhost:5000/settings/idiomas",
          {
            id: usuario.id,
            idiomas_fluidos: selectedLanguages,
          }
        );
      }

      if (learning) {
        const response = await axios.put(
          "http://localhost:5000/settings/idiomas",
          {
            id: usuario.id,
            idiomas_aprendiendo: selectedLanguages,
          }
        );
      }

      console.log("Data updated successfully:");
      closeModal()
      openMessageModal();
    } catch (error) {
      console.log("Error actualizando los idiomas", error);
    }
  };

  console.log(allUserLanguages);
  return (
    <div className="flex flex-col gap-5 text-[20px]">
      <MessageModal
        to={"/settings"}
        message="Idiomas actualizados"
        success
        open={isMessageOpen}
      />
      <ToastContainer />
      <div className="flex justify-between border-b-2 border-[#e2e2e2] py-4 ">
        <p>{label}</p>
        {
          languages === [] ? <EditButtonLanguages size="9" fontSize="text-md" onClick={openModal} text="Añadir"/> : <EditButtonLanguages size="9" fontSize="text-md" onClick={openModal} text="Editar"/>
        }
        
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
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-8 text-left align-middle shadow-xl transition-all flex flex-col gap-8">
                    <Dialog.Title
                      as="h3"
                      className="text-[20px] font-medium leading-6 text-gray-900 border-b border-[#a0a0a0] pb-3"
                    >
                      {native
                        ? "Soy Nativo en"
                        : fluent
                        ? "También hablo"
                        : learning
                        ? "Estoy aprendiendo"
                        : ""}
                    </Dialog.Title>
                    <div className="flex flex-col gap-3">
                      <p className="text-[16px] font-semibold">
                        Idioma seleccionado
                      </p>
                      <p className="text-xs text-[#364C97]">
                        {native ?? "Scrollea acá si no ves todos tus idiomas"}
                      </p>
                      <div
                        className={`flex flex-col gap-3 pr-4 max-h-[120px] ${
                          native ?? "overflow-y-scroll"
                        } `}
                      >
                        {native ? (
                          <div className="flex justify-between ">
                            <div className="flex gap-4 items-center text-[#4d4d4d]">
                              <img
                                src={`http://localhost:5000${selectedLanguages.imagen_bandera}`}
                                alt=""
                                className="w-8 h-8 rounded-full object-cover"
                              />
                              <p>{selectedLanguages.idioma}</p>
                            </div>
                            <button
                              type="button"
                              className="text-[#FF8399]"
                              onClick={() => removeLanguage(language)}
                            ></button>
                          </div>
                        ) : (
                          selectedLanguages.map((language, index) => (
                            <div key={index} className="flex justify-between ">
                              <div className="flex gap-4 items-center text-[#4d4d4d]">
                                <img
                                  src={`http://localhost:5000${language.imagen_bandera}`}
                                  alt=""
                                  className="w-8 h-8 rounded-full object-fill"
                                />
                                <p>{language.idioma}</p>
                              </div>
                              <button
                                type="button"
                                className="text-[#FF8399]"
                                onClick={() => removeLanguage(language)}
                              >
                                Eliminar
                              </button>
                            </div>
                          ))
                        )}
                      </div>
                    </div>
                    <div className="flex flex-col gap-3">
                      <p className="text-[16px] font-semibold">
                        Todos los idiomas
                      </p>
                      <p className="text-xs text-[#364C97]">
                        {native
                          ? "Selecciona otro idioma para cambiarlo"
                          : "Selecciona un idioma para agregar uno nuevo"}
                      </p>
                      <div className="flex flex-col gap-1 overflow-y-scroll h-[300px]">
                        {allLanguages.map((language, index) => (
                          <div
                            key={index}
                            className="flex gap-4 items-center justify-between text-[#4d4d4d] hover:bg-[#e4e4e4] rounded-lg p-2 cursor-pointer"
                            onClick={() => {
                              // Verificar lang
                              const isNativoOrHablaOrAprende =
                                allUserLanguages.motherLanguages[0].includes(
                                  language[0]
                                ) ||
                                allUserLanguages.fluentLanguages.some(
                                  (lang) => lang[0] === language[0]
                                ) ||
                                allUserLanguages.learningLanguages.some(
                                  (lang) => lang[0] === language[0]
                                );

                              if (!native) {
                                if (
                                  !selectedLanguages.some(
                                    (idioma) => idioma.idioma == language[0]
                                  ) &&
                                  !isNativoOrHablaOrAprende
                                ) {
                                  setSelectedLanguages([
                                    ...selectedLanguages,
                                    {
                                      idioma: language[0],
                                      imagen_bandera: language[1],
                                    },
                                  ]);
                                }
                              }

                              if (native && !isNativoOrHablaOrAprende) {
                                setSelectedLanguages({
                                  idioma: language[0],
                                  imagen_bandera: language[1],
                                });
                              }
                            }}
                          >
                            <div
                              className={`flex gap-4 items-center cursor-pointer ${
                                allUserLanguages.motherLanguages[0].includes(
                                  language[0]
                                )
                                  ? "opacity-50"
                                  : allUserLanguages.fluentLanguages.some(
                                      (lang) => lang[0] === language[0]
                                    )
                                  ? "opacity-50"
                                  : allUserLanguages.learningLanguages.some(
                                      (lang) => lang[0] === language[0]
                                    ) && "opacity-50"
                              } `}
                            >
                              <img
                                src={"http://localhost:5000" + language[1]}
                                alt=""
                                className="w-8"
                              />
                              <p>{language[0]}</p>
                            </div>
                            {allUserLanguages.motherLanguages[0].includes(
                              language[0]
                            ) ? (
                              <div className="flex items-center gap-1 opacity-50">
                                <p>Nativo</p>
                                <img src={Check} alt="" className="w-8" />
                              </div>
                            ) : allUserLanguages.fluentLanguages.some(
                                (lang) => lang[0] === language[0]
                              ) ? (
                              <div className="flex items-center gap-1 opacity-50">
                                <p>Habla</p>
                                <img src={Check} alt="" className="w-8" />
                              </div>
                            ) : (
                              allUserLanguages.learningLanguages.some(
                                (lang) => lang[0] === language[0]
                              ) && (
                                <div className="flex items-center gap-1 opacity-50">
                                  <p>Aprende</p>
                                  <img src={Check} alt="" className="w-8" />
                                </div>
                              )
                            )}
                          </div>
                        ))}
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
                      <form action="" onSubmit={handleSubmit(onSubmit)}>
                        <button
                          type="submit"
                          className="inline-flex justify-center rounded-md border border-transparent bg-[#ffdfe5b9] px-4 py-2 text-sm font-medium text-[#FF8399] hover:bg-[#ffdfe5f5] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          onClick={() =>
                            selectedLanguages.length === 0 & learning
                              && toast.error(
                                  "Debes seleccionar al menos un idioma"
                                )
                          }
                        >
                          Guardar
                        </button>
                      </form>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </div>
      {native ? (
        <div className="flex gap-4">
          <img
            src={`http://localhost:5000${languages.imagen_bandera}`}
            alt=""
            className="w-9 object-cover"
          />
          <p>{languages.idioma}</p>
        </div>
      ) : (
        languages.map((language, index) => (
          <div key={index} className="flex gap-4">
            <img
              src={`http://localhost:5000${language.imagen_bandera}`}
              alt=""
              className="w-9 object-cover"
            />
            <p>{language.idioma}</p>
          </div>
        ))
      )}
    </div>
  );
}
