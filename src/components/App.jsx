import { useState, useEffect } from 'react';
import { Filter } from './Filter/Filter';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';


export const App = () => {
  const[contacts, setContacts] = useState(
    () => JSON.parse(window.localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');


 const handleChangeFilter = event => {
    setFilter(()=>event.target.value);
  };

const  deleteContact = id =>{
setContacts(prevState => prevState.filter(contact => contact.id !== id));
setFilter('');
    };

const  addNewContact = (name, number, id) => {
    if (
      contacts.find(
        contact => contact.name.toLocaleLowerCase() === name.toLocaleLowerCase()
      )
    ) {
      alert('This number is alredy in contacts');
      return;
    }
           setContacts(state =>[...state, { id, name, number }]);        
  };

const  filterContacts = () => {
    return contacts.filter(contact => {
      return contact.name.toLowerCase()
        .includes(filter.toLowerCase());
    });
  };
  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);
  
      return (
      <div
        style={{
          width: '400px',
          margin: '1rem',
          marginBottom: '15px',
          padding: '10px',
          borderRadius: '10px',
          textAlign: 'center',
          boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.1)',
        }}
      >
        <ContactForm addNewContact={addNewContact} />
        <Filter filter={filter} onChange={handleChangeFilter} />
        <ContactList
          onDelete={deleteContact}
          contacts={filterContacts()}
        />
      </div>
    );
  }

