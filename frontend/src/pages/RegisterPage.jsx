import React from "react";
import { Link } from "react-router-dom";

export default function RegisterPage() {
  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="mb-32 ">
        <h1 className="text-4xl text-center mb-4">Register</h1>
        <form className="max-w-lg mx-auto ">
          <input type="email" placeholder="John doe" />
          <input type="email" placeholder="your@email.com" />
          <input type="password" placeholder="password" />
          <button className="primary">Login</button>
          <div className="text-center text-gray-500">
            Already a member?{" "}
            <Link to={"/login"} className="underline text-gray-800">
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
