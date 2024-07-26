import { useState } from "react";
import Context from "./Context";

const Provider = (props) => {
  const [BlogsList, setBlogsList] = useState([
    {
      id: "blog1",
      url: "https://t3.ftcdn.net/jpg/03/26/50/30/360_F_326503028_qCpvm89l0xwuP3EibsQTb1nUL5O8Eavu.jpg",
      title: "Peacock Feather",
      description:
        "A peacock feather is a vibrant, colorful feather with an iridescent eye pattern, used in decoration and symbolism.",
    },
    {
      id: "blog2",
      url: "https://img.pikbest.com/wp/202344/fluffy-pastel-colored-bird-feathers-abstract-background-with-a-textured-twist_9926209.jpg!sw800",
      title: "Feather",
      description: "A soft feather is light and fluffy, with a delicate texture. Often found on birds is gentle to touch and provides insulation.",
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
