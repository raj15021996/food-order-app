import React from "react";
import { useContext } from "react";
import { UserContext } from "../App";
import { Link } from "react-router-dom";

const OrderSummary = ({ add, remove, total, cart }) => {
  const { showModal, setShowModal, setShowCart } = useContext(UserContext);

  return (
    <>
      {showModal ? (
        <>
          <div
            className="relative z-10"
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

            <div className="fixed inset-0 z-10 overflow-y-auto sm:my-8 sm:w-full ">
              <div className="flex min-h-full items-end justify-center p-2 text-center sm:items-center sm:p-0">
                <div className="relative m-auto inset-x-0 inset-y-0 transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8  sm:w-full sm:max-w-lg">
                  <div className="px-2 pt-5 pb-4 sm:p-4">
                    <div className="sm:flex sm:items-start">
                      <div className="mt-3 w-full text-center sm:mt-0 sm:ml-4 sm:text-left">
                        <h3
                          className="text-lg font-medium leading-6 text-gray-900"
                          id="modal-title"
                        >
                          Order Summary
                        </h3>

                        <ul className="mt-2 p-2 w-full rounded-lg">
                          {cart.map((i) => {
                            return (
                              <li
                                key={i.name}
                                className="w-full flex justify-between items-center"
                              >
                                <span
                                  className="text-sm text-gray-700"
                                  style={{ width: "15px" }}
                                >
                                  {i.name}
                                </span>
                                <span className=" text-sm text-gray-700">
                                  {i.qty}
                                </span>
                                <div>
                                  <button
                                    onClick={() => remove(i.id)}
                                    className="bg-rose-600 p-1 btn m-2 rounded-md"
                                  >
                                    -
                                  </button>
                                  <button
                                    onClick={() => add(i.id)}
                                    className=" bg-indigo-800 p-1 btn m-2 rounded-md"
                                  >
                                    +
                                  </button>
                                </div>
                              </li>
                            );
                          })}
                        </ul>

                        <span className="text-sm text-gray-500">
                          Total (INR) : ₹ {total}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-end m-2 border-solid  rounded-b">
                    <Link to="/checkout" relative="path">
                      <button
                        className="text-white bg-blue-500 active:bg-blue-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                        onClick={() => {
                          setShowCart(false);
                          setShowModal(false);
                        }}
                      >
                        SAVE AND CHECKOUT
                      </button>
                    </Link>
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      CANCEL
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default OrderSummary;
