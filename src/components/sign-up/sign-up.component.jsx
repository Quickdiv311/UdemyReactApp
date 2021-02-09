import React from 'react';
import './sign-up.styles.scss';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import {auth, createUserProfile} from '../../firebase/firebase.utils';

class SignUp extends React.Component
{
    constructor()
    {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const {displayName, email, password, confirmPassword} = this.state;

        if(password !== confirmPassword)
        {
            alert("passwords do not match");
            return;
        }

        try{
            const {user} = await auth.createUserWithEmailAndPassword(email,password);

            await createUserProfile(user, {displayName});

            this.setState({displayName: '', email: '', password: '', confirmPassword: ''})
        }
        catch(error)
        {
            console.log(error);
        }
    }

    handleChange = event => {
        const {name, value} = event.target;
        this.setState({ [name]: value})
    }

    render()
    {
        const {displayName, email, password, confirmPassword} = this.state;

        return(
            <div className="sign-up">
                <h1 className="title">Don't Have an Account??</h1>
                <h3>Sign up with email and password</h3>
                
                <form onSubmit={this.handleSubmit} className="sign-up-form">
                    <FormInput type="text" name="displayName" value={displayName} handleChange={this.handleChange} label="Display Name" required/>
                    <FormInput type="email" name="email" value={email} handleChange={this.handleChange} label="Email" required/>
                    <FormInput type="password" name="password" value={password} handleChange={this.handleChange} label="Password" required/>
                    <FormInput type="password" name="confirmPassword" value={confirmPassword} handleChange={this.handleChange} label="Confirm Password" required/>

                    <Button type="submit">SIGN UP</Button>
                </form>
            </div>
        )
    }
}

export default SignUp;