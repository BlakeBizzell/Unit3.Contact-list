import { useState } from 'react'
import './App.css'
import ContactList from './components/ContactList'


export default function App() {
  // const [contacts, setContacts] = useState(dummyContacts)
  // Console.log("Contacts: ", contacts)
  return (
    <>
      <ContactList/>
    </>
  );
}

