import React, { useReducer, Children } from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER
} from '../types';

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'Bobby Java',
        email: 'bobby@gmail.com',
        phone: '111-111-111',
        type: 'personal'
      },
      {
        id: 2,
        name: 'Elvon Bobo',
        email: 'elvon@gmail.com',
        phone: '222-111-222',
        type: 'personal'
      },
      {
        id: 3,
        name: 'Static Dev',
        email: 'static@gmail.com',
        phone: '333-111-333',
        type: 'professional'
      }
    ]
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Add Contact
  const addContact = contact => {
    contact.id = uuid.v4();
    dispatch({ type: ADD_CONTACT, payload: contact });
  };

  // Delete Contact

  // Set Current Contact

  // Clear Current Contact

  // Update Contact

  // Filter Contacts

  // Clear FIlter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        addContact
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
