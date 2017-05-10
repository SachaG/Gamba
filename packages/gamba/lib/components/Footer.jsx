import { replaceComponent } from 'meteor/vulcan:core';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router';

const Footer = props => {
  return (
    <div className="footer">
      <Link to='/about'>About</Link>
      &nbsp;|&nbsp;
      <a href="https://twitter.com/GambaClimbing" target="_blank">Follow us on Twitter</a>
      &nbsp;|&nbsp;
      <a href="https://www.facebook.com/Gamba-1915068235397418/" target="_blank">Like us on Facebook</a>
      &nbsp;|&nbsp;
      <a href="http://vulcanjs.org" target="_blank"><FormattedMessage id="app.powered_by"/></a>
    </div>
  )
}

replaceComponent('Footer', Footer);