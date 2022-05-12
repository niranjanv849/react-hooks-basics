import React from "react";
import RunOnceUseEffect from "./RunOnceUseEffect";
import { useState, useEffect } from "react";

function UseEffectWithCleanUp() {
  const [display, setDisplay] = useState(true);

  //can't perform a state update in unmounted component
  // https://youtu.be/DTlmk6QeOHY?list=PLxdOyiHPLi335fhL4AbCF_JtqHkneBVQ8
  return (
    <div>
      <br />
      <button onClick={() => setDisplay(!display)}>Toggle display</button>
      {display && <RunOnceUseEffect />}
    </div>
  );
}

export default UseEffectWithCleanUp;
