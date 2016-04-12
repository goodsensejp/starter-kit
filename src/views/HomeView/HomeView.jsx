import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { increment, doubleAsync } from 'redux/modules/counter'
import classes from './HomeView.css'

export class HomeView extends React.Component {
  static propTypes = {
  };

  render () {
    return (
      <div className={classes.container}>
        Home page
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
});

export default connect(mapStateToProps)(HomeView)
