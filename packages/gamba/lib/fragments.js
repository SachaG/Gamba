import { registerFragment, extendFragment } from 'meteor/vulcan:core';

extendFragment('PostsList', `
  placeName
  placeId
`);

extendFragment('PostsPage', `
  placeName
  placeId
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