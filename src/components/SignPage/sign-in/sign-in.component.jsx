import React, {useState} from 'react'
import './sign-in.styles.scss';
import FormInput from '../../common/form-input/form-input.component';
import Button from '../../common/button/button.component';
import {googleSignInStart, emailSignInStart} from '../../../redux/user/user.actions';
import {connect} from 'react-redux';

const SignIn = ({emailSignIn,googleSignIn}) =>
{
    const [userCreds, setCreds] = useState({email: '', password: ''});

    const {email,password} = userCreds;

    const handleSubmit = async event => {
        event.preventDefault();
        
        emailSignIn(email,password)
    }

    const handleChange = event => {
        const {value, name} = event.target;
        
        setCreds({...userCreds, [name]: value})
    }

        return(
            <div className="sign-in">
                <h1>I Already Have An Account</h1>
                <h3>Sign In With Email And Password</h3>

                <form onSubmit={handleSubmit}>
                    <FormInput type="email" name="email" handleChange={handleChange} label="email" value={email} required/>
                    <FormInput type="password" name="password" handleChange={handleChange} label="password" value={password} required/>
                    <div className="buttons">
                    <Button type="submit">SIGN IN</Button>
                    <Button type="button" onClick={googleSignIn} isGoogleSignIn>GOOGLE  SIGN IN</Button>
                    </div>
                </form>
            </div>
        )
    }


const mapDispatchToProps = dispatch => ({
    googleSignIn: () => dispatch(googleSignInStart()),
    emailSignIn: (email,password) => dispatch(emailSignInStart({email,password}))
})

export default connect(null,mapDispatchToProps)(SignIn);




 // try{
        //   await auth.signInWithEmailAndPassword(email, password);

        //   this.setState({ email: '', password: ''})
        // }
        // catch(error)
        // {
        //    console.log(error);
        // }