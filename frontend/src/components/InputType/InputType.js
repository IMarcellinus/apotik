import React from "react";
import { FaTrashAlt } from "react-icons/fa";

const InputType = ({
  label,
  type,
  placeholder,
  value,
  onChange,
  inputProps,
}) => {
  const handleChange = (e) => {
    if (type === "file") {
      const { files } = e.target;
      console.log(files);
      if (files) {
        onChange([...files]);
      }
      return;
    }
    const { value } = e.target;
    onChange(value);
  };
  const inputType = (typeInput) => {
    let type;
    switch (typeInput) {
      case "text":
        type = "text";
        break;
      case "number":
        type = "number";
        break;
      case "file":
        type = "file";
        break;
      default:
        type = "text";
        break;
    }
    return type;
  };
  switch (type) {
    case "textarea":
      return (
        <div>
          <label className="block text-sm font-medium text-gray-700">
            {label}
          </label>
          <textarea
            className="mt-1 p-2 border block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            rows={3}
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
            {...inputProps}
          ></textarea>
        </div>
      );
    default:
      return (
        <div>
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor={inputProps?.id}
          >
            {label}
            {type === "file" && (
              <div className="mt-1 flex items-center justify-between border p-2 rounded-md">
                <p>{`Jumlah file yang dipilih ${value?.length || 0}`}</p>
                {value && value.length > 0 && (
                  <button onClick={() => onChange("")}>
                    <FaTrashAlt color="red" />
                  </button>
                )}
              </div>
            )}
          </label>
          <input
            type={inputType(type)}
            className={`${
              type === "file" ? "hidden" : ""
            } mt-1 p-2 border block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50`}
            placeholder={placeholder}
            value={type === "file" ? "" : value}
            onChange={handleChange}
            {...inputProps}
          />
        </div>
      );
  }
};

export default InputType;
