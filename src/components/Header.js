import CompanyLogo from "../images/Logo.svg";
import BurgerMenu from "../images/hamburger.svg";
import "../styles/header.css"
import { useRef, useEffect } from 'react';
import { Link } from "react-router-dom";
import { handleClick } from "../utils/handleClick";
 
function Header() {
    const barRef = useRef(null);
    const linkRef = useRef(null);
    const showMenu = () => {
        if (linkRef.current.classList.contains("show")) {
            linkRef.current.classList.remove("show");
        } else {
            linkRef.current.classList.add("show");
        }
    }

    useEffect(() => {
        let scrollPosition = window.scrollY;
        const handleScroll = () => {
            if (window.scrollY > scrollPosition && scrollPosition > 80 && window.innerWidth > 962) {
                barRef.current.style.transform = "translateY(-200px)";
            } else {
                barRef.current.style.transform = "translateY(0)";
            }
            scrollPosition = window.scrollY;
        };

        window.addEventListener('scroll', handleScroll);

        return function cleanup() {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (
        <header ref={barRef}>
            <img className="Logo" src={CompanyLogo} alt="Company Logo" height={60} />
            <nav>
                <ul ref={linkRef} className="navbar-links">
                    <li><Link to="/">Home</Link></li>
                    <li><a href="/#About" onClick={handleClick("About")}>About</a></li>
                    <li><a href="/#Menu" onClick={handleClick("Menu")}>Menu</a></li>
                    <li><Link to="/reservations">Reservations</Link></li>
                    <li><Link to="/Order">Order Online</Link></li>
                    <li><Link to="/Login">Login</Link></li>
                </ul>
                <button className="hamburger" onClick={showMenu}>
                    <img className="hamburger-icon" src={BurgerMenu} alt="Hamburger menu icon" height={30} width={30} />
                </button>
            </nav>
        </header>
    );
}

export default Header;