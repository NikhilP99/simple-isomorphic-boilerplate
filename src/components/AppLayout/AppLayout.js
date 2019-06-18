import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
// external-global styles must be imported in your JS.
import normalizeCss from 'normalize.css';
import SFProText from 'external-assets/styles/fonts/SF-Pro-Text.css';
import designStyles from 'external-assets/styles/design-styles.scss';
import materialize from 'external-assets/styles/materialize.css';

class AppLayout extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    return this.props.children;
  }
}

export default withStyles(normalizeCss, SFProText, designStyles, materialize)(
  AppLayout,
);
