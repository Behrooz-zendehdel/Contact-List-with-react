import { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import "./App.css";
import AddContact from "./components/AddContact/AddContact";
import ContactList from "./components/ContactList/ContactList";

function App() {
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    setContacts([
      ...contacts,
      { id: Math.ceil(Math.random() * 100), ...contact },
    ]);
  };
  const deleteContactHandler = (id) => {
    // console.log('clicked',id)
    const filteredContacts = contacts.filter((c) => c.id !== id);
    setContacts(filteredContacts);
  };
  useEffect(() => {
    const saveContacts = JSON.parse(localStorage.getItem("contacts"));
    if (saveContacts) setContacts(saveContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <main className="App">
      <h1>Contact App</h1>

      <Switch>
        <Route
          path="/add"
          render={(props) => (
            <AddContact addContactHandler={addContactHandler} {...props} />
          )}
        />
        <Route
          path="/"
          render={() => (
            <ContactList contacts={contacts} onDelete={deleteContactHandler} />
          )}
        />
      </Switch>

      {/* <AddContact addContactHandler={addContactHandler} />

      <ContactList contacts={contacts} onDelete={deleteContactHandler} /> */}
    </main>
  );
}

export default App;
