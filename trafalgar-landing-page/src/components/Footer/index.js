import "./Footer.css";
import Logo from "../Logo";
export default function Footer() {
  return (
    <footer>
      <div className="flex-column logo-footer-column">
        <Logo />
        <p>
          Trafalgar provides progressive, and affordable healthcare, accessible
          on mobile and online for everyone
        </p>
        <span>©Trafalgar PTY LTD 2020. All rights reserved</span>
      </div>
      <div className="flex-column">
        <h3>Company</h3>
        <a href="#">About</a>
        <a href="#">Testimonials</a>
        <a href="#">Find a doctor</a>
        <a href="#">Apps</a>
      </div>
      <div className="flex-column">
        <h3>Region</h3>
        <a href="#">Indonesia</a>
        <a href="#">Singapore</a>
        <a href="#">Hongkong</a>
        <a href="#">Canada</a>
      </div>
      <div className="flex-column">
        <h3>Help</h3>
        <a href="#">Help center</a>
        <a href="#">Conatact Support</a>
        <a href="#">Instructions</a>
        <a href="#">How it works</a>
      </div>
    </footer>
  );
}
