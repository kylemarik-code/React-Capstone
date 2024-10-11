import Blurbs from "./Blurbs.js"

const MOCKDATA = [
    {
        name: "Jeff H.",
        rating: 5,
        image: "review-2.jpg",
        comment: "The food was great! You have to try the greek salad",
    },
    {
        name: "Monica P.",
        rating: 4,
        image: "review-1.jpeg",
        comment: "It was awesome getting to meet Mario in the kitchen! Thanks for the grub",
    },
    {
        name: "Khalid R.",
        rating: 4,
        image: "review-3.jfif",
        comment: "Chill atmosphere, decent food, would recommend",
    },
];
function Testimonials() {
    return (
        <div className="testimonials container">
            <h2>Testimonials</h2>
            <div className="testimonials-container">
                <Blurbs data={MOCKDATA} />
            </div>
        </div>
    );
}

export default Testimonials;