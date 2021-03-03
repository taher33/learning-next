import React, { useState } from "react";
import { login_server } from "../lib/login";
import { useRouter } from "next/router";

function login() {
  const router = useRouter();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [loading, setloading] = useState(false);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    setloading(true);
    e.preventDefault();
    login_server(data, router).then(() => {
      setloading(false);
    });
  };

  return (
    <div>
      <form>
        <span>email</span>
        <input
          type="text"
          name="email"
          value={data.email}
          onChange={handleChange}
        />
        <br />
        <span>password</span>
        <input
          type="text"
          name="password"
          value={data.password}
          onChange={handleChange}
        />
        <br />
        <input
          type="submit"
          value="submit"
          onClick={handleSubmit}
          disabled={loading}
        />
      </form>
    </div>
  );
}

export default login;
