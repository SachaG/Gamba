import { addCallback } from 'meteor/vulcan:core';
import { checkAndAddPlace } from 'meteor/vulcan:places';

function postsNewCheckForNewPlace (document, user) {
  if (document.placeId) checkAndAddPlace(document.placeId);
}
addCallback('posts.new.async', postsNewCheckForNewPlace);

function postsEditCheckForNewPlace (document) {
  if (document.placeId) checkAndAddPlace(document.placeId);
}
addCallback('posts.edit.async', postsEditCheckForNewPlace);
