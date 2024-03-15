import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [] },
  reducers: {
    createContact: (state, { payload }) => {
      state.contacts.push(payload);
      console.log(state);
    },
    deleteContact: (state, { payload }) => state.contacts.filter(({ id }) => id !== payload),
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { createContact, deleteContact } = contactsSlice.actions;
