import "./App.css";
import { useContext, useEffect } from "react";
import { AppContext } from "./Context/appContext";
import {
  GetDataError,
  GetDataRequest,
  GetDataSuccess,
} from "./Context/context.types";

import { Navbar } from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";

function App() {
  const [state, dispatch] = useContext(AppContext);

  useEffect(() => {
    dispatch({ type: GetDataRequest });
    fetch(
      "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json"
    )
      .then((res) => res.json())
      .then((res) => {
        dispatch({ type: GetDataSuccess, payload: res });
      })
      .catch((er) => {
        console.log(er);
        dispatch({ type: GetDataError });
      });
  }, [dispatch]);
  // console.log(state);
  return (
    <div className="App">
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Home data={state.data}></Home>}></Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
      </Routes>
   
    </div>
  );
}

export default App;
