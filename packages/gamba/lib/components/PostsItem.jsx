import { Components, replaceComponent, getRawComponent } from 'meteor/vulcan:lib';
import React, { PropTypes, Component } from 'react';
import { FormattedMessage, FormattedRelative } from 'react-intl';
import { Link } from 'react-router';
import Posts from "meteor/vulcan:posts";

class GambaPostsItem extends getRawComponent('FujiPostsItem') {

  render() {

    const {post} = this.props;

    let postClass = "posts-item";
    if (post.sticky) postClass += " posts-sticky";

    return (
      <div className={postClass}>

        <div className="posts-item-image">
          
          {post.thumbnailUrl ? <Components.PostsThumbnail post={post}/> : null}

          {post.media && post.media.duration ? <span className="posts-item-duration">{this.formatDuration(post.media.duration)}</span> : null}

          {Posts.options.mutations.edit.check(this.props.currentUser, post) ? this.renderActions() : null}
        
        </div>

        <div className="posts-item-content">

          <h3 className="posts-item-title">
            <Link to={Posts.getPageUrl(post)} className="posts-item-title-link">
              {post.title}
            </Link>
          </h3>

          {this.renderCategories()}

          <div className="posts-item-spacer"></div>

          {post.placeName ? 

            <div className="posts-item-place">
              <Link to={`/?place=${encodeURIComponent(post.placeName)}`}><Components.Icon name="place" /> {post.placeName}</Link>
            </div> :

            null

          }

        </div>

        {/* this.renderCommenters() */}

      </div>
    )
  }
}

replaceComponent('PostsItem', GambaPostsItem);
