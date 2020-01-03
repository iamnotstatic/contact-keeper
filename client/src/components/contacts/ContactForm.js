import React, { useState, useContext, useEffect } from 'react';
import ContactContext from '../../context/contact/contactContext';
import AlertContext from '../../context/alert/alertContext';

const ContactForm = () => {
  const contactContext = useContext(ContactContext);
  const alertContext = useContext(AlertContext);

  const { setAlert } = alertContext;
  const { addContact, updateContact, clearCurrent, current } = contactContext;

  useEffect(() => {
    if (current !== null) {
      setContact(current);
    } else {
      setContact({
        name: '',
        email: '',
        phone: '',
        type: 'personal'
      });
    }
    // eslint-disable-next-line
  }, [contactContext, current]);
  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'personal'
  });

  const { name, email, phone, type } = contact;

  const onChange = e =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (name === '' || email === '') {
      setAlert('Fields are required', 'danger');
    }
    if (current === null) {
      addContact(contact);
    } else {
      updateContact(contact);
    }

    clearAll();

    setContact({
      name: '',
      email: '',
      phone: '',
      type: 'personal'
    });
  };

  const clearAll = () => {
    clearCurrent();
  };
  return (
    <form onSubmit={onSubmit}>
      <h3 className="text-primary">
        {current ? 'Edit Contact' : 'Add Contact'}
      </h3>
      <input
        type="text"
        placeholder="name"
        name="name"
        value={name}
        onChange={onChange}
        required
      />
      <input
        type="email"
        placeholder="email"
        name="email"
        value={email}
        onChange={onChange}
        required
      />
      <input
        type="text"
        placeholder="phone"
        name="phone"
        value={phone}
        onChange={onChange}
      />
      <h3>Contact Type</h3>
      <input
        type="radio"
        name="type"
        value="personal"
        checked={type === 'personal'}
        onChange={onChange}
      />{' '}
      Personal{' '}
      <input
        type="radio"
        name="type"
        value="professional"
        checked={type === 'professional'}
        onChange={onChange}
      />
      Professional
      <div>
        <input
          type="submit"
          value={current ? 'Update Contact' : 'Add contact'}
          className="btn btn-primary btn-block"
        />
        {current && (
          <button className="btn btn-light btn-block" onClick={clearAll}>
            Clear
          </button>
        )}
      </div>
    </form>
  );
};

export default ContactForm;
