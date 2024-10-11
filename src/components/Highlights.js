import Card from "./Card.js";
import { Link } from "react-router-dom";

const MOCKDATA = [
    {
        title: "Greek Salad",
        price: "$12.99",
        image: "greek salad.jpg",
        description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    },
    {
        title: "Bruschetta",
        price: "$8.99",
        image: "bruchetta.svg",
        description: "Our Bruschetta is made from homemade grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Topped with fresh vegetables.",
    },
    {
        title: "Lemon Desert",
        price: "$7.99",
        image: "lemon dessert.jpg",
        description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    },
];

function Highlights() {

    return (
        <div id="Menu-section" className="highlights container">
            <h2>This Week's Specials!</h2>
            <Link to="/Menu"><button className="button">Online Menu</button></Link>
            <div className="cards-holder">
                <Card data={MOCKDATA} />
            </div>
        </div>
    );
}

export default Highlights;