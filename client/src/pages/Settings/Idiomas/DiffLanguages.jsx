import { EditButtonLanguages } from "./EditButtonLanguages.jsx";
import { React, Fragment, useState } from "react";
import ConfigPhoto from "../../../assets/Female.png";
import { Dialog, Transition } from "@headlessui/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Check from "../../../assets/check.svg";

export function DiffLanguages({
  label,
  languages,
  native,
  fluent,
  learning,
  allLanguages,
  allUserLanguages,
}) {
  const [selectedLanguages, setSelectedLanguages] = useState(languages);

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

  function openModal() {
    setIsOpen(true);
  }
  // console.log(languages)
  return (
    <div className="flex flex-col gap-5 text-[20px]">
      <ToastContainer />
      <div className="flex justify-between border-b-2 border-[#e2e2e2] py-4 ">
        <p>{label}</p>
        <EditButtonLanguages size="9" fontSize="text-md" onClick={openModal} />
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
                      <div className="flex flex-col gap-3 pr-4 max-h-[120px] overflow-y-scroll">
                        {selectedLanguages.map((language, index) => (
                          <div key={index} className="flex justify-between ">
                            <div className="flex gap-4 items-center text-[#4d4d4d]">
                              <img src={language[1]} alt="" className="w-8" />
                              <p>{language[0]}</p>
                            </div>
                            <button
                              type="button"
                              className="text-[#FF8399]"
                              onClick={() => removeLanguage(language)}
                            >
                              Remove
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-col gap-3">
                      <p className="text-[16px] font-semibold">
                        Todos los idiomas
                      </p>
                      <div className="flex flex-col gap-5 overflow-y-scroll h-[300px]">
                        {allLanguages.map((language, index) => (
                          <div
                            key={index}
                            className="flex gap-4 items-center justify-between text-[#4d4d4d]"
                            onClick={() => {
                              // Verificar lang
                              const isNativoOrHablaOrAprende =
                                allUserLanguages.motherLanguages[0][0].includes(
                                  language[0]
                                ) ||
                                allUserLanguages.fluentLanguages.some(
                                  (lang) => lang[0] === language[0]
                                ) ||
                                allUserLanguages.learningLanguages.some(
                                  (lang) => lang[0] === language[0]
                                );

                              if (
                                !selectedLanguages.includes(language) &&
                                !isNativoOrHablaOrAprende
                              ) {
                                setSelectedLanguages([
                                  ...selectedLanguages,
                                  language,
                                ]);
                                console.log(selectedLanguages);
                              }
                            }}
                          >
                            <div
                              className={`flex gap-4 items-center cursor-pointer ${
                                allUserLanguages.motherLanguages[0][0].includes(
                                  language[0]
                                )
                                  ? "opacity-50"
                                  : allUserLanguages.fluentLanguages.some(
                                      (lang) => lang[0] === language[0]
                                    )
                                  ? "opacity-50"
                                  : allUserLanguages.learningLanguages.some(
                                      (lang) => lang[0] === language[0]
                                    )
                                  ? "opacity-50"
                                  : null
                              } `}
                            >
                              <img src={language[1]} alt="" className="w-8" />
                              <p>{language[0]}</p>
                            </div>
                            {allUserLanguages.motherLanguages[0][0].includes(
                              language[0]
                            ) ? (
                              <div className="flex items-center gap-1 mr-3 opacity-50">
                                <p>Nativo</p>
                                <img src={Check} alt="" />
                              </div>
                            ) : allUserLanguages.fluentLanguages.some(
                                (lang) => lang[0] === language[0]
                              ) ? (
                              <div className="flex items-center gap-1 mr-3 opacity-50">
                                <p>Habla</p>
                                <img src={Check} alt="" />
                              </div>
                            ) : allUserLanguages.learningLanguages.some(
                                (lang) => lang[0] === language[0]
                              ) ? (
                              <div className="flex items-center gap-1 mr-3 opacity-50">
                                <p>Aprende</p>
                                <img src={Check} alt="" />
                              </div>
                            ) : (
                              ""
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
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-[#ffdfe5b9] px-4 py-2 text-sm font-medium text-[#FF8399] hover:bg-[#ffdfe5f5] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={() =>
                          selectedLanguages.length === 0
                            ? toast.error(
                                "Debes seleccionar al menos un idioma"
                              )
                            : closeModal
                        }
                      >
                        Guardar
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </div>
      {languages.map((language, index) => (
        <div key={index} className="flex gap-4">
          <img src={language[1]} alt="" className="w-9" />
          <p>{language[0]}</p>
        </div>
      ))}
    </div>
  );
}
