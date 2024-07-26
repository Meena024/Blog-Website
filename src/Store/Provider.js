import { useState } from "react";
import Context from "./Context";

const Provider = (props) => {
  const [BlogsList, setBlogsList] = useState([
    {
      id: "blog1",
      Url: "https://t3.ftcdn.net/jpg/03/26/50/30/360_F_326503028_qCpvm89l0xwuP3EibsQTb1nUL5O8Eavu.jpg",
      title: "Peacock Feather",
      description: "hello description1",
    },
    {
      id: "blog2",
      Url: "https://img.pikbest.com/wp/202344/fluffy-pastel-colored-bird-feathers-abstract-background-with-a-textured-twist_9926209.jpg!sw800",
      title: "Feather",
      description: "hello description",
    },
  ]);
  const [blogToEdit, setBlogToEdit] = useState(null);
  return (
    <Context.Provider
      value={{ BlogsList, setBlogsList, blogToEdit, setBlogToEdit }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default Provider;
