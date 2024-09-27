import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "./AdminModal.module.css";
import users from "@/data/users";

const AdminModal = ({ onClose, isLoggedIn, setIsLoggedIn }) => {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true); // Track loading state
  const [showLogoutModal, setShowLogoutModal] = useState(false); // Track logout modal visibility

  useEffect(() => {
    // Check if user is already logged in from browser storage
    const loggedIn = localStorage.getItem("isLoggedIn");
    if (loggedIn === "true") {
      setIsLoggedIn(true);
    }
    setIsLoading(false); // Update loading state after checking login status
  }, []);

  const handleLogin = () => {
    const user = users.find(
      (user) => user.username === username && user.password === password
    );
    if (user) {
      setIsLoggedIn(true);
      localStorage.setItem("isLoggedIn", "true"); // Store login state in browser storage
      onClose(); // Close the modal after successful login
      router.push("/admin");
    } else {
      setError("Invalid username or password");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn"); // Remove login state from browser storage
    setUsername("");
    setPassword("");
    setError("");
    setShowLogoutModal(false); // Close the logout modal
    onClose(); // Close the modal after logout
    router.push("/"); // Redirect to home page after logout
  };

  const handleClose = () => {
    setUsername("");
    setPassword("");
    setError("");
    setShowLogoutModal(false); // Close the logout modal
    onClose(); // Close the modal
  };

  // Render loading state if we're still checking the login status
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className={styles.modalOverlay} onClick={handleClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        {!isLoggedIn ? (
          <div className="flex flex-col justify-center items-center space-y-4 text-center">
            <div className="flex-col flex form-group space-y-2 ">
              <label htmlFor="username">Username:</label>
              <input
                className="rounded h-[26px] w-[140px] border-solid border-gray-400 pl-2 focus:outline-green-600"
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="flex-col flex form-group space-y-2 ">
              <label htmlFor="password">Password:</label>
              <input
                className="rounded h-[26px] w-[140px] border-solid border-gray-400 pl-2 focus:outline-green-600"
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              className="bg-[#40a748] text-[14px] text-white border-none rounded-lg py-3 px-8 active:opacity-80"
              onClick={handleLogin}
            >
              Log in
            </button>
            {error && <p className="error-message">{error}</p>}
          </div>
        ) : (
          <div className="space-y-8 flex-col text-center ">
            <p>You will now leave admin</p>
            <button
              className="bg-[#40a748] text-[14px] text-white border-none rounded-lg py-3 px-8 active:opacity-80"
              onClick={handleLogout}
            >
              Log out{" "}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminModal;
