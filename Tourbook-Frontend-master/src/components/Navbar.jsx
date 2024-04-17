import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowCircleRight } from "iconsax-react";
import Lottie from "lottie-react";
import header from "../assets/header.json";
import { Context } from "../context/Context";
import { useNavigate } from "react-router-dom";


function Navbar() {
  const { user, dispatch } = useContext(Context);
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();
  const handleMenu = () => {
    setMenu(!menu);
    console.log(menu);
  };

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/login",{replace:true});
  };
  return (
    <div className="absolute w-full top-0">
  <nav className="hidden sm:flex sm:flex-row justify-around p-5 font-mono text-white cursor-pointer w-full pt-10 text-[20px] ">
    <Link to={"/"}>
      <h3 className="hover:bg-sky-600 rounded-xl p-3">Home </h3>
    </Link>
    <Link to={"/write"}>
      <h3 className="hover:bg-sky-600 rounded-xl p-3">Write a blog</h3>
    </Link>
    <Link to={"/"}>
      {" "}
      <h3 className="hover:bg-sky-600 rounded-xl p-3">About </h3>
    </Link>
    {user ? (
      <h3
        className="hover:bg-sky-600 rounded-xl p-3"
        onClick={handleLogout}
      >
        Logout{" "}
      </h3>
    ) : (
      <Link to={"/login"}>
        {" "}
        <h3 className="hover:bg-sky-600 rounded-xl p-3">Login </h3>
      </Link>
    )}
  </nav>
  <div className="flex flex-col justify-center items-center h-screen">
    <header className="flex-row text-[#6fdee7] font-serif font-extrabold text-[80px] md:text-[100px] lg:text-[120px] w-full flex justify-center mt-[-300px] ">
      TripMate
      <Lottie
        className="h-20 pb-3 w-20"
        animationData={header}
        loop={false}
      ></Lottie>
    </header>
    <p className="text-white font-serif italic flex justify-center">
      We love to hear your stories, {user} !
    </p>
    <button
      className="sm:hidden flex text-white items-start my-1"
      onClick={handleMenu}
    >
      <ArrowCircleRight size="25" color="white" variant="Bold" className="absolute top-2" />
    </button>
  </div>
  <div
    className={`${
      menu ? "flex" : "hidden"
    } flex-col border-2 border-solid border-gray rounded w-1/4 mt-4  bg-white items-center justify-center`}
  >
    <Link to={"/"}>
      <h3 className="hover:border-2 hover:border-solid hover:border-gray hover:bg-gray-300 w-full text-center">
        Home
      </h3>
    </Link>
    <Link to={"/write"}>
      <h5 className="hover:border-2 hover:border-solid hover:border-gray hover:bg-gray-300 w-full text-center">
        Write a blog
      </h5>
    </Link>
    <h5 className="hover:border-2 hover:border-solid hover:border-gray hover:bg-gray-300 w-full text-center">
      About
    </h5>
    {user ? (
      <h3
        className="hover:border-2 hover:border-solid hover:border-gray hover:bg-gray-300 w-full text-center "
        onClick={handleLogout}
      >
        Logout
      </h3>
    ) : (
      <Link to={"/login"}>
        <h3 className="hover:bg-sky-600 rounded-xl p-3">Login </h3>
      </Link>
    )}
  </div>
</div>


  );
}

export default Navbar;
