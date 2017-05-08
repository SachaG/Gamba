import Posts from 'meteor/vulcan:posts';
import { PlaceControl } from 'meteor/vulcan:places';
// import Tags from 'meteor/vulcan:forms-tags';
import ReactSelectPlus from './components/ReactSelectPlus.jsx';
import React from 'react';
import {getCategoriesAsNestedOptions} from 'meteor/vulcan:categories';

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
      control: ReactSelectPlus,
      afterComponent: <a target="_blank" className="suggest-category-link" href="https://github.com/SachaG/Gamba/issues/1">Suggest new tags</a>,
      form: {
        noselect: true,
        type: "bootstrap-category",
        order: 50,
        options: formProps => getCategoriesAsNestedOptions(formProps.client),
      },
      placeholder: 'Select one or more tags…',
    }
  },
  // {
  //   fieldName: 'problemType',
  //   fieldSchema: {
  //     type: Number,
  //     optional: true,
  //     viewableBy: ['guests'],
  //     insertableBy: ['members'],
  //     editableBy: ['members'],
  //     control: 'radiogroup',
  //     form: {
  //       options: [
  //         {
  //           value: 1,
  //           label: 'Outdoors'
  //         },
  //         {
  //           value: 2,
  //           label: 'Gym'
  //         },
  //       ],
  //     },
  //   }
  // },
  {
    fieldName: 'placeName',
    fieldSchema: {
      type: String,
      control: PlaceControl,
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
]);
