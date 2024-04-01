import "./Blog.css";

const Blog = () => {
  return (
    <>
      <div className="post-content">
        <h3>Making a design system from scratch</h3>
        <div id="post-content">
          <p>12 Feb 2020</p>
          <span className="vertical-line"></span>
          <p>Design, Pattern</p>
        </div>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
        <div className="dash-line"></div>
      </div>
    </>
  );
};

export default Blog;
