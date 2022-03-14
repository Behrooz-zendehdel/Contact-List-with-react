import './ContactList.css'
import { Link } from 'react-router-dom';
import Contact from './Contact/Contact';
const ContactList = ({ contacts, onDelete }) => {

    return (
        <section className='listWrapper'>
            <div className='contactList'>

                <div className='listHeader' >
                    <h2>contacts</h2>
                    <Link to="/add">
                        <button className='btnlink'>add</button>
                    </Link>
                </div>
                {
                    contacts.map((contact) => {
                        // const { name, email, id } = contact;
                        return (
                            <Contact contact={contact} onDelete={onDelete} />
                        )
                    })
                }
            </div>

        </section>
    );
}

export default ContactList;