import React, {useState} from 'react';
import './sign-up.styles.scss';
import FormInput from '../../common/form-input/form-input.component';
import Button from '../../common/button/button.component';
import {signUpStart} from '../../../redux/user/user.actions';
import {connect} from 'react-redux';

const SignUp = ({signUp}) => 
{
    const [userCreds, setCreds] = useState({email: '', password: '', displayName: '', confirmPassword: ''});

    const {displayName, email, password, confirmPassword} = userCreds;
    
    const handleSubmit = async event => {
        event.preventDefault();

        if(password !== confirmPassword)
        {
            alert("passwords do not match");
            return;
        }

        signUp({email, password, displayName})
    }

    const handleChange = event => {
        const {name, value} = event.target;
        setCreds({...userCreds, [name]: value})
    }

    

        return(
            <div className="sign-up">
                <h1 className="title">Don't Have an Account??</h1>
                <h3>Sign up with email and password</h3>
                
                <form onSubmit={handleSubmit} className="sign-up-form">
                    <FormInput type="text" name="displayName" value={displayName} handleChange={handleChange} label="Display Name" required/>
                    <FormInput type="email" name="email" value={email} handleChange={handleChange} label="Email" required/>
                    <FormInput type="password" name="password" value={password} handleChange={handleChange} label="Password" required/>
                    <FormInput type="password" name="confirmPassword" value={confirmPassword} handleChange={handleChange} label="Confirm Password" required/>

                    <Button type="submit">SIGN UP</Button>
                </form>
            </div>
        )
    }


const mapDispatchtoProps = dispatch => ({
    signUp: userCred => dispatch(signUpStart(userCred))
})

export default connect(null, mapDispatchtoProps)(SignUp);




     // try{
        //     const {user} = await auth.createUserWithEmailAndPassword(email,password);

        //     await createUserProfile(user, {displayName});

        //     this.setState({displayName: '', email: '', password: '', confirmPassword: ''})
        // }
        // catch(error)
        // {
        //     console.log(error);
        // }