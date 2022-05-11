import React from "react";

import { render } from "react-dom";
import useHox from "./useHox";

const rootElement = document.getElementById("root");

function Child() {
  const { setHox } = useHox();

  return (
    <div
      onClick={() => {
        setHox("child");
      }}
    >
      Child
    </div>
  );
}

function Father() {
  const { hox } = useHox();
  return (
    <div>
      <h1>Father love {hox}</h1>
      <Child />
    </div>
  );
}

render(<Father />, rootElement);
