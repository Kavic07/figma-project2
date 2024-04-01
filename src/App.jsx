import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Home from "./Pages/Home/Home";
import Blogs from "./Pages/Blogs/Blogs";
import Works from "./Pages/Works/Works";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";
import { useEffect, useState } from "react";
import { useAuth } from "./contextAPI/AuthProvider";

function App() {
  const { setUser, token } = useAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = () => {
      fetch("https://simple-blog-api-q1ui.onrender.com/api/v1/user/me", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((resData) => {
          if (resData.success) {
            toast.success(resData.message);
            setUser(resData.data);
          } else {
            toast.error(resData.message);
          }
        })
        .catch((error) => {
          console.error("Error:", error);
          // Handle error
        })
        .finally(() => {
          setLoading(false);
        });
    };

    if (token) {
      fetchData();
    }
  }, [token]);

  if (loading) {
    return <h1>loading............</h1>;
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Blogs" element={<Blogs />}></Route>
          <Route path="/Works" element={<Works />}></Route>
          <Route path="/Register" element={<Register />}></Route>
          <Route path="/Login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer position="bottom-center" />
    </>
  );
}

export default App;
