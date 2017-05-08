import { registerFragment, extendFragment } from 'meteor/vulcan:core';

extendFragment('PostsList', `
  # problemType
  placeName
  placeId
`);

extendFragment('PostsPage', `
  # problemType
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