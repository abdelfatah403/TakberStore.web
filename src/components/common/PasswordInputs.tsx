"use client";
import { Eye, EyeOff } from "lucide-react";
import React, { useState } from "react";

type fields = {
  htmlFor: string;
  name: string;
  placeholder: string;
  type?: string;
  id: string;
};
const PasswordInputs = ({ htmlFor, name, placeholder, type, id }: fields) => {
  const [password, ShowPassword] = useState(false);
  const changePassword = () => ShowPassword(!password);

  return (
    <>
      <div className="flex flex-col mt-14">
        <label className="font-[600] text-[20px] mb-1" htmlFor={htmlFor}>
          {name}
        </label>
        <div className="bg-white flex-1 p-3 rounded-md flex ">
          <input
            placeholder={placeholder}
            type={password ? "text" : "password"}
            id={id}
            className="focus:outline-none placeholder:ms-2 flex-1"
          />
          {!password ? (
            <EyeOff className=" items-start" onClick={changePassword} />
          ) : (
            <Eye className=" items-start" onClick={changePassword} />
          )}
        </div>
      </div>
    </>
  );
};

export default PasswordInputs;
