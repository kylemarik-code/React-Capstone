import { Link } from "react-router-dom";

function Hero() {
    return (
        <div className="hero container">
            <h1 style={{ color: "#F4CE14" }}>Little Lemon</h1>
            <h2 style={{ color: "white "}}>Chicago</h2>
            <p style={{ color: "white " }}>
                We are a family owned
                Mediterranean restaurant,
                focused on traditional recipes
                served with a modern twist.
            </p>
            <img className="hero-image" src={require("../images/restauranfood.jpg")} alt="Restaurant food"></img>
            <Link to="/reservations"><button className="button">Reserve a table</button></Link>
        </div>
    );
}

export default Hero;