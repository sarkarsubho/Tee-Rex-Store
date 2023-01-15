import React from "react";
import styles from "./cartItem.module.css";
import { DeleteCartItem, SelectQnt } from "../Context/context.types";

export const CartItem = ({ data, dispatch }) => {
  // let qntOption=
  return (
    <div className={styles.main}>
      <img src={data.imageURL} alt="" height={"40px"} width={"40px"} />

      <div className={styles.details}>
        <h4> {data.name}</h4>
        <div>Rs. {data.price}</div>
      </div>

      <div className={styles.qty}>
        Qty {data.qty}
        <select
          onChange={(e) =>
            //    console.log("select val ", e.target.value)

            {
              if (+e.target.value > data.quantity) {
                alert("Out of stock!");
              } else {
                dispatch({
                  type: SelectQnt,
                  payload: {
                    id: data.id,
                    val: +e.target.value,
                  },
                });
              }
            }
          }
        >
          <option value=""></option>
          {new Array(12).fill("s").map((e, i) => (
            <option key={i} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>
      </div>

      <button
        className={styles.deleteBtn}
        onClick={() => dispatch({ type: DeleteCartItem, payload: data.id })}
      >
        Delete
      </button>
    </div>
  );
};
