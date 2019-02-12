import React from 'react';

const Button = (props) => {
    return(
        <button type={props.type} className={"btn btn-" + props.model + " btn-" + props.size  + " " + props.custom}>
        {props.children}
        </button>
    )
}

export default Button;