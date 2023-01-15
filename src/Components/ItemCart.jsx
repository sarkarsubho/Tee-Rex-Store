import React, { useContext } from "react";
import styles from "./itemCart.module.css";
import { AppContext } from "../Context/appContext";
import {
  AddToCart,
  IncQnt,
  DecQnt,
  DeleteCartItem,
} from "../Context/context.types";

export const ItemCart = ({ data }) => {
  const [state, dispatch] = useContext(AppContext);

  let cartItem = state.cart.filter((e) => e.id === data.id)[0];

  const handleAdd = () => {
    let cartItem = {
      ...data,
      qty: 1,
    };
    console.log(cartItem);
    dispatch({ type: AddToCart, payload: cartItem });
  };
  return (
    <div className={styles.cart}>
      <div className={styles.img}>
        <h3 className={styles.heading}>{data.name}</h3>
        <img src={data.imageURL} alt="ProductImage" width={"100%"} />
      </div>

      <div>
        <div className={styles.priceSection}>
          <h4>Rs: {data.price}</h4>
          {cartItem ? (
            <div className={styles.qty}>
              <button
                className={styles.incdecButton}
                onClick={() => {
                  if (cartItem.qty >= data.quantity) {
                    alert("Out of Stock !");
                  } else {
                    dispatch({
                      type: IncQnt,
                      payload: {
                        id: data.id,
                        val: 1,
                      },
                    });
                  }
                }}
              >
                +
              </button>
              <div>{cartItem.qty}</div>
              <button
                className={styles.incdecButton}
                onClick={() => {
                  if (cartItem.qty <= 1) {
                    dispatch({ type: DeleteCartItem, payload: data.id });
                  } else {
                    dispatch({ type: DecQnt, payload: data.id });
                  }
                }}
              >
                -
              </button>
            </div>
          ) : (
            <button className={styles.button} onClick={handleAdd}>
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
