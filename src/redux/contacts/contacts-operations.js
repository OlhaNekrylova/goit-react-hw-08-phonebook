import { createAsyncThunk } from "@reduxjs/toolkit";

import * as api from "../../shared/services/auth";

export const fetchAllContacts = createAsyncThunk(
    "contacts/fetchAll",
    async(_, {rejectWithValue, getState}) => {
        try {
            const {auth} = getState();
            const data = await api.fetchContacts(auth.token);
            return data;
        }
        catch({response}) {
            return rejectWithValue(response.data);
        }
    }
);

export const fetchAddContact = createAsyncThunk(
    "contacts/addContact",
    async({name, number}, {rejectWithValue, getState}) => {
        try {
            const {auth} = getState();
            const result = await api.addContact({name, number}, auth.token);
            return result;
        }
        catch({response}) {
            return rejectWithValue(response.data);
        }
    },
    {
        condition: ({name}, {getState}) => {
            const {contacts} = getState();
            const isPresentContact = contacts.items.find(element => 
                element.name.toLowerCase() === name.toLowerCase()
            );
    
            if (isPresentContact) { 
                alert('Contact is already exist!')
                return false;
            }
        }
    }
);

export const fetchDeleteContact = createAsyncThunk(
    "contacts/deleteContact",
    async(id, {rejectWithValue, getState}) => {
        try {
            const {auth} = getState();
            await api.deleteContact(id, auth.token);
            return id;
        }
        catch({response}) {
            return rejectWithValue(response.data);
        }
    }
);