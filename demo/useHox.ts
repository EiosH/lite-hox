import { createModel } from "../src/index";
import { useState, useEffect } from "react";

const useHox = () => {
  const [hox, setHox] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setHox("hox");
    }, 1000);
  }, []);

  return { hox, setHox };
};

export default createModel(useHox);
