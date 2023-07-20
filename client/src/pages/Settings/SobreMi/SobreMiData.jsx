import { React, useState, useRef, useEffect } from "react";

export function SobreMiData({ label, data, onEdit, notEdit }) {

    const [inputValue, setInputValue] = useState(data);

    // const inputRef = useRef(null);

    const handleInputChange = (event) => {
        setInputValue(event.target.value) 
    };

    const resetData = () => {
      setInputValue(data)
    }

    

  return (
    <div className="">
      <p className="font-[700]">{label}</p>
      {onEdit ? (
        <input
          value={inputValue}
          onChange={notEdit ? resetData : handleInputChange}
          //Esto se pone para tipo referenciar el Ref XD, nose
          // onBlur={handleInputBlur}
          className="font-[300] bg-[#e2e2e2a9] rounded-md px-2 outline-none w-full"
        />
      ) : (
        <p>{data}</p>
      )}
    </div>
  );
}
