import React from 'react';
import Icon from '../Icon/Icon';

export class WonderButton extends React.Component {
    render(){
        return(
            <div className="col-1 h-wonder-btn" onClick={this.props.handleEvent}>
                <Icon>{this.props.icon}</Icon>
            </div>
        )
    }
}