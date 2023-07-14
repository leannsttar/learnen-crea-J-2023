import { React, useState } from "react";
import ConfigPhoto from "../../../assets/Female.png";
import { Modal } from "antd";

export function ChangePhoto() {
  const [modal2Open, setModal2Open] = useState(false);

  return (
    <div>
      <div className="flex items-center gap-12">
        <img src={ConfigPhoto} alt="" />
        <button
          onClick={() => setModal2Open(true)}
          className="hover:bg-[#364C97] bg-black text-white p-3 rounded-xl"
        >
          Cambiar foto de perfil
        </button>
        <Modal
          okButtonProps={{
            className:"bg-[#FF8399] active:bg-red-200",
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
        </Modal>

      </div>
      <div></div>
    </div>
  );
}
