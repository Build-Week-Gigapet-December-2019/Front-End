import {POST_ENTRY_START,
    POST_ENTRY_SUCCESS,
    POST_ENTRY_FAIL,
    FETCH_ENTRY_START,
    FETCH_ENTRY_SUCCESS,
    FETCH_ENTRY_FAIL,
    PUT_ENTRY_START,
    PUT_ENTRY_SUCCESS,
    PUT_ENTRY_FAIL,
    DELETE_ENTRY_START,
    DELETE_ENTRY_SUCCESS,
    DELETE_ENTRY_FAIL
} from "../actions/entryActions"

const initialState = {
    entryData: {},
    // "child_id": null,
    // "date": Date.now(),
    // "dairy": 0,
    // "fruits": 0,
    // "grains": 0,
    // "proteins": 0,
    // "vegetables": 0,
    // "treats": 0,
    postEntry: false,
    fetchEntry: false,
    putEntry: false,
    deleteEntry: false,
    error: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case POST_ENTRY_START:
            return {

            }
        case POST_ENTRY_SUCCESS:
            return {
                
            }
        case POST_ENTRY_FAIL:
            return {
                
            }


        case FETCH_ENTRY_START:
            return {
            ...state,
            fetchEntry: true
            }
        case FETCH_ENTRY_SUCCESS:
            return {
            ...state,
            entryData: action.payload,
            fetchEntry: false,
            error: ""
            }
        case FETCH_ENTRY_FAIL:
            return {
            ...state,
            fetchEntry: false,
            error: action.payload
            }


        case PUT_ENTRY_START:
            return {

            }
        case PUT_ENTRY_SUCCESS:
            return {
                
            }
        case PUT_ENTRY_FAIL:
            return {
                
            }


        case DELETE_ENTRY_START:
            return {

            }
        case DELETE_ENTRY_SUCCESS:
            return {
                
            }
        case DELETE_ENTRY_FAIL:
            return {
                
            }


        default:
            return state
  }
}

export default reducer