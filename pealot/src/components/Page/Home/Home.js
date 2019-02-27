import React from 'react';

import { Billboard } from './Billboard/Billboard';
import { HomeSearch } from './HomeSearch/HomeSearch';
import { WonderButton } from '../../Button/WonderButton';
import { Choice } from './Choice/Choice';
import { SignBanner } from './SignBanner/SignBanner';

export class Home extends React.Component {
    render() {
        return (
            <div>
                <Billboard />
                <HomeSearch />
                <WonderButton
                    handleEvent={this.props.handleWonderButton}
                    icon={this.props.wonderIcon}
                />
                <Choice />
                <SignBanner />
            </div>
        );
    }
}