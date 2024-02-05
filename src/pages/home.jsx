import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CHECK_USER } from "../actions/user";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState([{ username: "", password: "" }]);
  const { errorMsg, isAuthenticated } = useSelector((state) => state.user);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.className]: e.target.value });
  };

  const handleSubmitEvent = (e) => {
    e.preventDefault();
    dispatch({ type: CHECK_USER, payload: formData });
  };
  return (
    <form className="form" onSubmit={handleSubmitEvent}>
      <div className="form_control">
        <label htmlFor="user-email">Username:</label>
        <input
          className="username"
          type="email"
          id="user-email"
          name="email"
          placeholder="example@yahoo.com"
          aria-describedby="user-email"
          aria-invalid="false"
          onChange={handleChange}
        />
      </div>
      <div className="form_control">
        <label htmlFor="password">Password:</label>
        <input
          className="password"
          type="password"
          id="password"
          name="password"
          aria-describedby="user-password"
          aria-invalid="false"
          onChange={handleChange}
        />
        <div id="user-password" style={{ color: "red" }}>
          {errorMsg}
        </div>
      </div>
      <button className="btn-submit">Login</button>
    </form>
  );
}
