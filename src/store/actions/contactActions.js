import {
    FETCH_CONTACTS_FAILURE,
    FETCH_CONTACTS_REQUEST,
    FETCH_CONTACTS_SUCCESS,
    INIT_CONTACT,
    CONTACT_FAILURE,
    CONTACT_REQUEST,
    CONTACT_SUCCESS, SET_MODAL
} from "../actionTypes";
import axios from "../../axiosBase";
import axiosBase from "../../axiosBase";
import React from "react";

export const contactRequest = () => {
    return {type: CONTACT_REQUEST};
};

export const contactSuccess = contact => {
    return {type: CONTACT_SUCCESS, contact};
};

export const contactFailure = error => {
    return {type: CONTACT_FAILURE, error};
};

export const setModal = openModal => {
    return ({type: SET_MODAL, openModal: openModal});
};

export const createContact = contacts => {
    return async dispatch => {
        dispatch(contactRequest());
        try {
            const response = await axios.post("/contacts.json", contacts);
            dispatch(contactSuccess(response.data));
        } catch (e) {
            dispatch(contactFailure(e));
        }
    };
};

const fetchContactsRequest = () => {
    return {type: FETCH_CONTACTS_REQUEST};
}

const fetchContactsSuccess = contacts => {
    return {type: FETCH_CONTACTS_SUCCESS, contacts};
}

const fetchContactsFailure = error => {
    return {type: FETCH_CONTACTS_FAILURE, error};
}

export const fetchContacts = () => {
    return async dispatch => {
        dispatch(fetchContactsRequest());
        try {
            const response = await axios.get('/contacts.json');
            const fetchedContacts = Object.keys(response.data).map(id => {
                return {...response.data[id], id};
            });
            dispatch(fetchContactsSuccess(fetchedContacts));
        } catch (e) {
            dispatch(fetchContactsFailure(e))
        }

    };
};

export const fullInfo = id => {

    return async dispatch => {
        dispatch(contactRequest());
        try {
            const response = await axios.get(`/contacts/${id}.json`);
            const fetchedContact = Object.keys(response.data).map(id => {
                return {...response.data[id], id};
            });
            const successContact = {
                id: id,
                information: fetchedContact[0]
            }

            dispatch(contactSuccess(successContact));
        } catch (e) {
            dispatch(contactFailure(e))
        }
    };
};

export const deleteContact = (props,id) => {
    return async dispatch => {
        dispatch(contactRequest());
        try {
            await axiosBase.delete(`/contacts/${id}.json`);
        } finally {

        }
    };
}


export const initContact = () => {
    return {type: INIT_CONTACT};
};