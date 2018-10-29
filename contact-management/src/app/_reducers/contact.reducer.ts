import { Contact } from '../_models/contact';
import { LocalStorage } from '@ngx-pwa/local-storage';

export const contacts = (state: Contact[] = [], action) => {
  switch (action.type) {
      case 'GET_CONTACTS':
          return action.payload;
      case 'ADD_CONTACTS':
          const payload: Contact = action.payload;
          if (!state) {
            const temp  = [{emailAddress: payload.emailAddress, firstName: payload.firstName, lastName: payload.lastName}];
            return temp;
          }

          return [...state, payload];

      case 'UPDATE_CONTACTS':
           return state.map(contacts => {
               return contacts.emailAddress === action.payload.emailAddress ? Object.assign({}, contacts, action.payload) : contacts;
           });
      case 'DELETE_CONTACT':
           return state.filter(contacts => {
               return contacts.emailAddress !== action.payload.emailAddress;
           });
      default:
          return state;
  }
};

