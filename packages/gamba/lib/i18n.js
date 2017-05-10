/*
  Let's add an international label to the field added in custom_fields.js
*/

import { addStrings } from 'meteor/vulcan:core';

addStrings('en', {
  'posts.placeName': 'Location',
  'posts.categories': 'Tags',
  'posts.featured': 'Featured',
  'newsletter.subscribe_prompt': 'Receive the best climbing videos in your inbox each week: ',
});