import { Link } from "react-router-dom";
import { handleClick } from "../utils/handleClick";
function Footer() {

    return (
        <footer className="container">
            <article>
                <section>
                    <img className="footerlogo" src={require("../images/secondarylogo.png")} alt="Company Logo" />
                </section>
                <section>
                    <h6>Navigation:</h6>
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><a href="/#About" onClick={handleClick("About")}>About</a></li>
                            <li><a href="/#Menu" onClick={handleClick("Menu")}>Menu</a></li>
                            <li><Link to="/reservations">Reservations</Link></li>
                            <li><Link to="/Order">Order Online</Link></li>
                            <li><Link to="/Login">Login</Link></li>
                        </ul>
                    </nav>
                </section>
                <section>
                    <h6>Contact Us:</h6>
                    <ul>
                        <li>3000 Faker Ln<br />Chicago, IL 00000</li>
                        <li>000-000-0000</li>
                        <li>littlelemon@mail.net</li>
                    </ul>
                </section>
                <section>
                    <h6>Socials:</h6>
                    <ul>
                        <li><a href="https://www.meta.com">Facebook</a></li>
                        <li><a href="https://www.instagram.com">Instagram</a></li>
                        <li><a href="https://www.twitter.com">Twitter</a></li>
                    </ul>
                </section>
            </article>
        </footer>
    );
}

export default Footer;