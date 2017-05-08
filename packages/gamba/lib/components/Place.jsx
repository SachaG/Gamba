import { Components, withDocument } from 'meteor/vulcan:core';
import React, { PropTypes, Component } from 'react';
import Places from 'meteor/vulcan:forms-place';
import PlaceInfo from './PlaceInfo.jsx';

const Place = ({documentId, document}) => 
  <div className="place">
    <PlaceInfo {...document} />
    <Components.PostsList terms={{placeId: documentId}} showHeader={false} />
  </div>

const options = {
  collection: Places,
  fragmentName: 'PlacesSingle'
}

export default withDocument(options)(Place);