import { useNavigate } from "react-router-dom";
import { submitAPI } from '../utils/fakeAPI';
import { useState } from "react";
import Modal from "../components/Modal.js";
function Confirmation({ booking, contact, setScreen }) {
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const submission = submitAPI({ ...booking, ...contact });
        if (submission) {
            setSuccess(true);
        }
    }

    const onClose = () => {
        navigate("/")
    }

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit }>
                <h2>Confirmation</h2>
                <h4>Thank you!</h4>
                <p>You're not done quite yet - please click below to confirm the following reservation:</p>
                <div className="insetter">
                <p>Date: {booking.date}</p>
                <p>Time: {booking.time}</p>
                <p>Number of guests: {booking.guests}</p>
                <p>Seating preference: {booking.seating}</p>
                <p>Occasion: {booking.occasion}</p>
                <p>Name: {contact.name}</p>
                <p>Email: {contact.email}</p>
                <p>Phone: {contact.phone}</p>
                <p>Special requests:</p>
                    {booking.comments ? (<p className="last">{booking.comments}</p>) : (<p className="last">None</p>)}
                </div>
                <div className="submit-container">
                    <button className="button" onClick={() => setScreen(1)}>Edit Details</button>
                    <button className="button" onClick={() => navigate("/") }>Cancel</button>
                    <input type="submit" className="submit" value="Confirm" />
                </div>
                <p className="screen-show">1--------2--------<strong>3</strong></p>
            </form>
            {success && (
                <Modal action={onClose } btnName="Home">
                    <h4>Reservation confirmed!</h4>
                    <p>Thank you so much for your support!</p>
                    <p>We look forward to seeing you soon!</p>
                </Modal>)
            }
        </div>
    )
}

export default Confirmation;