// import { useEffect, useState } from 'react';
// // import { nanoid } from 'nanoid';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import ContactForm from './ContactForm/ContactForm';
// import ContactsList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';
import Container from './shared/Container/Container';

const App = () => {
  // const [contacts, setContacts] = useState(() => JSON.parse(localStorage.getItem('contacts')) || []);
  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  // const createContact = ({ name, number }) => {
  //   const newContact = {
  //     id: nanoid(),
  //     name,
  //     number,
  //   };
  //
  //   const isExist = contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase());
  //   if (isExist) {
  //     toast.warn(`${name} is already in contacts.`);
  //     return false;
  //   }
  //
  //   setContacts(prevState => {
  //     return [newContact, ...prevState];
  //   });
  // };

  // const handleFilterChange = e => {
  //   const { value } = e.target;
  //   setFilter(value);
  // };

  // const getFilteredContacts = () => {
  //   return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
  // };
  //
  // const handleDelete = contactId => {
  //   setContacts(prevState => prevState.filter(({ id }) => id !== contactId));
  // };
  //
  // const filteredContacts = getFilteredContacts();

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"

      />

      <h2>Contacts</h2>
      <Filter />
      {/*<ContactsList />*/}
    </Container>
  );
};

export default App;
