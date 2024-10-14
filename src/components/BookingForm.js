import { useState, useEffect } from 'react';
import { fetchAPI } from '../utils/fakeAPI';
const OPENTIMES = ["17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00", "22:30", "23:00", "23:30"];
const newDate = new Date();
const dateString = newDate.getFullYear() + "-" + (newDate.getMonth() + 1).toString().padStart(2, "0") + "-" + newDate.getDate().toString().padStart(2, "0");
function BookingForm({ booking, setBooking, setScreen }) {
    const [available, setAvailable] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({
        date: "",
        time: "",
        guests: "",
    });

    useEffect(() => {
        setLoading(true);
        const updateTimes = async () => {
            try {
                const newAvailable = await fetchAPI(booking.date);
                await setAvailable(newAvailable);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        }
        updateTimes();
    }, [booking.date]);

    useEffect(() => {
        setErrors({
            date: "",
            time: "",
            guests: "",
        })
        const newError = {};
        if (Date.parse(booking.date) < Date.parse(dateString)) {
            newError.date = "Choose a date in the future";
        } else if (booking.date === "") {
            newError.date = "Choose a date";
        }
        if (booking.guests < 0) {
            newError.guests = "Must be 1 or greater";
        } else if (booking.guests > 10) {
            newError.guests = "Must be 10 or fewer";
        } else if (booking.guests === "") {
            newError.guests = "Please select number of guests";
        }
        setErrors(newError);
    }, [booking])

    const handleSubmit = (e) => {
        e.preventDefault();
        if (booking.time === "") {
            setErrors({ ...errors, time: "Please select a time" });
        } else if (!errors.date && !errors.guests) {
            setScreen(2);
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    const handleChange = (e) => {
        const newBooking = { ...booking };
        newBooking[e.target.name] = e.target.value;
        if (e.target.name === 'date') {
            newBooking['time'] = "";
        }
        setBooking(newBooking);
    }

    const TimeSelectors = ({ possible }) => {
        const newAvailable = available ? [...available] : [];
        const onOffer = possible.map((item, index) => {
            return (
                <button id={item} name="time" className={booking.time === item ? "time-button chosen" : "time-button"} disabled={!newAvailable.includes(item)} value={item} onClick={handleChange}>{item}</button>
            );
        });

        return onOffer;
    }

    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <h2>Reserve a Table</h2>
                <label htmlFor="date" className="required">Select a Date:</label>
                <input type="date" id="date" name="date" value={booking.date} onChange={handleChange} />
                <p className="error">{errors.date}</p>
                <br />
                <label className="required">Select a Time:</label>
                <p className="error">{errors.time}</p>
                <br />
                <div className="time-container">
                    {loading && (<p>Loading...</p>) }
                    {!loading && (<TimeSelectors possible={OPENTIMES} />)}
                </div>
                <br />
                <label htmlFor="guests" className="required">Number of Guests:</label>
                <p className="error">{errors.guests}</p>
                <br />
                <div className="guest-container">
                    <input type="range" name="guests" className="range" id="guests" min="1" max="10" value={booking.guests} onChange={handleChange} />
                    <input id="guests2" name="guests" type="number" min="1" max="10" value={booking.guests} onChange={handleChange}></input>
                    <p>While groups of 10 are more than welcome, arrangements must be made by phone</p>
                </div>
                <br />
                <label>Seating preference:</label>
                <div className="radio-container">
                <input type="radio" className="radio-btn" id="Indoors" name="seating" value="Indoors" checked={booking.seating === "Indoors"} onChange={handleChange} />
                <label htmlFor="Indoors" className="radio">Indoors</label>
                <input type="radio" className="radio-btn" id="Patio" name="seating" value="Patio" checked={booking.seating === "Patio"} onChange={handleChange} />
                    <label htmlFor="Patio" className="radio">Patio</label>
                </div>
                <br />
                <label htmlFor="occassion-pick">Occasion:</label>
                <select id="occasion" name="occasion" value={booking.occasion} onChange={handleChange}>
                    <option>None</option>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                    <option>Graduation</option>
                </select>
                <br />
                <label htmlFor="comments">Additional requests:</label>
                <br />
                <textarea id="comments" name="comments" value={booking.comments} onChange={handleChange } />
                <br />
                <div className="submit-container">
                    <input type="submit" className="submit" value="Next =>" />
                </div>
                <p className="screen-show"><strong>1</strong>--------2--------3</p>
            </form>
        </div>
    );
}

export default BookingForm;