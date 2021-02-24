import userTypes from './user.types';

export const googleSignInStart = () => ({
    type: userTypes.GoogleSignInStart
})

export const signInSuccess = user => ({
    type: userTypes.SignInSuccess,
    payload: user
})

export const signInFail = error => ({
    type: userTypes.SignInFail,
    payload: error
})

export const emailSignInStart = emailPassword => ({
    type: userTypes.EmailSignInStart,
    payload: emailPassword
})

export const checkUser = () => ({
    type: userTypes.CheckUser
})


export const signOutStart = () => ({
    type: userTypes.SignOutStart
})


export const signOutSuccess = () => ({
    type: userTypes.SignOutSuccess
})

export const signOutFail = error => ({
    type: userTypes.SignOutFail,
    payload: error
})

export const signUpStart = (userCred) => ({
    type: userTypes.SignUpStart,
    payload: userCred
})


export const signUpSuccess = (user, data) => ({
    type: userTypes.SignUpSuccess,
    payload: {user, data}
})

export const signUpFail = error => ({
    type: userTypes.SignUpFail,
    payload: error
})



