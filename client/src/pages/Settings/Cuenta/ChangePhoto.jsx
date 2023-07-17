import { React, Fragment, useState, useRef } from "react";
import ConfigPhoto from "../../../assets/Female.png";
import { Dialog, Transition } from "@headlessui/react";

export function ChangePhoto({ userPhoto }) {
  // const [modal2Open, setModal2Open] = useState(false);
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const [selectedImage, setSelectedImage] = useState(userPhoto);
  const fileInputRef = useRef(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setSelectedImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div>
      {/* <style>
        {`


      .my-modal-ok-button {
        
        background-color: #000;
      }

      .my-modal-ok-button:hover {
        background-color: #FF8399;
      }
    `}
      </style> */}
      <div className="flex items-center gap-12 ">
        <img src={userPhoto} alt="" className="rounded-full"/>
        <button
          // onClick={() => setModal2Open(true)}
          onClick={openModal}
          className=" hover:bg-[#364C97] bg-black text-white p-3 rounded-xl"
        >
          Cambiar foto de perfil
        </button>
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
                      className="text-lg font-medium leading-6 text-gray-900"
                    >
                      Foto de perfil
                    </Dialog.Title>
                    <div className="mt-2 flex justify-center mb-7">
                      <img src={selectedImage} alt="" className="w-48 h-48 rounded-full object-cover" />
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
                        onClick={handleButtonClick}
                      >
                        Cambiar foto
                      </button>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        ref={fileInputRef}
                        className="hidden"
                      />
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
        {/* <Modal
          okButtonProps={{
            className: "my-modal-ok-button",
          }}
          okText="Guardar"
          title="Vertically centered modal dialog"
          centered
          open={modal2Open}
          onOk={() => setModal2Open(false)}
          onCancel={() => setModal2Open(false)}
        >
          <p>some contents...</p>
          <p>some contents...</p>
          <p>some contents...</p>
        </Modal> */}
      </div>
      <div></div>
    </div>
  );
}
