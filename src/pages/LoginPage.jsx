import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/LoginPage.css";

const ADMIN_PIN = "123456";

const KEYPAD = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  ["", 0, "←"],
];

const LoginPage = () => {
  const [pin, setPin] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleKeypad = (key) => {
    if (key === "←") {
      setPin(pin.slice(0, -1));
    } else if (key !== "" && pin.length < 6) {
      setPin(pin + key);
    }
  };

  React.useEffect(() => {
    if (pin.length === 6) {
      setTimeout(() => {
        if (pin === ADMIN_PIN) {
          localStorage.setItem("isAdmin", "true");
          navigate("/");
        } else {
          setError("Invalid PIN. Please try again.");
          setPin("");
        }
      }, 200);
    }
  }, [pin, navigate]);

  return (
    <div className="login-bg">
      <div className="login-overlay">
        <div className="login-content">
          <img src="/logo192.png" alt="logo" className="login-logo" />
          <h1 className="login-title">Izakaya POS</h1>
          <div className="login-subtitle">
            กรุณาใส่รหัส PIN เพื่อเข้าสู่ระบบ
          </div>
          <div className="pin-circles">
            {[...Array(6)].map((_, i) => (
              <span
                key={i}
                className={`circle${
                  i < pin.length ? " filled" : ""
                }`}
              ></span>
            ))}
          </div>
          {error && <div className="error-message">{error}</div>}
          <div className="keypad">
            {KEYPAD.map((row, i) => (
              <div className="keypad-row" key={i}>
                {row.map((key, j) => (
                  <button
                    key={j}
                    className="keypad-btn"
                    onClick={() => handleKeypad(key)}
                    disabled={
                      key === "" || (key === "←" && pin.length === 0)
                    }
                  >
                    {key}
                  </button>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;