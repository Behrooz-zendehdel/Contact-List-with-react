import Contact from "../Contact/Contact";
import { Link } from "react-router-dom";
const ContactDetail = ({ location }) => {
    const { contact } = location.state;
    // console.log(props.location.state.contact)
    return (
        <div>
            <p>use name : {contact.name}</p>
            <p>use email : {contact.email}</p>
            <Link to="/">go to back contact list</Link>
        </div>

    );
}

export default ContactDetail;