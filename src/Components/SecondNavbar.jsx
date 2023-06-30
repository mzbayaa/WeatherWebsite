// import { useRef } from "react";
import "./SecondNavbar.css";

// function Navbar() {
//   const navRef = useRef();
//   const showNavbar = () => {
//     navRef.current.classList.toggle("responsive_nav");
//   };

function SecondNavbar() {
  return (
    <header className="second-header">
      <div className="second-div">
        {/* <nav ref={navRef}> */}
        <nav className="second-nav">
          <a href="/today">Today</a>
          <a href="/hourly">Hourly</a>
          <a href="/tomorrow">Tomorrow</a>
          <a href="/weekly">Weekly</a>
          <a href="/monthly">Monthly</a>
        </nav>
      </div>
    </header>
  );
}
// }

export default SecondNavbar;
