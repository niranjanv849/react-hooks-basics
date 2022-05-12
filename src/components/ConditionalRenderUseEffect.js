import React from "react";
import { useState, useEffect } from "react";

function ConditionalRenderUseEffect() {
  const [name, setName] = useState("");

  useEffect(() => {
    // console.log("first");
  }, [name]);

  //useEffect re-renders document only if [name] changes, we can pass either a state/props to - [] to watch for in useEffect

  return (
    <div>
      <br />
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}

export default ConditionalRenderUseEffect;
