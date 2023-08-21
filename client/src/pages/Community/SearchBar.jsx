import React from "react";

export function SearchBar({ setSearchText }) {
  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <>
      <div className="w-full 450:w-96">
        <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-[#F5F5F5] overflow-hidden">
          <div className="grid place-items-center h-full w-12 text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          <input
            className="peer h-full w-full outline-none text-sm text-gray-700 pr-2 bg-[#F5F5F5]"
            type="text"
            id="search"
            placeholder="Encuentra personas o temas.."
            onChange={handleSearchChange}
          />
        </div>
      </div>
    </>
  );
}
