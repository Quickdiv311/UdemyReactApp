import userTypes from './user.types';

const initialState = {
    currentUser: null,
    error: null
}

const userReducer = (state = initialState, action) => {
    switch(action.type)
    {
        case userTypes.SignInSuccess: 
         return {
            ...state,
            currentUser: action.payload,
            error: null
         }

         case userTypes.SignOutSuccess:
             return{
                 ...state,
                 currentUser: null
             }

        case userTypes.SignOutFail:
        case userTypes.SignInFail: 
        case userTypes.SignUpFail: 
         return {
            ...state,
            error: action.payload
         }

         default: 
         return state;
    }
}

export default userReducer;