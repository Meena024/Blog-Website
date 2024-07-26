import Card from "./UI/Card";
import Context from "../Store/Context";
import classes from "./BlogsListed.module.css";
import { useContext } from "react";

const BlogsListed = () => {
  const { BlogsList, setBlogsList } = useContext(Context);

  const deleteHandler = (id) => {
    setBlogsList((prevBlogs) => prevBlogs.filter((blog) => blog.id !== id));
  };

  return (
    <Card>
      {BlogsList.map((blog) => (
        <div key={blog.id} className={classes.blog}>
          <h2>{blog.title}</h2>
          <img src={blog.Url} />
          <p>{blog.description}</p>
          <button>Edit</button>
          <button onClick={() => deleteHandler(blog.id)}>Delete</button>
        </div>
      ))}
    </Card>
  );
};

export default BlogsListed;
