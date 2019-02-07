import React from 'react';


const OutlinedButton = (props) => {
    return(
        <button type="button" className={"btn btn-outline-" + props.type + " btn-" + props.size  + " " + props.custom}>
        {props.children}
        </button>
    )
}

export default OutlinedButton;