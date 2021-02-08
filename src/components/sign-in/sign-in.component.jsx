import React from 'react'
import './sign-in.styles.scss';
import FormInput from '../form-input//form-input.component';
import Button from '../button/button.component';
import {signInWithGoogle} from '../../firebase/firebase.utils';

class SignIn extends React.Component
{
    constructor()
    {
        super();

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({ email: '', password: ''})
    }

    handleChange = event => {
        const {value, name} = event.target;
        
        this.setState({ [name]: value})
    }

    render()
    {
        const {email,password} = this.state;

        return(
            <div className="sign-in">
                <h1>I Already Have An Account</h1>
                <h3>Sign In With Email And Password</h3>

                <form onSubmit={this.handleSubmit}>
                    <FormInput type="email" name="email" handleChange={this.handleChange} label="email" value={email} required/>
                    <FormInput type="password" name="password" handleChange={this.handleChange} label="password" value={password} required/>
                    <div className="buttons">
                    <Button type="submit">SIGN IN</Button>
                    <Button onClick={signInWithGoogle} isGoogleSignIn>SIGN IN WITH GOOGLE</Button>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;