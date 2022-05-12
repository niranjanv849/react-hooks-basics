import React from "react";
import { useState, useEffect } from "react";

function EffectHook() {
  const [a, seta] = useState(0);

  //runs after every component updates - alternative for compDidMount, compWillMount
  useEffect(() => {
    document.title = `You clicked ${a} times`;
  });

  return (
    <div>
      <button onClick={() => seta(a + 1)}>Count = {a}</button>
    </div>
  );
}

export default EffectHook;
