import Navbar from "../../Components/Navbar/Navbar";
import Recentpost from "../../Components/Recentpost/Recentpost";
import Featuredworks from "../../Components/Featuredworks/Featuredworks";
import Footer from "../../Components/Footer/Footer";
import "./Home.css";
import { useAuth } from "../../contextAPI/AuthProvider";
import Register from "../Register/Register";
import Login from "../Login/Login";

const Home = () => {
  const { user } = useAuth();
  console.log(user);
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="herosec-content">
          <h2>
            Hi, I am {user ? user.username : "demo"},<br></br>Creative
            Technologist
          </h2>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <button className="btn">Download Resume</button>
        </div>

        <div className="herosec-img">
          {user ? (
            <img src={user.displayPhoto} />
          ) : (
            <img src="./images/Ellipse 1.png" />
          )}
        </div>
      </div>
      <Recentpost />
      <Featuredworks />
      <Footer />
      <Register />
      <Login />
      ``
    </>
  );
};

export default Home;
