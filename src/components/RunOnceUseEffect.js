import React from "react";
import { useState, useEffect } from "react";

function RunOnceUseEffect() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePosition = (e) => {
    console.log("Mouse event");
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    console.log(`useEffect Called`);
    window.addEventListener("mousemove", logMousePosition);

    return ()=>{
      console.log("component unmounting code running")
      window.removeEventListener("mousemove",logMousePosition)
    }
    //this **useEffect** will run only once by specifying an empty array - [] as second parameter
  }, []);

  return (
    <div>
      <br />
      Hooks X - {x} Y - {y}
    </div>
  );
}

export default RunOnceUseEffect;
