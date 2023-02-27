import React, { useState, useEffect } from "react";
import Item from "./Item";
import { useContext } from "react";
import { UserContext } from "../App";
import OrderSummary from "./OrderSummary";

const Menu = () => {
  const {
    userList,
    setUserList,
    items,
    showModal,
    setShowCart,
    currUser,
    setCurrUser,
  } = useContext(UserContext);

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setShowCart(true);
    let sum = 0;
    for (let item of currUser.userCart) {
      let p = Number(item.price);
      sum += p;
    }
    setTotalPrice(sum);

    const list = [...userList];
    list[currUser.id] = currUser;

    setUserList(list);

    // eslint-disable-next-line
  }, [currUser]);

  const addToCart = (idx) => {
    const newItem = {
      id: idx,
      name: items[idx].name,
      price: items[idx].price,
      qty: 1,
    };
    let exist = currUser.userCart.some((i) => i.id === idx);
    if (exist) {
      const updateCart = currUser.userCart.map((i) => {
        if (i.id === idx) {
          return { ...i, qty: i.qty + 1, price: (i.qty + 1) * newItem.price };
        } else {
          return i;
        }
      });
      setCurrUser({ ...currUser, userCart: updateCart });
    } else {
      const cc = [...currUser.userCart];
      cc.push(newItem);
      setCurrUser({ ...currUser, userCart: cc });
    }
  };
  const removeFromCart = (idx) => {
    const newItem = {
      id: idx,
      name: items[idx].name,
      price: items[idx].price,
      qty: 1,
    };
    let exist = currUser.userCart.some((i) => i.id === idx);
    if (exist) {
      const updateCart = currUser.userCart.map((i) => {
        if (i.id === idx) {
          return { ...i, qty: i.qty - 1, price: (i.qty - 1) * newItem.price };
        } else {
          return i;
        }
      });
      const newCart = updateCart.filter((i) => i.qty > 0);

      setCurrUser({ ...currUser, userCart: newCart });
    }
  };

  return (
    <div
      className="w-full min-h-screen bg-cover"
      style={{
        backgroundImage: `url(${"assets/resto-bg.jpg"})`,
        backgroundAttachment: "fixed",
      }}
    >
      <div className="flex p-20 justify-center gap-8 flex-wrap  ">
        {items.map((item, idx) => {
          return (
            <Item
              key={idx}
              item={item}
              index={idx}
              add={addToCart}
              remove={removeFromCart}
              cart={currUser.userCart}
            />
          );
        })}
        {showModal && (
          <OrderSummary
            add={addToCart}
            remove={removeFromCart}
            total={totalPrice}
            cart={currUser.userCart}
          />
        )}
      </div>
    </div>
  );
};

export default Menu;
