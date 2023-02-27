import "../styles.css";
import { useContext } from "react";
import { UserContext } from "../App";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { currUser, setCurrUser, login, setLogin, setShowModal, showCart } =
    useContext(UserContext);

  const logOut = () => {
    setLogin(false);
    setCurrUser({});
  };
  return (
    <nav
      style={{ top: "0px", background: "rgb(39, 10, 3, .9) " }}
      className=" bg-opacity-60 w-full fixed z-10"
    >
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative w-full flex h-16 items-center justify-between">
          <div className="flex">
            <img
              src="assets/restaurant_24px.svg"
              style={{ filter: "brightness(0) invert(1)" }}
              alt="img"
            />
            <Link
              to="/menu"
              relative="path"
              className="m-2 text-white cursor-pointer font-bold"
            >
              Food's Restaurant
            </Link>
          </div>
          {login && showCart && (
            <div className="flex gap-2 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="font-sans mt-2 self-center block lg:inline-block text-white hover:text-gray-300">
                <button
                  onClick={() => setShowModal(true)}
                  className="relative flex"
                >
                  <svg
                    className="flex-1 w-8 h-8 fill-current"
                    // viewbox="0 0 24 24"
                  >
                    <path d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z" />
                  </svg>
                  <span className="absolute right-0 top-0 rounded-full bg-purple-900 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center">
                    {currUser.userCart.length}
                  </span>
                </button>
              </div>
              <span className="m-2 text-white">{currUser.name}</span>
              <span
                className="m-2 text-white cursor-pointer"
                onClick={() => logOut()}
              >
                Log Out
              </span>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
