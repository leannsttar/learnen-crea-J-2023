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

  //useStat para meter la imagen que se va a mostrar, por default va a ser la que ya tiene el usuario
  const [selectedImage, setSelectedImage] = useState(userPhoto);

  //useRef que lo usamos para que al darle click a un <button> en verdad le de click a un input que esta hidden
  const fileInputRef = useRef(null);

  //Función para guardar la imagen y leer el archivo
  const handleImageUpload = (event) => {
    //Acá guardamos la imagen como un objeto 'FileList', ponemos cero ya que es la primera imagen, igual solo va a ser una pero igualmente se pone cero, y si queremos mas imagenes se pone un atributo multiple
    const file = event.target.files[0];
    //Instanciamos un objeto de tipo filereader para leer el contenido de lo subido
    const reader = new FileReader();

    //Cuando se termine de leer vamos a cambiar el state a ese resultado, asi para cambiar la imagen que se muestra
    reader.onload = () => {
      setSelectedImage(reader.result);
    };

    //Acá decimos que si existe un file vamos a usar el metodo 'readAsDataURL()' que es del objeto filreader y esto basicamente convierte el archivo en una url de datos para poder mostrar la vista previa de la imagen
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  //Esto es lo que dijimos anteriormente, que si le da click al <button> que actué como si le dimos click al input
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
