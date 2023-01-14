import React from "react";
import styles from "./itemCart.module.css";

export const ItemCart = ({data}) => {
  return (
    <div className={styles.cart}>
      <img src={data.imageURL} alt="ProductImage" />
      <div>
        <h3>{data.name}</h3>
        <div className={styles.priceSection}>
          <h4>Rs: {data.price}</h4>
          <button className={styles.button}>Add to Cart</button>
        </div>
      </div>
      
    </div>
  );
};
