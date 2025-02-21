import { useState, lazy, Suspense, memo } from "react";

import Explore from "./Explore"
import { Link } from "react-router-dom";
import { useLogout } from "../CustomHooks/useLogout";
import { useAuthContext } from "../CustomHooks/useAuthContext";
import { googleLogout } from "@react-oauth/google";
import UserPanel from "./UserPanel";


const Header = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleClick = () => {
    logout();
    googleLogout();
  };

  return (
    <header className="">
      <nav className="flex flex-row justify-between items-center px-8 lg:px-32 -mb-2 pt-4">
        <div className="flex flex-row gap-20 justify-center items-center">
          <Link to={`/`}>
            <img
              loading="lazy"
              src="./header/Logo-primary.svg"
              alt="primaryLogo"
              className="h-[31px] w-[170px] md:h-[31px] md:w-[146px]"
            />
          </Link>
          <div className="hidden md:flex flex-row gap-10">
            <Explore />
            <Link to={`/blog`} className="hidden md:flex text-[#505153]">
              Discover
            </Link>
          </div>
        </div>
        {user ? (
          <div className="flex flex-row gap-3 justify-center items-center">
            <div className="hidden md:flex flex-row justify-center items-center gap-3 text-center">
              <img
                loading="lazy"
                src="../assets/icons/profileIcon1.png"
                alt="profileicon"
                className="p-2 bg-[#E3A9FC] text-black w-2 h-2 rounded-sm"
              />
              <img
                loading="lazy"
                src="../assets/icons/profileIcon2.png"
                alt="profileicon"
                className="p-2 bg-[#E3A9FC] text-black w-2 h-2 rounded-sm"
              />
              <img
                loading="lazy"
                src="../assets/icons/profileIcon3.png"
                alt="profileicon"
                className="p-2 bg-[#E3A9FC] text-black w-2 h-2 rounded-sm"
              />
              <p>{user.name || user.email}</p>
            </div>
            <div className="hidden md:flex">
              <Suspense><UserPanel user={user} handleClick={handleClick} /></Suspense>
            </div>
          </div>
        ) : (
          <div className="hidden md:flex flex-row gap-x-10 justify-center items-center font-semibold text-center">
            <Link to={`/login`}>
              <button className="nav-btn text-[#4A16D8] border border-[#4A16D8]">
                Login
              </button>
            </Link>
            <Link to={`/signup`}>
              <button className="nav-btn bg-[#4A16D8] text-white border border-[#4A16D8]">
                Sign up
              </button>
            </Link>
          </div>
        )}
        <div className="flex md:hidden relative">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <img loading="lazy" src={mobileMenuOpen ? "./header/close.svg" : "./header/menuBar.png"} className="h-6 w-8" aria-hidden="true" />
          </button>
          <div className={`${mobileMenuOpen ? "flex" : "hidden"} p-2 border border-gray-300 rounded-lg items-center flex-col absolute top-0 left-0 bg-white mt-[50px] gap-[10px] w-auto -ml-[100px]`}>
            <Explore />
            <Link to={`/blog`} className=" text-[#505153]">
              Discover
            </Link>
            <Link to={`/blog`} className=" text-[#505153]">
              Blog
            </Link>
            <Link to={`/login`}>
              <button className="px-8 py-1 rounded-full text-[#4A16D8] border border-[#4A16D8]">
                Login
              </button>
            </Link>
            <Link to={`/signup`}>
              <button className="px-7 py-1 rounded-full bg-[#4A16D8] text-white border border-[#4A16D8]">
                Sign up
              </button>
            </Link>
          </div>
        </div>
      </nav>
      import { useState } from "react";
      
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim() !== "") {
      navigate(`/searchResult?q=${query}`);
    }
  };

  return (
    <header className="p-4 bg-gray-800 text-white flex justify-between items-center">
      <h1 className="text-xl font-bold">Image Library</h1>
      <form onSubmit={handleSearch} className="flex">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search images..."
          className="p-2 rounded-l-md border-none text-black"
        />
        <button
          type="submit"
          className="bg-blue-500 px-4 py-2 rounded-r-md text-white"
        >
          🔍 Search
        </button>
      </form>
    </header>
  );
};

export default Header;

    </header>
  );
};

export default memo(Header);
