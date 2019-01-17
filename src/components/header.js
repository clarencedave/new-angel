import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import logo from '../images/seattle-angel-logo.png'
const Header = ({ siteTitle }) => (
  <div
    style={{
      background: `transparent`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
         
        </Link>

        <div class="header">
  <a href ="/" class="logo"><img src = {logo} alt = ""/></a>
  <input class="menu-btn" type="checkbox" id="menu-btn" />
  <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
    <ul class="menu">
    <li><Link to="/">Home</Link></li>
    <li><Link to ="about">About</Link></li>
    <li><Link to ="resources">Resources</Link></li>
    <li><Link to ="team">Leadership</Link></li>
    </ul>
  </div>
        




      </h1>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
