import { useState, useRef, useEffect } from "react";
import Logo from "../Logo";
import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const drawerRef = useRef(null);
  const closeDrawer = (e) => {
    e.preventDefault();
    setIsOpen(false);
  };

  useEffect(() => {
    const closeDrawerOnOutside = (e) => {
      if (drawerRef.current && drawerRef.current.contains(e.target)) {
        return;
      }
      setIsOpen(false);
    };
    document.addEventListener("mousedown", closeDrawerOnOutside);
    return () =>
      document.removeEventListener("mousedown", closeDrawerOnOutside);
  }, []);
  return (
    <nav>
      <Logo />
      <div ref={drawerRef} className={`links ${isOpen && "active"}`}>
        <a href="" onClick={closeDrawer}>
          Home
        </a>
        <a href="" onClick={closeDrawer}>
          Find a doctor
        </a>
        <a href="" onClick={closeDrawer}>
          Apps
        </a>
        <a href="" onClick={closeDrawer}>
          Testimonials
        </a>
        <a href="" onClick={closeDrawer}>
          About us
        </a>
      </div>
      <div className="mobile-icon" onClick={() => setIsOpen(!isOpen)}>
        🍔
      </div>
    </nav>
  );
}
