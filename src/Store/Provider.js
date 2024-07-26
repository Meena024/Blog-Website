import { useState } from "react";
import Context from "./Context";

const Provider = (props) => {
  const [BlogsList, setBlogsList] = useState([]);

  return (
    <Context.Provider value={{ BlogsList, setBlogsList }}>
      {props.children}
    </Context.Provider>
  );
};

export default Provider;
