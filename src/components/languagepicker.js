import React, { useState } from "react";
import checkedSVG from "./icons/dk.svg";
import uncheckedSVG from "./icons/gb.svg";

function LanguagePicker({ isChecked, setIsChecked }) {

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="flex flex-row self-center mr-2 align-center justify-center items-center h-fit w-fit">
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          value=""
          className="sr-only peer"
          onChange={handleCheckboxChange}
        />
        <div
          className={`w-5 text-center  text-xs bg-center h-5 bg-gray-200 peer-focus:outline-none  peer`}
          style={{
            backgroundImage: isChecked
              ? `url(${checkedSVG})`
              : `url(${uncheckedSVG})`,
            backgroundSize: "cover ",
          }}
        ></div>
      </label>
    </div>
  );
}

export default LanguagePicker;
