import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../App";

const Checkout = () => {
  const { userList, setUserList, currUser, setCurrUser } =
    useContext(UserContext);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleCheckout = () => {
    const user = { ...currUser, userCart: [] };
    setCurrUser(user);
    const list = [...userList];
    list[currUser.id] = user;
    setUserList(list);
  };

  useEffect(() => {
    let sum = 0;
    for (let item of currUser.userCart) {
      let p = Number(item.price);
      sum += p;
    }
    setTotalPrice(sum);
  }, [totalPrice, currUser]);

  return (
    <div className=" p-16 bg-gray-300 w-full flex justify-center sm:mt-0">
      <form className="border rounded-lg border-gray-300 bg-white w-m-3/4 p-3 mt-6 shadow-md shadow-black">
        <div className="overflow-hidden sm:rounded-md">
          <h3 className="text-lg text-center font-medium leading-6 text-gray-900 p-2 m-2 sm:px-0">
            Shipping Details
          </h3>
          <div className="col-span-6 sm:col-span-3 m-2">
            <label
              htmlFor="country"
              className="block text-sm font-medium text-gray-700"
            >
              Country
            </label>
            <input
              type="text"
              className="border rounded border-gray-300 p-2 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
            />
          </div>

          <div className="col-span-6 m-2">
            <label
              htmlFor="street-address"
              className="block text-sm font-medium text-gray-700"
            >
              Street address
            </label>
            <input
              type="text"
              className="border rounded border-gray-300 p-2 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
            />
          </div>

          <div className="col-span-6 sm:col-span-6 lg:col-span-2 m-2">
            <label
              htmlFor="city"
              className="block text-sm font-medium text-gray-700"
            >
              City
            </label>
            <input
              type="text"
              className="border rounded border-gray-300 p-2 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
            />
          </div>

          <div className="col-span-6 sm:col-span-3 lg:col-span-2 m-2">
            <label
              htmlFor="region"
              className="block text-sm font-medium text-gray-700"
            >
              State
            </label>
            <input
              type="text"
              className="border rounded border-gray-300 p-2 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
            />
          </div>

          <div className="col-span-6 sm:col-span-3 lg:col-span-2 m-2">
            <label
              htmlFor="postal-code"
              className="block text-sm font-medium text-gray-700"
            >
              ZIP / Postal code
            </label>
            <input
              type="number"
              className="border rounded border-gray-300 p-2 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
            />
          </div>
        </div>

        <h3 className="text-lg text-center font-medium leading-6 text-gray-900 p-3 sm:px-0">
          Payment Details
        </h3>
        <div className="col-span-6 sm:col-span-3 m-2">
          <label className="mt-8 mx-2 text-gray-800 ">Name</label>
          <div className="mt-2 flex-col">
            <div>
              <input
                type="text"
                className="border rounded mx-2 border-gray-300 p-2 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                placeholder="Name on card"
              />
            </div>
          </div>
        </div>

        <div className="col-span-6 sm:col-span-4 m-2">
          <label className="mt-8  mx-2 text-gray-800 ">Card details</label>
          <div className=" flex-col">
            <div>
              <input
                type="number"
                className="border rounded-tl m-2 rounded-tr border-gray-300 p-2 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                placeholder="0000 1234 6549 15151"
              />
            </div>
            <div className="flex-row flex">
              <input
                className="border rounded-bl m-2 border-gray-300 p-2 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                placeholder="MM/YY"
                maxLength="5"
              />
              <input
                type="number"
                maxLength="3"
                className="border rounded-br m-2 border-gray-300 p-2 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                placeholder="CVC"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-between bg-gray-50 px-4 py-3 sm:px-6">
          <span>
            <b>Total Payment: ₹ {totalPrice}</b>
          </span>
          <Link to="/thankyou" relative="path">
            <button
              type="submit"
              className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              onClick={handleCheckout}
            >
              Pay Now
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
