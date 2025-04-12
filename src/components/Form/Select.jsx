import React from "react";

const selectFiled = ({ label, id, name, value, country_option ,onChange}) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        {label}
      </label>
      <select
        className="w-full p-3 mt-1 border border-gray-300 rounded-md"
        value={value}
        name={name}
        id={id}
        onChange={onChange}
      >
        <option selected>select {label}</option>

        {country_option?.map((opt, i) => (
          <option key={i} value={opt?.id}>{opt?.name}</option>
        ))}
      </select>
    </div>
  );
};

export default selectFiled;
