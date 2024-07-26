import Card from "./UI/Card";
import Context from "../Store/Context";
import classes from "./BlogsListed.module.css";
import { useContext, useState } from "react";
import Modal from "./UI/Modal";

const BlogsListed = () => {
  const { BlogsList, setBlogsList, setBlogToEdit } = useContext(Context);
  const [showPostForm, setShowPostForm] = useState(false);

  const editHandler = (blog) => {
    setBlogToEdit(blog);
    setShowPostForm(true);
    deleteHandler(blog.id);
  };

  const HandlerToHideForm = () => setShowPostForm(false);

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
          <button onClick={() => editHandler(blog)}>Edit</button>
          <button onClick={() => deleteHandler(blog.id)}>Delete</button>
        </div>
      ))}
      {showPostForm && <Modal onClose={HandlerToHideForm} />}
    </Card>
  );
};

export default BlogsListed;
