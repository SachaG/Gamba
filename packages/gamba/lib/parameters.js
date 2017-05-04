import { addCallback, removeCallback, Utils } from 'meteor/vulcan:core';
import escapeStringRegexp from 'escape-string-regexp';

// Category Posts Parameters
// Add a "categories" property to terms which can be used to filter *all* existing Posts views. 
function PostsPlaceParameter(parameters, terms, apolloClient) {
  const place = terms.place;
  if (place) {
    parameters.selector = {...parameters.selector, placeName: decodeURIComponent(place)}
  }
  return parameters;
}

addCallback("posts.parameters", PostsPlaceParameter);


function addSearchQueryParameter2 (parameters, terms) {
  if(!!terms.query) {
    
    const query = escapeStringRegexp(terms.query);

    parameters = Utils.deepExtend(true, parameters, {
      selector: {
        $or: [
          {title: {$regex: query, $options: 'i'}},
          {url: {$regex: query, $options: 'i'}},
          // note: we cannot search the body field because it's not published
          // to the client. If we did, we'd get different result sets on 
          // client and server
          {excerpt: {$regex: query, $options: 'i'}},
          {placeName: {$regex: query, $options: 'i'}}
        ]
      }
    });
  }
  return parameters;
}
removeCallback("posts.parameters", "addSearchQueryParameter");
addCallback("posts.parameters", addSearchQueryParameter2);
