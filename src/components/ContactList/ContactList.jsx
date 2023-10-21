import styles from './ContactList.module.css'
import { RiDeleteBin6Line} from "react-icons/ri";


export const ContactItem = ({ contact, onDelete }) => {
  return (
    <li className={styles.contactItem} >
      {contact.name}: {contact.number} <button className={styles.deleteBtn} onClick={() => onDelete(contact.id)}><RiDeleteBin6Line/></button>
    </li>
  );
};

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <>
    <h2>Contacts</h2>
    <ul className={styles.contactList} >
      {contacts.map(contact => (
        <ContactItem key={contact.id} contact={contact} onDelete={onDelete} />
      ))}
    </ul>
    </>
  );
};
