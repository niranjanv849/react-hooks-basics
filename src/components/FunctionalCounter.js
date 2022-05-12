import React from "react";
import { useState } from "react";

function FunctionalCounter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Functional Counter = {count}
      </button>
    </div>
  );
}

export default FunctionalCounter;
