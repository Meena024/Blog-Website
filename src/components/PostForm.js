import { useContext, useEffect, useState } from "react";
import Card from "./UI/Card";
import Context from "../Store/Context";

const PostForm = (props) => {
  const { setBlogsList } = useContext(Context);
  const { blogToEdit } = props;

  const [title, setTitle] = useState(blogToEdit ? blogToEdit.title : "");
  const [url, setUrl] = useState(blogToEdit ? blogToEdit.url : "");
  const [description, setDescription] = useState(
    blogToEdit ? blogToEdit.description : ""
  );

  useEffect(() => {
    if (blogToEdit) {
      setUrl(blogToEdit.url);
      setTitle(blogToEdit.title);
      setDescription(blogToEdit.description);
    }
  }, [blogToEdit]);

  const postHandler = (e) => {
    e.preventDefault();
    const blog = {
      id: blogToEdit ? blogToEdit.id : Date.now().toString(),
      title: title,
      url: url,
      description: description,
    };

    if (blogToEdit) {
      setBlogsList((prevBlogs) =>
        prevBlogs.map((item) => (item.id === blogToEdit.id ? blog : item))
      );
    } else {
      setBlogsList((prevBlogs) => [...prevBlogs, blog]);
    }
    setUrl("");
    setTitle("");
    setDescription("");
    props.onClose();
  };

  return (
    <Card>
      <div>
        <h3>Add New Blog</h3>
        <form onSubmit={postHandler}>
          <div>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <br />
          <div>
            <label htmlFor="url">URL:</label>
            <input
              type="text"
              id="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
          </div>
          <br />
          <div>
            <label htmlFor="description">Description:</label>
            <input
              type="text"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <br />
          <button type="submit">{blogToEdit ? "Update" : "Post"}</button>
          <button onClick={() => props.onClose()}>
            {blogToEdit ? "Delete" : "Cancel"}
          </button>
        </form>
      </div>
    </Card>
  );
};

export default PostForm;
