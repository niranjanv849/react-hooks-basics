import React from "react";
import { useState } from "react";

function StateHookWithObject() {
  const [name, setName] = useState({ firstname: "", lastname: "" });
  return (
    <div>
      <br />
      <form>
        <input
          type="text"
          value={name.firstname}
          onChange={(e) => setName({ ...name, firstname: e.target.value })}
        />
        <input
          type="text"
          value={name.lastname}
          onChange={(e) => setName({ ...name, lastname: e.target.value })}
        />
        <h2>
          Hi {name.firstname}, {name.lastname} !👋
        </h2>
        {/* <h2>{JSON.stringify(name)}</h2> */}
      </form>
    </div>
  );
}

export default StateHookWithObject;
