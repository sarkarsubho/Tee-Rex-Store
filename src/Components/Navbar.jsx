import React, { useContext } from "react";
import styles from "./navbar.module.css";
import { Link } from "react-router-dom";
import { AppContext } from "../Context/appContext";

export const Navbar = () => {
  const [state] = useContext(AppContext);
  return (
    <div className={styles.nav}>
      <Link to={"/"}>
        <h2>TeeRex Store</h2>
      </Link>

      <div className={styles.tabs}>
        <div className={styles.product}>Products</div>
        <Link to={"/cart"}>
          <div className={styles.cart}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/649/649931.png"
              alt="cartImage"
              width={"30px"}
              height={"30px"}
            />
            <div className={styles.itemCount}>{state.cart.length}</div>
          </div>
        </Link>
      </div>
    </div>
  );
};
