import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { connect } from 'react-redux';
import { setRuntimeVariable } from 'actions/runtime';
import s from './Home.scss';

/* we can conntect to store as following */
@connect(
  store => ({
    runtimeVariable: store.runtime.runtimeVariable, // any specific store value can be accessed like this
  }),
  { setRuntimeVariable }, // here we are binding the dispactcher action methods
)
class Home extends React.Component {
  static propTypes = {
    setRuntimeVariable: PropTypes.func.isRequired,
  };

  componentDidMount() {
    /* this is how we can dispactch an action */
    this.props.setRuntimeVariable({
      name: 'runtimeVariable',
      value: new Date(),
    });

    /* we can access store data like following
     * ex: this.props.runtimeVariable
     */
  }

  render() {
    return (
      <div className={s.root}>
        <div className={`${s.container} row`}>
          <h1>Simplified React Starter Kit</h1>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Home);
