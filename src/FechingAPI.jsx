import React, { useEffect, useState } from "react";
const Fetching_API = () => {
  const API_URL = "https://swapi.dev/api/planets/1/";
  const [item, setItem] = useState([]);
  useEffect(() => {
    const fetchItem = async () => {
      try {
        const responce = await fetch(API_URL);
        // console.log(responce);
        const newItems = await responce.json();
        // console.log(newItems);
        setItem(newItems);
      } catch (error) {
        console.error(error);
      }
    };
    fetchItem();
  }, []);
  return (
    <>
      {item ? (
        <ul>
          <li>{JSON.stringify(item)}</li>
        </ul>
      ) : (
        <p> Wait For a Moment</p>
      )}
    </>
  );
};
export default Fetching_API;
