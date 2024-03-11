import React from "react";

const Inputs = ({ type, title, value, step, min, max, onChange }) => {
  return (
    <div className="mb-6 w-full flex flex-col">
      <label htmlFor={type} className="text-lg font-semibold">
        {title}
      </label>

      <label htmlFor={type} className="text-lg font-semibold">
        {type === "interest" ? "" : "$"} {value}
        {type === "interest" ? "%" : ""}
      </label>
      <input
        type="range"
        id={type}
        value={value}
        step={step}
        min={min}
        max={max}
        onChange={onChange}
      />

      <div className="flex items-center justify-between mt-2">
        <p className="text-sm opacity-80">
          {type === "interest" ? "" : "$"} {min}{" "}
          {type === "interest" ? "%" : ""}
        </p>
        <p className="text-sm opacity-80">
          {type === "interest" ? "" : "$"} {max}{" "}
          {type === "interest" ? "%" : ""}
        </p>
      </div>
    </div>
  );
};

export default Inputs;
