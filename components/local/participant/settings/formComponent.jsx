import {
  FontColorComponent,
  PrimaryColor,
} from "@/components/global/globalComponent";
import React from "react";

export function InputField({
  label,
  placeholdervalue,
  type,
  stateValue,
  state,
}) {
  return (
    <div>
      <label className="label">
        <FontColorComponent className="label-text">{label}</FontColorComponent>
      </label>
      <input
        type={type}
        placeholder={placeholdervalue}
        className="input input-bordered w-full ring-2 ring-indigo-500 bg-white text-black"
        value={stateValue}
        onChange={(e) => {
          state(e.target.value);
        }}
      />
    </div>
  );
}

export function SelectField({ label, option, stateValue, state }) {
  return (
    <div>
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <select className="select select-bordered w-full" value={stateValue} onChange={(e) => state(e.target.value)} >
        {option}
      </select>
    </div>
  );
}

export function SettingFormLayout({ label, children, ...attr }) {
  return (
    <PrimaryColor className="rounded-md w-full h-auto p-4 box-border">
      <div className="Title text-lg font-bold mb-3">{label}</div>
      {children}
    </PrimaryColor>
  );
}
