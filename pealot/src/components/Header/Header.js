import React from 'react';

import { HeaderNav } from './HeaderNav/HeaderNav';
import { Container } from '../Container/Container';

export class Header extends React.Component {
    render() {
        return (

            <header className="gh w-100">
                <Container>
                    <HeaderNav handleOpenBurger={this.props.handleOpenBurger} />
                </Container>
            </header>
        );
    }
}