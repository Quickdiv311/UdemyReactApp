import React from 'react';
import './sign.styles.scss';
import SignIn from '../../components/SignPage/sign-in/sign-in.component';
import SignUp from '../../components/SignPage/sign-up/sign-up.component';


const SignPage = () => (
    <div className="sign-page">
        <SignIn/>
        <SignUp/>
    </div>
)

export default SignPage;