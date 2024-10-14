import Header from '../components/Header';
import Footer from '../components/Footer';
import BookingForm from '../components/BookingForm';
import ContactForm from '../components/ContactForm';
import Confirmation from '../components/Confirmation';
import "../styles/booking.css"
import { useState } from "react";

function Reservations() {
    const getDate = () => {
        const newDate = new Date();
        const dateString = newDate.getFullYear() + "-" + (newDate.getMonth() + 1).toString().padStart(2,"0") + "-" + newDate.getDate().toString().padStart(2,"0");
        return dateString;
    }

    const [booking, setBooking] = useState({
        date: getDate(),
        time: "",
        guests: 2,
        seating: "Indoors",
        occasion: "None",
        comments: "",
    });
    const [contact, setContact] = useState({
        name: "",
        email: "",
        phone: "",
        reminder: false,
    });
    const [screen, setScreen] = useState(1);

    return (
        <>
            <Header />
            {screen === 1 && (<BookingForm booking={booking} setBooking={setBooking} setScreen={setScreen} />)}
            {screen === 2 && (<ContactForm contact={contact} setContact={setContact} setScreen={setScreen} />)}
            {screen === 3 && (<Confirmation booking={booking} contact={contact} setScreen={setScreen} />)}
            <Footer />
        </>
    );
}

export default Reservations;