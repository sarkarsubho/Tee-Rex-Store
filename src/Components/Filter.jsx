import React, { useEffect, useState } from "react";
import styles from "./filter.module.css";

export const Filter = ({data,setAllData}) => {
   
  let [color,setColor]=useState("");
  
  let [gender,setGender]=useState("");

  let [price,setPrice]=useState("");

  let [type,setType]=useState("");

 
  useEffect(()=>{
    let updatedData=data;
    if(color){
      updatedData=updatedData.filter((e)=>e.color.toLowerCase() ===color)
    }
    if(gender){
      updatedData=updatedData.filter((e)=>e.gender.toLowerCase() ===gender)
    }
    if(price){
       if(price === "0-250"){
        updatedData=updatedData.filter((e)=>e.price <=250)
       }else  if(price === "250-450"){
        updatedData=updatedData.filter((e)=>e.price >250 && e.price <=450 )
       }else{
        updatedData=updatedData.filter((e)=>e.price >450 )
       }
      
    }
    if(type){
      updatedData=updatedData.filter((e)=>e.type.toLowerCase() ===type)
    }
    setAllData(updatedData)
  },[color,gender,price,type,data])

  return (
    <div className={styles.main}>
      <div>
        <h4 className={styles.heading}>Color</h4>
        <div>
          <div>
            <input type="checkbox" checked={color==="red" ? true :false} value="red" onChange={(e)=>setColor(e.target.value)} />
            <label htmlFor="">Red</label>
          </div>

          <div>
            <input type="checkbox" checked={color==="blue" ? true :false} value="blue" onChange={(e)=>setColor(e.target.value)}/>
            <label htmlFor="">Blue</label>
          </div>

          <div>
            <input type="checkbox"  checked={color==="green" ? true :false} value="green" onChange={(e)=>setColor(e.target.value)}/>
            <label htmlFor="">Green</label>
          </div>
        </div>
      </div>

      <div>
        <h4 className={styles.heading}>Gender</h4>
        <div>
          <div>
            <input type="checkbox" checked={gender==="men" ? true :false} value="men" onChange={(e)=>setGender(e.target.value)} />
            <label htmlFor="">Men</label>
          </div>

          <div>
            <input type="checkbox" checked={gender==="women" ? true :false} value="women" onChange={(e)=>setGender(e.target.value)} />
            <label htmlFor="">Women</label>
          </div>
        </div>
      </div>

      <div>
        <h4 className={styles.heading}>Price</h4>
        <div>
          <div>
            <input type="checkbox" checked={price==="0-250" ? true :false} value="0-250" onChange={(e)=>setPrice(e.target.value)} />
            <label htmlFor="">0-Rs.250</label>
          </div>

          <div>
            <input type="checkbox" checked={price==="250-450" ? true :false} value="250-450" onChange={(e)=>setPrice(e.target.value)}/>
            <label htmlFor="">Rs.250-450</label>
          </div>

          <div>
            <input type="checkbox" checked={price==="450av" ? true :false} value="450av" onChange={(e)=>setPrice(e.target.value)}/>
            <label htmlFor="">Rs.450</label>
          </div>
        </div>
      </div>

      <div>
        <h4 className={styles.heading}>Type</h4>
        <div>
          <div>
            <input type="checkbox" checked={type==="polo" ? true :false} value="polo" onChange={(e)=>setType(e.target.value)}/>
            <label htmlFor="">Polo</label>
          </div>

          <div>
            <input type="checkbox"  checked={type==="hoodie" ? true :false} value="hoodie" onChange={(e)=>setType(e.target.value)} />
            <label htmlFor="">Hoodie</label>
          </div>

          <div>
            <input type="checkbox"   checked={type==="basic" ? true :false} value="basic" onChange={(e)=>setType(e.target.value)}/>
            <label htmlFor="">Basic</label>
          </div>
        </div>
      </div>
    </div>
  );
};
