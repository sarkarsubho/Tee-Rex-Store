import React, { useContext } from "react";
import { AppContext } from "../Context/appContext";
import styles from "./cart.module.css";
import { CartItem } from "../Components/CartItem";


export const Cart = () => {
  const [state, dispatch] = useContext(AppContext);
let totalAmount=state.cart.reduce((acc,cur)=>{
  // console.log("acc",acc,cur)
  return acc+(cur.price *cur.qty)},0)
  return <div className={styles.main}>
    <div>Shoping Cart</div>

    <div className={styles.container}>
      <div className={styles.cartitmes}>
        {
          state.cart.map((e,i)=>{
            return <CartItem key={i} data={e} dispatch={dispatch}></CartItem>
          })
        }
      </div>
      <div className={styles.devider}></div>

      <div className={styles.total}>
        Total Amount Rs. {totalAmount}
      </div>
    </div>


  </div>;
};
