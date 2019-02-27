import React from 'react';
import Icon from '../Icon/Icon';


const CloseButton = (props) => {
    return (
        <div className="closebtn" onClick={props.handleEvent}>
            <Icon>close</Icon>
        </div>
    )
}

export default CloseButton;