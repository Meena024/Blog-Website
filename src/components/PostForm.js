import { useContext, useState } from "react";
import Card from "./UI/Card";
import Context from "../Store/Context";

const PostForm = (props) => {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");

  const { BlogsList, setBlogsList } = useContext(Context);

  const postHandler = (e) => {
    e.preventDefault();
    const blog = {
      id: Date.now().toString(),
      title: title,
      url: url,
      description: description,
    };
    setBlogsList((prevBlogs) => [...prevBlogs, blog]);
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
          <button type="submit">Post</button>
          <button onClick={() => props.onClose()}>Close</button>
        </form>
      </div>
    </Card>
  );
};

export default PostForm;
