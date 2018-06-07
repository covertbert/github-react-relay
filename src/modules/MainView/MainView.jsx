import React from 'react'
import PropTypes from 'prop-types'

const MainView = ({ viewer }) => (
  <div>
    <h1>{ viewer }</h1>
    <h2>Test</h2>
  </div>
)

MainView.propTypes = {
  viewer: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
  })).isRequired,
}

export default MainView
