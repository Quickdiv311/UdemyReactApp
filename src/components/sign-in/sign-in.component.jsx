import React from 'react'
import './sign-in.styles.scss';
import FormInput from '../form-input//form-input.component';
import Button from '../button/button.component';
import {auth, signInWithGoogle} from '../../firebase/firebase.utils';
// import { FcGoogle } from 'react-icons/fc';

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

    handleSubmit = async event => {
        event.preventDefault();

        const {email, password} = this.state;

        try{
          await auth.signInWithEmailAndPassword(email, password);

          this.setState({ email: '', password: ''})
        }
        catch(error)
        {
           console.log(error);
        }
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
                    <Button onClick={signInWithGoogle} isGoogleSignIn>GOOGLE  SIGN IN</Button>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;