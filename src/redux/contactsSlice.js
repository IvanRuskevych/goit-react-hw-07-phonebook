import { createSlice, nanoid } from '@reduxjs/toolkit';
import { addContacts, fetchContacts } from './operations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: [], isLoading: false, error: null },

  extraReducers: {
    [fetchContacts.pending](state) {
      state.isLoading = true;
      // state.error = null;
      // state.items = [];
    },

    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
      console.log(action.payload);
    },

    [fetchContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    [addContacts.pending]({ isLoading }) {
      isLoading = true;
    },

    [addContacts.fulfilled](state, { payload }) {
      state.items = [...state.items, payload];
      state.isLoading = false;
      state.error = null;
      // return {
      //   ...state,
      //   items: [...state.items, payload],
      //   isLoading: false,
      //   error: null,
      // };
    },

    [addContacts.rejected]({ isLoading, error }, { payload }) {
      isLoading = false;
      error = payload;
    },
  },

  // reducers: {
  //   addContact: {
  //     reducer(state, { payload }) {
  //       return [...state, payload];
  //     },
  //     prepare(name, number) {
  //       return {
  //         payload: { id: nanoid(4), name, number },
  //       };
  //     },
  //   },

  //   deleteContact(state, { payload }) {
  //     return state.filter(contact => contact.id !== payload);
  //   },
  // },
});

// export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
