import {
    FETCH_CONTACTS_FAILURE,
    FETCH_CONTACTS_REQUEST,
    FETCH_CONTACTS_SUCCESS,
    CONTACT_FAILURE,
    CONTACT_REQUEST,
    CONTACT_SUCCESS, SET_MODAL
} from "../actionTypes";

const initialState = {
    loading: false,
    error: null,
    fetchError: null,
    openModal: false,
    contacts: [],
    contact: {
        id: '',
        information: {}
    }
};

const contactsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CONTACT_REQUEST:
            return {...state, loading: true};
        case CONTACT_SUCCESS:
            return {...state, loading: false,
                contact: action.contact
            };
        case CONTACT_FAILURE:
            return {...state, loading: false, error: action.error};
        case FETCH_CONTACTS_REQUEST:
            return {...state, loading: true};
        case FETCH_CONTACTS_SUCCESS:
            return {...state, loading: false, contacts: action.contacts};
        case FETCH_CONTACTS_FAILURE:
            return {...state, loading: false, fetchError: action.error};
        case SET_MODAL:
            return {
                ...state,
                openModal: action.openModal
            };
        default:
            return state;
    }
};

export default contactsReducer;