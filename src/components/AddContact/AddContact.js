import { useState } from "react";
import './AddContact.css'
const AddContact = ({ addContactHandler, history }) => {
    const [contact, setContact] = useState({ name: "", email: "" });

    const changeHandler = (e) => {
        setContact({ ...contact, [e.target.name]: e.target.value });
    };

    const submitForm = (e) => {
        if (!contact.name || !contact.email) {
            alert("all fildes are mandatory");
            return;
        }
        e.preventDefault();
        addContactHandler(contact);
        setContact({ name: "", email: "" });
        history.push('/')
    };

    return (
        <form onSubmit={submitForm}>
            <div className="formControl">
                <label>name</label>
                <input
                    type="text"
                    name="name"
                    value={contact.name}
                    onChange={changeHandler}
                />
            </div>
            <div className="formControl">
                <label>email</label>
                <input
                    type="text"
                    name="email"
                    value={contact.email}
                    onChange={changeHandler}
                />
            </div>
            <button type="submit">AddContact</button>
        </form>
    );
};

export default AddContact;
