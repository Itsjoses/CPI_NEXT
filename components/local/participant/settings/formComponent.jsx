import { PrimaryColor } from "@/components/global/globalComponent";
import React from "react";

export function InputField({ label, placeholdervalue,type }) {
  return (
    <div>
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <input
        type={type}
        placeholder={placeholdervalue}
        className="input input-bordered w-full"
      />
    </div>
  );
}

export function SelectField({ label, firstValue, option }) {
  return (
    <div>
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <select className="select select-bordered w-full">
        <option disabled defaultValue>
          {firstValue}
        </option>
        {option}
      </select>
    </div>
  );
}

export function SettingFormLayout({ label,children, ...attr }) {
    return(
        <PrimaryColor className="rounded-md w-full h-auto p-4 box-border" >
        <div className="Title text-lg font-bold mb-3">{label}</div>
        {children}
      </PrimaryColor>
    )

}
