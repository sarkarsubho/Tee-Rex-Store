import React, { useState } from "react";
import styles from "./searchbar.module.css";
export const SearchBar = ({data,setAllData}) => {
  // console.log(data)
  const [searchTerm,setSearchTerm]=useState("");

  const handleSearch=()=>{
      console.log(searchTerm,"ddd")

      let seatchData=data.filter((e)=>e.name.toLowerCase().indexOf(searchTerm.toLowerCase())>=0 || e.color.toLowerCase().indexOf(searchTerm.toLowerCase())>=0 || e.type.toLowerCase().indexOf(searchTerm.toLowerCase())>=0 )
      
      setAllData(seatchData)
      console.log(seatchData,"searchData")
  }
  return (
    <div className={styles.main}>
      <input
        type="text"
        name=""
        placeholder="Search for products..."
        onChange={(e)=>setSearchTerm(e.target.value)}
        className={styles.searchInput}
      />
      <button className={styles.searchButton}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/622/622669.png"
          alt="searchIcon"
          width={"15px"}
          height={"15px"}
          onClick={handleSearch}
        />
      </button>
      <button className={styles.filterButton} >
        <img
          src="https://cdn-icons-png.flaticon.com/128/2676/2676818.png"
          alt="filterIcon"
          width={"15px"}
          height={"15px"}
        />
      </button>
    </div>
  );
};
