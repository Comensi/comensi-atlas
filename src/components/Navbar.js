import React from 'react'
import github from '../img/github-icon.svg'
import logo from '../img/comensi-logo.png'
import { injectIntl, useIntl, Link, FormattedMessage } from "gatsby-plugin-intl"

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img src={logo} alt="Comensi" style={{ width: '300px', height: '109px', maxHeight: '200px' }} />
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
              
            </div>
            <div className="navbar-end has-text-centered">
            <Link className="navbar-item" to="/">
               <FormattedMessage id="menu-home" />
              </Link>
             <Link className="navbar-item" to="/partners">
               <FormattedMessage id="menu-about" />                
              </Link>
              <Link 
                className="navbar-item" 
                to="/tools/"
                partiallyActive={true}
                >
                  <FormattedMessage id="menu-toolkit" />                
              </Link>
              <Link className="navbar-item" to="/atlases">
                <FormattedMessage id="menu-atlases" />                
              </Link>
              <Link className="navbar-item" to="/handbook">
                <FormattedMessage id="menu-handbook" />                
              </Link>                     
              <a className="navbar-item" href="mailto:contact@community-atlas.net"><FormattedMessage id="menu-contact" /></a>              
            </div>
            <div id="languageSwitcher" style={{position: 'absolute', top: 0, right: 0, fontSize:0.7+'em'}}>
              <FormattedMessage id="change-language" />:         
              <a href="/de" style={{padding:5+'px'}}><FormattedMessage id="de" /></a> 
              |
              <a href="/en" style={{padding:5+'px'}}><FormattedMessage id="en" /></a>
              |   
              <a href="/it" style={{padding:5+'px'}}><FormattedMessage id="it" /></a> 
              |  
              <a href="/pt" style={{padding:5+'px'}}><FormattedMessage id="pt" /></a>   
              |              
              <a href="/sl" style={{padding:5+'px'}}><FormattedMessage id="sl" /></a>                                       
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default injectIntl(Navbar)
