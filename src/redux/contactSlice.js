import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

export const contactAdapter = createEntityAdapter();
const initialState = contactAdapter.getInitialState();

export const contactSelector = contactAdapter.getSelectors(state=>state.contact)

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    addContact:contactAdapter.addOne,
    delContact:contactAdapter.removeOne,
    delAllContact:contactAdapter.removeAll,
    upContact:contactAdapter.updateOne,
  },
});

export const { addContact,delContact,delAllContact,upContact } = contactSlice.actions;
export default contactSlice.reducer;


