import { useEffect, useState } from 'react';
import './App.css';
import AddContact from './components/AddContact/AddContact';
import ContactList from './components/ContactList/ContactList';

function App() {
  const [contacts, setContacts] = useState([]);


  const addContactHandler = (contact) => {

    setContacts([...contacts, { id: Math.ceil(Math.random() * 100), ...contact }]);
  }
  const deleteContactHandler = (id) => {
    // console.log('clicked',id)
    const filteredContacts = contacts.filter((c) => c.id !== id)
    setContacts(filteredContacts)
  }
  useEffect(() => {
    const saveContacts = JSON.parse(localStorage.getItem('contacts'));
    if (saveContacts) setContacts(saveContacts);
  }, [])

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts])


  return (
    <main className="App">
      <h1>Contact App</h1>
      <section>
        <AddContact addContactHandler={addContactHandler} />
      </section>
      <section>
        <ContactList contacts={contacts} onDelete={deleteContactHandler} />
      </section>
    </main>
  );
}

export default App;
