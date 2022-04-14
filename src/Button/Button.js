import React from 'react';
import PropTypes from 'prop-types';

function Button( { text, backgroundColor, padding } ){
    // Style the components here
    const style = {
        backgroundColor,
        padding,
    }

    //  One button
    //  Wrap the button to separate each button
    return(
        <button style={style}>
            { text }
        </button>
    )
}

//  The attributes of the button 
//  You can define the attributes in the stories
Button.propTypes = {
    text: PropTypes.string,
    backgroundColor: PropTypes.string,
    padding: PropTypes.number,
}

export default Button;

export const buttonColors = 
[
    'pink',
    'green',
    'orange',
    'red',
    'blue',
    'white',
];