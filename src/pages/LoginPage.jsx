import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import "./LoginPage.css";

const LoginPage = () => {
  const { login, register } = useAuth();
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setError("");
    setLoading(true);
    try {
      if (isLogin) {
        await login(email, password);
      } else {
        await register(email, password);
      }
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  const handleGoogle = async () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>{isLogin ? "Login" : "Register"}</h2>

        {error && <p className="login-error">{error}</p>}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="login-btn" onClick={handleSubmit} disabled={loading}>
          {loading ? "Please wait..." : isLogin ? "Login" : "Register"}
        </button>

        <div className="login-divider">or</div>

        <button className="google-btn" onClick={handleGoogle}>
          Sign in with Google
        </button>

        <p className="login-toggle">
          {isLogin ? "Account nahi hai? " : "Pehle se account hai? "}
          <span onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "Register karo" : "Login karo"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;