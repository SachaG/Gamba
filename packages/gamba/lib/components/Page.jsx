/*

This component fetches a .md file and renders it as an HTML page.

Dependencies: react, react-markdown

Note: a package file can only access assets in the same package. This means 
this component needs to be live in the same package as your assets, 
which means it can't be distributed as a separate package. 

Usage example:

<SbPage name="about" title="About" packageName="sidebar" path="lib/assets/markdown/about.md"/>

*/

import React, { PropTypes, Component } from 'react';
import ReactMarkdown from 'react-markdown';

class Page extends Component {

  constructor(props) {
    super(props);
    this.fetchMarkdown = this.fetchMarkdown.bind(this);
    if (Meteor.isServer) {
      // on the server, we can retrieve the assets synchronously
      this.state = {
        markdown: Assets.getText(props.path)
      }
    } else {
      // on the client, we can't so we initialize the state to be empty
      this.state = {}
    }
  }

  fetchMarkdown() {
    // make an HTTP request to retrieve the markdown file and store it in the component's state
    HTTP.get(`/packages/${this.props.packageName.replace(":", "_")}/${this.props.path}`, (error, result) => {
      this.setState({
        markdown: result.content
      });
    });
  }
  
  componentDidMount() {
    // fetch the file when component mounts
    this.fetchMarkdown();
  }

  componentWillReceiveProps() {
    // fetch the file when props change
    this.fetchMarkdown();
  }

  render() {
    return (
      <div className={`page ${this.props.name}-page`}>
        <h2 className="page-title">{this.props.title}</h2>
        <div className="page-content">
          {this.state.markdown ? <ReactMarkdown source={this.state.markdown}/> : null}
        </div>
      </div>
    )
  }
}

Page.propTypes = {
  name: React.PropTypes.string, // name of the page, used for the CSS class
  packageName: React.PropTypes.string, // name of the current package
  path: React.PropTypes.string, // path to file from the root of the package
  title: React.PropTypes.string // title of the page
}

export default Page;