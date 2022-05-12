import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function FetchingDataWithUseEffect() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // axios
  //   .get("https://jsonplaceholder.typicode.com/posts")
  //   .then((res) => {
  //     console.log(res);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });

  return <div>RINGA RINGA ROSES...</div>;
}

export default FetchingDataWithUseEffect;
