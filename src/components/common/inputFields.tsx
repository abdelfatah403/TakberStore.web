import React from "react";

type fields = {
  htmlFor: string;
  name: string;
  placeholder: string;
  type: string;
  id: string;
};
const InputFields = ({ htmlFor, name, placeholder, type, id }: fields) => {
  return (
    <>
      <div className="flex flex-col mt-9">
        <label className="font-[600] text-[20px] mb-1" htmlFor={htmlFor}>
          {name}
        </label>
        <div className="bg-white flex-1 p-3 rounded-md">
          <input
            placeholder={placeholder}
            type={type}
            id={id}
            className="focus:outline-none placeholder:ms-2 flex-1"
          />
        </div>
      </div>
    </>
  );
};

export default InputFields;
