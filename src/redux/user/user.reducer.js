import {userTypes} from './user.types';

const initialState = {
    currentUser: null,
    cart : []
}

const userReducer = (state = initialState, action) => {
    switch(action.type)
    {
        case userTypes.SetCurrentUser: 
         return {
            ...state,
            currentUser: action.payload
         }

         default: 
         return state;
    }
}

export default userReducer;