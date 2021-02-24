import React from 'react';
import './navigation.scss'

const FlashyButton = (props) => {
    return (
        <button className='flashy' onClick={props.onClick} onSubmit={props.onSubmit} type={props.type} >
            {props.children}
        </button>
    )
}
export default FlashyButton;