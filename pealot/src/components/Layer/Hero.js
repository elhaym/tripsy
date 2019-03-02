import React from 'react';

const Hero = (props) => {
    return (
        <div className={"col-12 hero " + props.custom}>
            {props.children}
        </div>
    );
}

export default Hero;