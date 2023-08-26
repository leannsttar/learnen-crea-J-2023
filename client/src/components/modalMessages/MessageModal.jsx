import { React, Fragment, useState, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { redirect, useNavigate } from "react-router-dom";
import successIcon from "../../assets/success.svg";
import errorIcon from "../../assets/errorIcon.svg";

export function MessageModal({ to, message, success, error, open }) {
  const navigate = useNavigate();

  // function closeModal() {
  //   setIsOpen(false);
  // }

  function redirectOnClose() {
    window.location.reload();
  }

  return (
    <>
      <Transition appear show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10 h-screen"
          onClose={redirectOnClose}
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
                <Dialog.Panel className="w-full flex flex-col gap-7 items-center max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    {message}
                  </Dialog.Title>
                  <img
                    src={success ? successIcon : error ?? errorIcon}
                    alt=""
                    className="w-[8rem]"
                  />

                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-[#000000] px-7 py-2 text-sm font-medium text-white hover:bg-[#364C97] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={redirectOnClose}
                  >
                    Entendido
                  </button>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
