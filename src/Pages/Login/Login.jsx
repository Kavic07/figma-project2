import { useNavigate } from "react-router-dom";
import "./Login.css";
import { useState } from "react";
import { useAuth } from "../../contextAPI/AuthProvider";
import { toast } from "react-toastify";

const Login = () => {
  const { updateToken } = useAuth();
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: name === "image" ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = JSON.stringify(formData);
    setLoading(true);

    console.log(body);
    fetch("https://simple-blog-api-q1ui.onrender.com/api/v1/auth/login", {
      method: "POST",
      body,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("Success:", data);
        if (data.success) {
          toast.success(data.message);

          updateToken(data.data.token);
          navigate("/");
        } else {
          toast.error(data.message);
        }
        // Handle success response
      })

      .catch((error) => {
        console.error("Error:", error);
        // Handle error
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <div className="login-container">
        <div className="form-content">
          <h1>Login</h1>
        </div>
        <div className="form-heading">
          <hr className="line"></hr>
          <p>Sign In With Username</p>
          <hr className="line"></hr>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="input-field">
            <input
              className="input-content"
              name="username"
              type="text"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
            />
            <br />
            <input
              id="input-content"
              name="password"
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
            <br />
            <p>
              <a href="dd" className="forgot-pass">
                Forget password?
              </a>
            </p>
          </div>
          <button type="submit" disabled={loading}>
            LOGIN
          </button>
        </form>

        <p>
          <a href="dd" id="signup">
            Don`t have an account? Sign Up
          </a>
        </p>
      </div>
    </>
  );
};

export default Login;
