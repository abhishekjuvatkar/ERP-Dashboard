import { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import { fullGoogleLogout } from "./utils/googleLogout";
import ExternalRedirect from "./components/ExternalRedirect";

function PlaceholderPage({ title }) {
  return (
    <div style={{ padding: "32px", fontSize: "24px", fontWeight: 600 }}>
      {title}
    </div>
  );
}

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("id_token");

    if (token) {
      try {
        const decoded = jwtDecode(token);

        if (decoded.exp * 1000 > Date.now()) {
          setUser(decoded);
        } else {
          localStorage.removeItem("id_token");
        }
      } catch {
        localStorage.removeItem("id_token");
      }
    }
  }, []);

  function setSessionCookie(token) {
    document.cookie = `id_token=${token}; path=/; max-age=3600; SameSite=Lax`;
  }

  function clearSessionCookie() {
    document.cookie = `id_token=; path=/; max-age=0; SameSite=Lax`;
  }

  const handleLogin = (credential) => {
    setSessionCookie(credential);
    localStorage.setItem("id_token", credential);
    setUser(jwtDecode(credential));
  };

  const handleLogout = () => {
    clearSessionCookie();
    fullGoogleLogout();
    localStorage.removeItem("id_token");
    setUser(null);
  };

  if (!user) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <Routes>
      <Route path="/" element={<Home user={user} onLogout={handleLogout} />} />
      <Route path="/mmd" element={<PlaceholderPage title="MMD Module" />} />
      <Route
        path="/finance"
        element={<PlaceholderPage title="Finance Module" />}
      />
      <Route
        path="/inventory"
        element={<PlaceholderPage title="Inventory Module" />}
      />
      <Route
        path="/samarth"
        element={
          <ExternalRedirect to="https://iitdh.samarth.ac.in/index.php/site/login" />
        }
      />
      <Route
        path="/reports"
        element={<PlaceholderPage title="Reports Module" />}
      />
      <Route
        path="/cims"
        element={
          <ExternalRedirect to="https://cims.iitdh.ac.in/default/landingpage.html" />
        }
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
