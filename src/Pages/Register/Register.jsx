/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../../contextAPI/AuthProvider";
import "./Register.css";

const Register = () => {
  const { updateToken } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  // const [previewImage, setPreviewImage] = useState("/default.jpg");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const output = document.getElementById("preview_img");

    if (file) {
      output.src = URL.createObjectURL(file);
      handleChange(event);

      output.onload = () => {
        URL.revokeObjectURL(output.src); // free memory1
      };
    }
  };

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({ ...formData, [name]: name === "image" ? files[0] : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const formDataToSend = new FormData();
    formDataToSend.append("username", formData.username);
    formDataToSend.append("password", formData.password);
    formDataToSend.append("confirmPassword", formData.confirmPassword);
    formDataToSend.append("image", formData.image);

    fetch("https://simple-blog-api-q1ui.onrender.com/api/v1/auth/register", {
      method: "POST",
      body: formDataToSend,
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
      <div className="register-container">
        <div className="form-image">
          <img
            src="https://storage.googleapis.com/devitary-image-host.appspot.com/15846435184459982716-LogoMakr_7POjrN.png"
            alt="form-logo"
          />
        </div>
        <div className="form-content">
          <h1>Sign Up</h1>
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
              className="input-content"
              name="password"
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
            <br />
            <input
              className="input-content"
              name="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            <br />
          </div>
          <div id="input-field">
            <img id="preview_img" src="" alt="profile-pic" />
            <label>
              <input
                className="file-img"
                name="image"
                type="file"
                onChange={handleFileChange}
              />
            </label>
          </div>
          <button type="submit" disabled={loading}>
            Sign Up
          </button>
          <p>
            I agree with Kavic's <a href="dd">Terms of Service</a> and its{" "}
            <a href="dd">Privacy Policy</a>{" "}
          </p>
        </form>
      </div>
    </>
  );
};

export default Register;
