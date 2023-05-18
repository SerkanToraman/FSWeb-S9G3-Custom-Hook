import { useEffect, useState } from "react";

export const useStorageInput = (key,initialValue) => {
  const [boolean,setBoolean]= useState(()=>{
    let item =JSON.parse(localStorage.getItem(key));
    return item===null ? initialValue: item;
  });
  useEffect(()=>{
    let stringifiedBoolean = JSON.stringify(boolean);
    localStorage.setItem(key,stringifiedBoolean);
  },[boolean,setBoolean]);

  return [boolean,setBoolean];
};