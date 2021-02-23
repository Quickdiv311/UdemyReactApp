import React from 'react';
import {SpinnerContainer, SpinnerOverlay} from './spin.styles';

const Spin = WrappedComponent => ({isLoading, ...otherProps}) => {
    return isLoading 
    ?
    (<SpinnerOverlay>
        <SpinnerContainer/>
    </SpinnerOverlay>)
    :
    (<WrappedComponent {...otherProps}/>)
}

export default Spin;