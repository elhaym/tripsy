import React from 'react';

const Icon = (props) => {
    return (
        <i className={"material-icons"}>
            {props.children}
        </i>
    )
}

export default Icon;