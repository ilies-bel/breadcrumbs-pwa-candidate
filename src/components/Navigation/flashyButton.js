import React from 'react';
import './navigation.scss'

const FlashyButton = (props) => {
    return (
        <button className='flashy' onClick={props.onClick}>
            {props.children}
        </button>
    )
}
export default FlashyButton;