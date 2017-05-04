import { extendFragment } from 'meteor/vulcan:core';

extendFragment('PostsList', `
  problemType
  placeName
  placeId
  placeLat
  placeLng
`);

extendFragment('PostsPage', `
  problemType
  placeName
  placeId
  placeLat
  placeLng
`);