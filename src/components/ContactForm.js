import { useEffect, useState } from "react";
const myregex = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
function ContactForm({ contact, setContact, setScreen }) {
    const [errors, setErrors] = useState({
        name: "",
        email: "",
        phone: "",
    })

    useEffect(() => {
        setErrors({
            name: "",
            email: "",
            phone: "",
        })
        const newErrors = {};
        if (contact.email.length > 0 && !myregex.test(contact.email)) {
            newErrors.email = "Please enter a valid email";
        } else {
            newErrors.email = "";
            console.log("test");
        }
        if (contact.phone.length > 0 && contact.phone.length < 10) {
            newErrors.phone = "Phone number must be 10 digit";
        }
        setErrors(newErrors);
    }, [contact])

    const verifyInput = () => {
        const newErrors = {...errors};
        if (contact.name === "") {
            newErrors.name = "Please enter a name";
            newErrors.error = true;
        }
        if (contact.email === "") {
            newErrors.email = "Please enter an email";
            newErrors.error = true;
        }
        setErrors(newErrors);
        return newErrors.error;
    }

    const handleCheck = () => {
        setContact({...contact, reminder: !contact.reminder});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const verify = verifyInput();
        if (!verify && !errors.name && !errors.email && !errors.phone) {
            setScreen(3);
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    const handleChange = (e) => {
        const newContact = { ...contact };
        newContact[e.target.id] = e.target.value;
        setContact(newContact);
    }

    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <h2>Contact Info</h2>
                <label htmlFor="name" className="required">Name:</label>
                <input type="text" id="name" className="contact" value={contact.name} onChange={handleChange} />
                <p className="error">{errors.name}</p>
                <br />
                <label htmlFor="email" className="required">Email:</label>
                <input type="email" id="email" className="contact" value={contact.email} onChange={handleChange} />
                <p className="error">{errors.email}</p>
                <br />
                <label htmlFor="phone">Phone:</label>
                <input type="tel" id="phone" className="contact" value={contact.phone} onChange={handleChange} />
                <p className="error">{errors.phone}</p>
                <br />
                <input type="checkbox" id="reminder" checked={contact.reminder} onChange={handleCheck}></input>
                <label htmlFor="reminder">Please send me a reminder 2 hours before my reservation</label>
                <br />
                <div className="submit-container">
                    <button className="button" onClick={() => setScreen(1)}>Back</button>
                    <input type="submit" className="submit" value="Next =>" />
                </div>
                <p className="screen-show">1--------<strong>2</strong>--------3</p>
            </form>
        </div>
    );
};

export default ContactForm;