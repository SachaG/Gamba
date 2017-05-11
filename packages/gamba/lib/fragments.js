import { registerFragment, extendFragment } from 'meteor/vulcan:core';

extendFragment('PostsList', `
  placeName
  placeId
  cloudinaryUrls
`);

extendFragment('PostsPage', `
  placeName
  placeId
  cloudinaryUrls
`);

registerFragment(`
  fragment PlacesSingle on Place {
    _id
    name
    location
    url
    website
    adr_address
  }
`);