import {takeLatest, put, call, all} from 'redux-saga/effects';
import {signInSuccess,signInFail,signOutSuccess,signOutFail,signUpSuccess,signUpFail} from './user.actions';
import userTypes from './user.types';
import {auth,createUserProfile,googleProvider, getCurrentUser} from '../../firebase/firebase.utils';

export function* signInFunc(userAuth, data)
{
  try{
    const userRef = yield call(createUserProfile,userAuth, data);
    const snap = yield userRef.get();
    yield put(signInSuccess({id: snap.id, ...snap.data()}))
  }
  catch(error)
  {
      yield put(signInFail(error))
  }
}

export function* googleSignInAsync()
{
   try{
        const {user} = yield auth.signInWithPopup(googleProvider);
        yield signInFunc(user);
   }
   catch(error)
   {
       yield put(signInFail(error))
   }
}

export function* emailSignInAsync({payload: {email,password}})
{
    try{
        const {user} = yield auth.signInWithEmailAndPassword(email,password);
        yield signInFunc(user);
    }
    catch(error)
    {
        yield put(signInFail(error))
    }
   }

export function* checkUserAsync()
{
  try
  {
     const userAuth = yield getCurrentUser();
     if(!userAuth) return;
     yield signInFunc(userAuth);
  }
  catch(error)
  {
      yield put(signInFail(error))
  }
}

export function* signOutAsync()
{
    try{
       yield auth.signOut();
       yield put(signOutSuccess())
    }
    catch(error)
    {
       yield put(signOutFail(error))
    }
}

export function* signUpAsync({payload: {email, password, displayName}})
{
  try
  {
    const {user} = yield auth.createUserWithEmailAndPassword(email,password);
     yield put(signUpSuccess({user, data: {displayName}}))
  }
  catch(error)
  {
    yield put(signUpFail(error))  
  }
}

export function* signInAfterSignUpAsync({payload: {user, data}})
{
    yield signInFunc(user,data);
}

export function* googleSignIn()
{
    yield takeLatest(userTypes.GoogleSignInStart, googleSignInAsync)
}

export function* emailSignIn()
{
    yield takeLatest(userTypes.EmailSignInStart, emailSignInAsync);
}

export function* checkUser()
{
    yield takeLatest(userTypes.CheckUser, checkUserAsync);
}

export function* signOut()
{
    yield takeLatest(userTypes.SignOutStart, signOutAsync);
}

export function* signUp()
{
    yield takeLatest(userTypes.SignUpStart, signUpAsync);
}

export function* signInAfterSignUp()
{
    yield takeLatest(userTypes.SignUpSuccess, signInAfterSignUpAsync);
}

export function* userSaga()
{
    yield all([call(googleSignIn), call(emailSignIn), call(checkUser), call(signOut), call(signUp), call(signInAfterSignUp)])
}