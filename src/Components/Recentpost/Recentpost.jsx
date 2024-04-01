import "./Recentpost.css";
import { Link } from "react-router-dom";

const Recentpost = () => {
  return (
    <>
      <div className="blog-post">
        <div className="heading">
          <p>Recent posts</p>
          <Link to="/Blogs">View all</Link>
        </div>
        <div className="blog-content-container">
          <div className="blog-content">
            <h3>Making a design system from scratch</h3>
            <div id="blog-content">
              <p>12 Feb 2020</p>
              <span className="vertical-line"></span>
              <p>Design, Pattern</p>
            </div>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
          <div className="blog-content">
            <h3>Making a design system from scratch</h3>
            <div id="blog-content">
              <p>12 Feb 2020</p>
              <span className="vertical-line"></span>
              <p>Design, Pattern</p>
            </div>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Recentpost;
