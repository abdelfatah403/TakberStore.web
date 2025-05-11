import React from "react";

const AuthBotton = ({name}:{name:string}) => {
  return (
    <>
      <div className="text-center flex justify-center items-center mt-8">
        <button className="bg-[#AB0A76] py-2 text-white px-32 rounded-lg font-[500] text-[16px] ">
          {name}
        </button>
      </div>
    </>
  );
};

export default AuthBotton;
