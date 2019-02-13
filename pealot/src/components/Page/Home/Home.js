import React from 'react';

import { Billboard } from './Billboard/Billboard';
import { HomeSearch } from './HomeSearch/HomeSearch';
import { WonderButton } from '../../Button/WonderButton';

export class Home extends React.Component {
    render() {
        return (
            <div>
                <Billboard />
                <HomeSearch />
               {/** <WonderButton /> */ }
            </div>
        );
    }
}