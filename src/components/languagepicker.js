import React, { useState } from "react";
import checkedSVG from "./icons/dk.svg";
import uncheckedSVG from "./icons/gb.svg";

function LanguagePicker({ isChecked, setIsChecked }) {

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="flex flex-row self-center mr-0.5 align-center justify-center items-center h-fit w-fit">
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          value=""
          className="sr-only peer"
          onChange={handleCheckboxChange}
        />
        <div
          className={` text-center font-bold tracking-wide bg-black text-slate-50  text-xs bg-center p-3 rounded-sm hover:drop-shadow-xl w-5 h-5 bg-[#262626] peer-focus:outline-none  peer flex flex-col justify-center items-center `}

        >{isChecked ? "DA" : "EN"}</div>
      </label>
    </div>
  );
}

export default LanguagePicker;
