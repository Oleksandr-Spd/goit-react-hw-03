import { ContactItems, DeleteBtn } from "./ContactItem.styled";

export const ContactItem = ({ contact, onDelete }) => {
  return (
    <ContactItems>
      {contact.name}: {contact.number}{" "}
      <DeleteBtn type="button" onClick={() => onDelete(contact.id)}>
        Delete
      </DeleteBtn>
    </ContactItems>
  );
};
