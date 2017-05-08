import React, { PropTypes, Component } from 'react';

const PlaceInfo = ({name, adr_address, url, website}) => 
  <div className="place-info">
    {name}
    {adr_address}
    {url}
    {website}
  </div>

export default PlaceInfo;