import React from 'react';
import './button.styles.scss';

const Button = ({children,isGoogleSignIn, ...otherProps}) => (
    <button className={`${isGoogleSignIn ? 'google-button' : ''} button`} {...otherProps}>
        {children}
    </button>
)

export default Button;