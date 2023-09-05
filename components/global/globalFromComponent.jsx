import { FontColorComponent } from "./globalComponent";

export function GlobalForm({ state, setState, option, data, label }) {
  return (
    <div>
      <label className="label">
        <FontColorComponent className="label-text">{label}</FontColorComponent>
      </label>
      <select
        className="input input-bordered w-full ring-2 ring-indigo-500 bg-white text-black"
        onChange={(e) => setState(e.target.value)}
      >
        {option}
      </select>
    </div>
  );
}

export function GlobalInputForm({label,displayData,setState,type,placeholdervalue}) {
  return (
    <div>
      <label className="label">
        <FontColorComponent className="label-text">{label}</FontColorComponent>
      </label>
      <input
        type={type}
        placeholder={placeholdervalue}
        className="input input-bordered w-full ring-2 ring-indigo-500 bg-white text-black"
        value={displayData}
        onChange={(e) => {
            setState(updatedStateValue);
        }}
      />
    </div>
  );
}
