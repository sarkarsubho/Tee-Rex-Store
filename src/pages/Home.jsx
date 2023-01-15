import React, { useContext, useEffect, useState } from "react";
import { SearchBar } from "../Components/SearchBar";
import { Filter } from "../Components/Filter";
import { AppContext } from "../Context/appContext";
import { ItemCart } from "../Components/ItemCart";
import styles from "./home.module.css";

export const Home = () => {
  const [state] = useContext(AppContext);
  const [allData, setAllData] = useState(state.data);
  // console.log("allDAta", allData);
  useEffect(() => {
    setAllData(state.data);
  }, [state]);
  return (
    <div className={styles.main}>
      <SearchBar data={state.data} setAllData={setAllData}></SearchBar>
      <div className={styles.productAndFilter}>
        <Filter data={state.data} setAllData={setAllData}></Filter>
        <div className={styles.products}>
          {allData.map((e) => {
            return <ItemCart key={e.id} data={e}></ItemCart>;
          })}
        </div>
      </div>
    </div>
  );
};
