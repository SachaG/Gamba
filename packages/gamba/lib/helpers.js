import Posts from 'meteor/vulcan:posts';
import { Utils } from 'meteor/vulcan:core';

Posts.getThumbnailUrl = (post) => {
  const thumbnailUrl = post.cloudinaryUrls ? _.findWhere(post.cloudinaryUrls, {name: 'medium'}).url : post.thumbnailUrl;

  if (!!thumbnailUrl) {
    return thumbnailUrl.indexOf('//') > -1 ? Utils.addHttp(thumbnailUrl) : Utils.getSiteUrl().slice(0,-1) + thumbnailUrl;
  }
};