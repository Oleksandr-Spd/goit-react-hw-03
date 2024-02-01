import { ContactItem } from "../ContactITem/ContactItem";
import { ContactsList } from "./ContactList.styled";

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <ContactsList>
      {contacts.map((contact) => (
        <ContactItem key={contact.id} contact={contact} onDelete={onDelete} />
      ))}
    </ContactsList>
  );
};
