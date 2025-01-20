import { useState } from "react";

function SearchBar() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("Search Term:", searchTerm);
  };

  return (
    <nav>
      <div className="flex justify-center w-full border-2">
        <div className="sm:my-3 my-3 border items-center rounded-full w-5/6 flex justify-between  bg-slate-100">
          <div className="relative">
            <button
              className="flex hover:opacity-80 bg-[#4A16D8] text-sm sm:text-lg w-20 sm:w-36 justify-center items-center text-white font-normal rounded-full p-2"
              onClick={toggleDropdown}
            >
              Category
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                className="text-2xl"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 15.0006L7.75732 10.758L9.17154 9.34375L12 12.1722L14.8284 9.34375L16.2426 10.758L12 15.0006Z"></path>
              </svg>
            </button>

            {isDropdownVisible && (
              <div className="bg-white mt-2 text-gray-500 w-20 sm:w-36 text-center absolute transition-duration-300 transform scale-y-100 origin-top z-10 border border-gray-200 shadow-lg rounded-xl overflow-hidden">
                <ul>
                  <li className="p-2 bg-white hover:bg-gray-100 cursor-pointer">
                    All
                  </li>
                  <li className="p-2 bg-white hover:bg-gray-100 cursor-pointer">
                    Psds
                  </li>
                  <li className="p-2 bg-white hover:bg-gray-100 cursor-pointer">
                    Photos
                  </li>
                  <li className="p-2 bg-white hover:bg-gray-100 cursor-pointer">
                    Mockups
                  </li>
                  <li className="p-2 bg-white hover:bg-gray-100 cursor-pointer">
                    Social Media
                  </li>
                  <li className="p-2 bg-white hover:bg-gray-100 cursor-pointer">
                    Pngs
                  </li>
                  <li className="p-2 bg-white hover:bg-gray-100 cursor-pointer">
                    Vectors
                  </li>
                </ul>
              </div>
            )}
          </div>
          <form
            onSubmit={handleSearchSubmit}
            className="flex w-full bg-slate-100 rounded-full"
          >
            <input
              type="text"
              name="image"
              placeholder="Search Image..."
              className="bg-transparent outline-none pl-4 w-[80%] p-1 placeholder:text-gray-400"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="w-full flex justify-end mr-3">
              <button className="hover:opacity-80 text-xl text-gray-500 font-semibold rounded-full p-1">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.25 2a8.25 8.25 0 0 1 6.34 13.53l5.69 5.69a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215l-5.69-5.69A8.25 8.25 0 1 1 10.25 2ZM3.5 10.25a6.75 6.75 0 1 0 13.5 0 6.75 6.75 0 0 0-13.5 0Z"></path>
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default SearchBar;
