import { Components, replaceComponent } from 'meteor/vulcan:core';
import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';

const FujiPostsItemFooter = ({post}) =>
  <div className="posts-item-footer">
    {post.placeName ? 
      <div className="posts-item-place">
        <Link to={`/places/${encodeURIComponent(post.placeId)}`}><Components.Icon name="place" /> {post.placeName}</Link>
      </div> :
      null
    }
  </div>

replaceComponent('PostsItemFooter', FujiPostsItemFooter);

          
