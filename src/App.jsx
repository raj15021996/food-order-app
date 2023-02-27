import "./styles.css";
import { useState, useEffect, createContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import Thankyou from "./components/Thankyou";
import Checkout from "./components/Checkout";

export const UserContext = createContext(null);

const App = () => {
  const [userList, setUserList] = useState(() => {
    return JSON.parse(localStorage.getItem("userList")) || [];
  });
  const [currUser, setCurrUser] = useState({});
  const [login, setLogin] = useState(false);
  const [items, setItems] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const data = {
    items,
    login,
    setLogin,
    userList,
    setUserList,
    currUser,
    setCurrUser,
    showModal,
    setShowModal,
    showCart,
    setShowCart,
  };
  const getData = async () => {
    const response = await fetch("data/feeds.json");
    const apiData = await response.json();
    setItems(apiData);
  };
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    localStorage.setItem("userList", JSON.stringify(userList));
  }, [userList]);

  return (
    <Router>
      <UserContext.Provider value={data}>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/signup" element={<SignUp />} />

          <Route
            exact
            path="/menu"
            element={login ? <Menu /> : <Navigate replace to="/" />}
          />
          <Route
            exact
            path="/checkout"
            element={login ? <Checkout /> : <Navigate replace to="/" />}
          />
          <Route exact path="/thankyou" element={<Thankyou />} />
        </Routes>
      </UserContext.Provider>
    </Router>
  );
};
export default App;
