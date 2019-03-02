import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../../styles/theme.scss';
import '../../styles/custom.scss';

import { Header } from '../Header/Header';
import Main from './Main';
import SideNav from '../Menu/SideNav/SideNav';
import Hero from '../Layer/Hero';
import { Footer } from '../Footer/Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      burgerWidth: '0',
      burgerOpacity: '0',
      wonderIcon: 'assistant',
      isHeroOpen: false
    }
    this.handleOpenBurger = this.handleOpenBurger.bind(this);
    this.handleCloseBurger = this.handleCloseBurger.bind(this);
    this.handleWonderButton = this.handleWonderButton.bind(this);
    this.handleCloseHero = this.handleCloseHero.bind(this);
  }

  /**
   * Close BurgerMenu component onClick on MenuButton
   */
  handleOpenBurger = () => {
    this.setState({
      burgerWidth: '100%',
      burgerOpacity: '1'
    });
  }

  /**
   * Close BurgerMenu component onClick on MenuButton
   */
  handleCloseBurger = () => {
    this.setState({
      burgerWidth: '0',
      burgerOpacity: '0'
    });
  }

  /**
   * Change WonderButton depending on whether Hero component is displayed or not
   * Display or Close Hero component onClick on WonderButton
   */
  handleWonderButton = () => {
    if (!this.state.isHeroOpen) {
      this.setState({
        wonderIcon: 'clear',
        isHeroOpen: true
      });
    }
    else {
      this.setState({
        wonderIcon: 'assistant',
        isHeroOpen: false
      });
    }
  }

  /**
   * Close Hero component onClick on CloseButton
   */
  handleCloseHero = () => {
    this.setState({
      heroOpacity: '0'
    });
  }

  render() {
    return (
      <div>
        {/**
        <Hero
          handleCloseHero={this.handleCloseHero}
          custom={this.state.isHeroOpen ? 'fadeIn' : 'fadeOut'}
        >
        </Hero>  This has to be moved to Home */}
        <Header handleOpenBurger={this.handleOpenBurger} />
        <SideNav
          burgerWidth={this.state.burgerWidth}
          burgerOpacity={this.state.burgerOpacity}
          handleCloseBurger={this.handleCloseBurger}
        />
        <Main
          handleWonderButton={this.handleWonderButton}
          wonderIcon={this.state.wonderIcon}
        />
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  wonderIcon: PropTypes.string.isRequired,
  isHeroOpen: PropTypes.bool.isRequired,
  handleOpenHero: PropTypes.func.isRequired,
  handleCloseHero: PropTypes.func.isRequired,
  burgerWidth: PropTypes.string.isRequired,
  burgerOpacity: PropTypes.string.isRequired,
  handleOpenBurger: PropTypes.func.isRequired,
  handleCloseBurger: PropTypes.func.isRequired
};

export default App;
