import Card from "./UI/Card";

const PostForm = (props) => {
  return (
    <Card >
      <div>
        <h3>Add New Blog</h3>
        <form>
          <div>
            <label htmlFor="title">Title:</label>
            <input type="text" id="title" />
          </div>
          <br />
          <div>
            <label htmlFor="url">URL:</label>
            <input type="text" id="url" />
          </div>
          <br />
          <div>
            <label htmlFor="description">URL:</label>
            <input type="text" id="description" />
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
