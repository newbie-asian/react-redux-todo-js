import redux from 'redux';
const createStore = redux.createStore

const initialState = {
    loading: false,
    data: [],
    error: ''
}

const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST';
const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE';

const actionCreator = {
    fetchUserRequest: (payload) => {
        return {
            type: FETCH_USER_REQUEST,
            payload
        }
    },
    fetchUserSuccess: (payload) => {
        return {
            type: FETCH_USER_SUCCESS,
            payload
        }
    },
    fetchUserFailure: (payload) => {
        return {
            type: FETCH_USER_FAILURE,
            payload
        }
    }
}

const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_USER_REQUEST:
            return {...state, loading: true}
        case FETCH_USER_SUCCESS:
            return {...state, loading: false, data: action.payload}
        case FETCH_USER_FAILURE:
            return {loading: false, data: [], error: action.payload}
        default: return state;
    }
}

const store = createStore(userReducer)