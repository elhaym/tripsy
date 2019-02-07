import React from 'react';


const FilledButton = (props) => {
    return(
        <button type="button" className={"btn btn-" + props.type + " btn-" + props.size  + " " + props.custom}>
        {props.children}
        </button>
    )
}

export default FilledButton;