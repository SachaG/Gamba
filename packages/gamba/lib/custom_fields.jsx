import Posts from "meteor/vulcan:posts";
import Place from "meteor/vulcan:forms-place";
import Tags from 'meteor/vulcan:forms-tags';
import React from 'react';

Posts.addField([
  // {
  //   fieldName: 'thumbnailUrl',
  //   fieldSchema: {
  //     type: String,
  //     optional: true,
  //     hidden: true
  //   }
  // },
  {
    fieldName: 'categories',
    fieldSchema: {
      type: Array,
      control: Tags,
      afterComponent: <a target="_blank" className="suggest-category-link" href="https://github.com/SachaG/GambaFeedback/issues/1">Suggest new tags</a>
    }
  },
  {
    fieldName: 'problemType',
    fieldSchema: {
      type: Number,
      optional: true,
      viewableBy: ['guests'],
      insertableBy: ['members'],
      editableBy: ['members'],
      control: 'radiogroup',
      form: {
        options: [
          {
            value: 1,
            label: 'Outdoors'
          },
          {
            value: 2,
            label: 'Gym'
          },
        ],
      },
    }
  },
  {
    fieldName: 'placeName',
    fieldSchema: {
      type: String,
      control: Place,
      optional: true,
      insertableBy: ['members'],
      editableBy: ['members'],
      viewableBy: ['guests'],
    }
  },
  {
    fieldName: 'placeId',
    fieldSchema: {
      type: String,
      hidden: true,
      optional: true,
      insertableBy: ['members'],
      editableBy: ['members'],
      viewableBy: ['guests'],
    }
  },
  {
    fieldName: 'placeLat',
    fieldSchema: {
      type: Number,
      hidden: true,
      optional: true,
      insertableBy: ['members'],
      editableBy: ['members'],
      viewableBy: ['guests'],
    }
  },
  {
    fieldName: 'placeLng',
    fieldSchema: {
      type: Number,
      hidden: true,
      optional: true,
      insertableBy: ['members'],
      editableBy: ['members'],
      viewableBy: ['guests'],
    }
  }
]);
