import Card from "./UI/Card";
import classes from "./BlogsListed.module.css";

const BlogsListed = () => {
  const blogList = [
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
  ];

  return (
    <Card>
      {blogList.map((blog) => (
        <div key={blog.id} className={classes.blog}>
          <h2>{blog.title}</h2>
          <img src={blog.Url} />
          <p>{blog.description}</p>
          <button>Edit</button>
          <button>Delete</button>
        </div>
      ))}
    </Card>
  );
};

export default BlogsListed;
