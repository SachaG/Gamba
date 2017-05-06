/*
A new custom route for our custom page. 
Browse to http://localhost:3000/my-custom-route to see it.
*/

import { addRoute, getComponent, Components } from 'meteor/vulcan:core';
import Page from './components/Page.jsx';

addRoute({name:'about', path: '/about', component: () => <Page name="about" title="About" packageName="gamba" path="lib/assets/markdown/about.md"/>});
