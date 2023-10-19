import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;

export const selectFilterValue = state => state.filter;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilterValue],
  (contacts, filter) => {
    const createContactsByfilter = () => {
      if (!filter) {
        return;
      }
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );
    };
    const filteredContacts = createContactsByfilter();
    return filteredContacts ?? contacts;
  }
);
