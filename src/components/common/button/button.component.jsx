import React from 'react';
import './button.styles.scss';

const Button = ({children,isGoogleSignIn,inverted, ...otherProps}) => (
    <button className={`${isGoogleSignIn ? 'google-button' : ''} ${inverted ? 'inverted' : ''} button`} {...otherProps}>
        {children}
    </button>
)

export default Button;