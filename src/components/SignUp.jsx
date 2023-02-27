import React, { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../App";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const { userList, setUserList, setCurrUser, setLogin } =
    useContext(UserContext);

  const [user, setUser] = useState({});

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      id: userList.length,
      name: user.name,
      email: user.email,
      password: user.password,
      userCart: [],
    };

    const list = [...userList];
    list.push(newUser);
    setUserList(list);
    setCurrUser(newUser);
    setLogin(true);
    navigate("/menu");
  };

  return (
    <div
      className="flex items-center h-screen justify-center bg-cover"
      style={{ backgroundImage: "url(assets/resto-bg1.jpg" }}
    >
      <div className="flex flex-col items-center p-3  bg-white rounded-lg">
        <div className="bg-gray">
          <h3 className="text-4xl font-bold ">SignUp</h3>
        </div>
        <div className=" px-6 py-4 mt-6 overflow-hidden sm:max-w-lg sm:rounded-lg">
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="flex items-center justify-between">
              <label
                htmlFor="name"
                className="block text-sm m-3 font-medium text-gray-700 undefined"
              >
                Name:
              </label>
              <input
                type="text"
                name="name"
                required
                className="block w-50 mt-1 border-2 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                onChange={(e) => setUser({ ...user, name: e.target.value })}
              />
            </div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="email"
                className="block text-sm m-3 font-medium text-gray-700 undefined"
              >
                Email:
              </label>
              <input
                type="email"
                name="email"
                required
                className="block w-50 mt-1 border-2 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
            </div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm m-3 font-medium text-gray-700 undefined"
              >
                Password:
              </label>

              <input
                type="password"
                name="password"
                required
                className="block w-50 mt-1 border-2 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                minLength="6"
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
            </div>
            <div className="flex justify-center items-center mt-4">
              <button
                type="submit"
                className="w-50 px-3 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
