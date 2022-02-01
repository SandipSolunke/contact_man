import React, { useState, useEffect } from "react";
import Header from "./Header";
import AddContacts from "./AddContacts";
import ContactList from "./ContactList";
import { v4 as uuid } from 'uuid';

function App() {
  const LOCAL_STORAGE_KEY = "conctacts";
  const [contacts, newstate] = useState([]);

  const Update_contact = (contact) => {
    newstate([...contacts, { id: uuid(), ...contact }])
  }

  const removeContact = (id) => {
    const newConctactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    newstate(newConctactList);
  }

  useEffect(() => {
    const GetConacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY, JSON));
    newstate(GetConacts);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div>
      <Header />
      <AddContacts newcontact={Update_contact} />
      <div className="ui divider" style={{borderTop:"2px dashed black"}}></div>
      <ContactList contacts={contacts} getContactId={removeContact} />
    </div>
  );
}

export default App;
