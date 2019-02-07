import React from 'react';

const Icon = (props) => {
    return (
        <i className={"material-icons " + props.icon}>
            {props.children}
        </i>
    )
}

export default Icon;