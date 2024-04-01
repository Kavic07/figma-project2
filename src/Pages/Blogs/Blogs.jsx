import Blog from "../../Components/Blog/Blog";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import "./Blogs.css";

const Blogs = () => {
  return (
    <>
      <div className="blog-container">
        <div className="blog-navbar">
          <Navbar />
        </div>

        <div className="blog-content">
          <h1>Blogs</h1>

          <div className="blog-list">
            <Blog />
            <Blog />
            <Blog />
            <Blog />
          </div>

          <div className="blog-footer">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
