import React from "react";

const SearchInput = ({ onChange, value, placeholder, onBlur, onEnter }) => {
  return (
    <div>
      {/* <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
        Search
      </label> */}
      <div className="relative">
        <div className="absolute inset-y-0 right-2 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="text"
          id="default-search"
          className="block w-full px-3 py-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onBlur={onBlur}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              onEnter();
            }
          }}
        />
      </div>
    </div>
  );
};

export default SearchInput;
