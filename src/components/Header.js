import CompanyLogo from "../images/Logo.svg";
import BurgerMenu from "../images/hamburger.svg";
import "../styles/core.css"
import { useRef } from 'react';
 
function Header() {
    const barRef = useRef(null);
    const linkRef = useRef(null);
    const showMenu = () => {
        console.log("test");
        if (linkRef.current.classList.contains("show")) {
            linkRef.current.classList.remove("show");
        } else {
            linkRef.current.classList.add("show");
        }
    }

    return (
        <header ref={barRef}>
            <img className="Logo" src={CompanyLogo} alt="Company Logo" height={60} />
            <nav>
                <ul ref={linkRef} className="navbar-links">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="./#About">About</a></li>
                    <li><a href="./#Menu">Menu</a></li>
                    <li><a href="./#Reservations">Reservations</a></li>
                    <li><a href="./#O rder">Order Online</a></li>
                    <li><a href="./#Login">Login</a></li>
                </ul>
                <button className="hamburger" onClick={showMenu}>
                    <img className="hamburger-icon" src={BurgerMenu} alt="Hamburger menu icon" height={30} width={30} />
                </button>
            </nav>
        </header>
    );
}

export default Header;