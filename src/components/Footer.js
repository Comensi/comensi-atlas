import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/logo-comensi-darkandtransparent.png'
import logo_tesserae from '../img/logo-tesserae.jpg'
import logo_4change from '../img/logo-4change.png'
import logo_mapping from '../img/logo-mapping.png'
import logo_bond from '../img/logo_bond.png'
import logo_prostoroz from '../img/logo-prostoroz.jpg'
import logo_erusmus from '../img/logo-erasmusleft_en.jpg'

import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import vimeo from '../img/social/vimeo.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer 1 has-text-white-ter">
         <div className="logobar">
          <img
            src={logo_erusmus}
            alt="Erasmus"
            style={{ 'maxWidth': '20em', 'maxHeight': '5em' }}
          />
          <img
            src={logo}
            alt="Comensi"
            style={{ 'maxWidth': '10em', 'maxHeight': '5em' }}
          />
          <img
            src={logo_bond}
            alt="Bond of Union"
            style={{ 'maxWidth': '10em', 'maxHeight': '5em' }}
          />
          <img
            src={logo_tesserae}
            alt="Tesserae"
            style={{ 'maxWidth': '10em', 'maxHeight': '5em' }}
          />
          <img
            src={logo_4change}
            alt="4change"
            style={{ 'maxWidth': '10em', 'maxHeight': '5em' }}
          />
           <img
            src={logo_prostoroz}
            alt="4change"
            style={{ 'maxWidth': '10em', 'maxHeight': '5em' }}
          />          
          <img
            src={logo_mapping}
            alt="Mapping for change"
            style={{ 'maxWidth': '10em', 'maxHeight': '5em' }}
          />      
      </div>
        <div className="content has-text-centered">
        </div>
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div className="columns">
              <div className="column is-4">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/about">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/blog">
                        Blog
                      </Link>
                    </li>                    
                    <li>   
                      <a
                        className="navbar-item"
                        href="/admin/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Admin
                      </a>                   
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4" style={{'fontSize':'0.7em'}} >
          The European Commission's support for the production of this publication does not constitute an endorsement of the contents, 
          which reflect the views only of the authors, and the Commission cannot be held responsible for any use which may be made of the information contained therein.                
              </div>
              <div className="column is-4 social">               
                <a title="vimeo" href="https://vimeo.com/channels/1432859">
                  <img
                    src={vimeo}
                    alt="Vimeo"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
