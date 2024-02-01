import { ContactList } from "./ContactList/ContactList";
import { ContactForm } from "./ContactForm/ContactForm";
import { nanoid } from "nanoid";
import { Filter } from "./Filter/Filter";
import Notiflix from "notiflix";
import { NoContactsMessage } from "./NoContactMessage/NoContactMessage";
import { useEffect, useState } from "react";

// const initialUsers = [
//   { id: nanoid(), name: "Jacob", number: 111 - 24 - 22 },
//   { id: nanoid(), name: "Mango", number: 892 - 78 - 23 },
//   { id: nanoid(), name: "Elena", number: 788 - 17 - 34 },
//   { id: nanoid(), name: "Orlando", number: 876 - 67 - 45 },
//   { id: nanoid(), name: "Gimli", number: 457 - 76 - 45 },
// ];

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState("");

  const addContact = (data) => {
    const existingContact = contacts.find(
      (contact) => contact.name.toLowerCase() === data.name.toLowerCase()
    );

    if (existingContact) {
      Notiflix.Notify.warning(`${data.name} is already in the contacts.`);
      return;
    }
    const newContact = {
      id: nanoid(),
      name: data.name,
      number: data.number,
    };

    setContacts([...contacts, newContact]);

    Notiflix.Notify.success(
      `${newContact.name} has been successfully added to the contact book.`
    );
  };

  useEffect(() => {
    const savedContacts = JSON.parse(localStorage.getItem("contacts")) || [];
    setContacts(savedContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const getVisibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const deleteContact = (contactID) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== contactID)
    );
    Notiflix.Notify.failure(`Contact has been deleted from your contacts`);
  };

  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        gap: 20,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontSize: 20,
        color: "#010101",
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <Filter value={filter} onChange={setFilter} />
      <h2>Contacts</h2>
      {getVisibleContacts.length === 0 ? (
        <NoContactsMessage />
      ) : (
        <ContactList contacts={getVisibleContacts} onDelete={deleteContact} />
      )}
    </div>
  );
};

// export class App extends Component {
//   state = {
//     contacts: [],
//     filter: "",
//   };

//   componentDidUpdate(prevProps, prevState) {
//     if (this.state.contacts !== prevState.contacts) {
//       localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
//     }
//   }
//   componentDidMount() {
//     const contacts = localStorage.getItem("contacts");
//     const parsedContacts = JSON.parse(contacts);

//     if (parsedContacts) {
//       this.setState({ contacts: parsedContacts });
//     }
//   }

//   formSubmitHandler = (data) => {
//     const existingContact = this.state.contacts.find(
//       (contact) =>
//         contact.name.toLowerCase().trim() === data.name.toLowerCase().trim()
//     );

//     if (existingContact) {
//       Notiflix.Notify.warning(`${data.name} is already in the contacts.`);
//       return;
//     }

//     this.addContacts(data);

//     Notiflix.Notify.success(
//       `${data.name} has been successfully added to the contact book.`
//     );
//   };

//   addContacts = (data) => {
//     const contact = {
//       id: nanoid(),
//       name: data.name,
//       number: data.number,
//     };

//     this.setState((prevState) => ({
//       contacts: [contact, ...prevState.contacts],
//     }));
//   };

//   changeFilter = (event) => {
//     this.setState({ filter: event.currentTarget.value });
//   };
//   getVisibleContacts = () => {
//     const normalizeFilter = this.state.filter.toLowerCase();

//     return this.state.contacts.filter((contact) =>
//       contact.name.toLowerCase().includes(normalizeFilter)
//     );
//   };

//   deleteContact = (contactID) => {
//     this.setState((prevState) => ({
//       contacts: prevState.contacts.filter(
//         (contact) => contact.id !== contactID
//       ),
//     }));
//     Notiflix.Notify.failure(`Contact has been deleted from your contacts`);
//   };

//   render() {
//     const visibleContacts = this.getVisibleContacts();

//     return (
//       <div
//         style={{
//           height: "100%",
//           display: "flex",
//           gap: 20,
//           flexDirection: "column",
//           justifyContent: "center",
//           alignItems: "center",
//           fontSize: 20,
//           color: "#010101",
//         }}
//       >
//         <h1>Phonebook</h1>
//         <ContactForm onSubmit={this.formSubmitHandler} />
//         <Filter filter={this.state.filter} onChange={this.changeFilter} />
//         <h2>Contacts</h2>
//         {visibleContacts.length === 0 ? (
//           <NoContactsMessage />
//         ) : (
//           <ContactList
//             contacts={visibleContacts}
//             onDelete={this.deleteContact}
//           />
//         )}
//       </div>
//     );
//   }
// }
