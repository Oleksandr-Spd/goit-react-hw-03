import { nanoid } from "nanoid";
import css from "./ContactForm.module.css";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
// import InputMask from "react-input-mask";

const contactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Name must be at least 3 symb long")
    .max(50, "Too Long!")
    .required("This is a required field"),
  number: Yup.string().required("Required"),
});

export const ContactForm = ({ onAdd }) => {
  const handleSubmit = (values, actions) => {
    onAdd({ id: nanoid(), ...values });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      onSubmit={handleSubmit}
      validationSchema={contactSchema}
    >
      <Form className={css.form}>
        <label className={css.label}>
          Name
          <Field
            className={css.input}
            type="text"
            name="name"
            placeholder="Jacob Mercer"
            autoFocus
            pattern="^[A-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            required
          />
          <span></span>
        </label>
        <label className={css.label}>
          Number
          <Field
            className={css.input}
            type="tel"
            name="number"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
            placeholder="123-45-89"
            required
          >
            {/* {({ field }) => (
              <InputMask
                className={css.input}
                {...field}
                mask="999-99-99"
                placeholder="123-45-89"
              />
            )} */}
          </Field>
          <span></span>
        </label>
        <button className={css.btn} type="submit">
          Add contacts
        </button>
      </Form>
    </Formik>
  );
};

// export class ContactForm extends Component {
//   state = {
//     name: "",
//     number: "",
//   };

//   handleChange = (event) => {
//     const { name, value } = event.currentTarget;
//     this.setState({ [name]: value });
//   };

//   handleSubmit = (event) => {
//     event.preventDefault();

//     this.props.onSubmit(this.state);
//     this.reset();
//   };

//   reset = () => {
//     this.setState({ name: "", number: "" });
//   };

//   handleInput = (event, maskOptions) => {
//     this.getMask(event.target, maskOptions);
//     this.handleChange(event);
//   };

//   getMask = (element, maskOptions) => {
//     new IMask(element, maskOptions);
//   };

//   render() {
//     return (
//       <Form onSubmit={this.handleSubmit}>
//         <Label>
//           Name
//           <Input
//             type="text"
//             name="name"
//             placeholder="Jacob Mercer"
//             autoFocus
//             value={this.state.name}
//             onChange={this.handleChange}
//             pattern="^[A-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             required
//           />
//           <span className="validity"></span>
//         </Label>
//         <Label>
//           Number
//           <Input
//             type="tel"
//             name="number"
//             placeholder="123-45-89"
//             value={this.state.number}
//             onChange={this.handleChange}
//             pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
//             onInput={(event) => this.handleInput(event, { mask: "000-00-00" })}
//             required
//           />
//           <span className="validity"></span>
//         </Label>
//         <AddContact type="submit">Add contacts</AddContact>
//       </Form>
//     );
//   }
// }
