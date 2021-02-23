import React from 'react';
import './navigation.scss'

const PaperDiv = (props) => {
    return (
        <div className="paper">
            {props.children}
        </div>
    )
}
export default PaperDiv;