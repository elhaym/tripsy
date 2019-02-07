import React, { Component } from 'react';

import '../../styles/theme.scss';
import '../../styles/custom.scss';

import { Header } from '../Header/Header';
import Main from './Main';
import SideNav from '../Menu/SideNav/SideNav';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isBurgerOpen: false,
      burgerWidth : '0',
      burgerOpacity : '0'
    }
    this.handleOpenBurger = this.handleOpenBurger.bind(this);
    this.handleCloseBurger = this.handleCloseBurger.bind(this);
  }
  handleOpenBurger = () => {
      this.setState({
      burgerWidth: '100%',
      burgerOpacity : '1' })
  }
  handleCloseBurger = () => {
    this.setState({
      burgerWidth: '0',
      burgerOpacity : '0' })
}
  render() {
    return (
      <div>
        <Header handleOpenBurger={this.handleOpenBurger} />
        <SideNav burgerWidth={this.state.burgerWidth} burgerOpacity={this.state.burgerOpacity} isBurgerOpen={this.state.isBurgerOpen} handleCloseBurger={this.handleCloseBurger} />
        <Main />
      </div>
    );
  }
}

export default App;
