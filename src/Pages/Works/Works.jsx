import Subwork from "../../Components/Subwork/Subwork";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import "./Works.css";

const Works = () => {
  return (
    <>
      <div className="works-page-container">
        <div className="work-navbar">
          <Navbar />
        </div>
        <h2>Work</h2>
        <div>
          <Subwork />
          <Subwork />
          <Subwork />
          <Subwork />
          <Subwork />
          <Subwork />
        </div>
        <div className="workfooter">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Works;
