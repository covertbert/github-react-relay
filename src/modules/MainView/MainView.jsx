import React from 'react'
import PropTypes from 'prop-types'

const MainView = ({ viewer }) => (
  <div>
    <h1>{ viewer.login }</h1>
    <h1>{ viewer.name }</h1>
    <h2>Test</h2>
  </div>
)

MainView.propTypes = {
  viewer: PropTypes.shape({
    login: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
}

export default MainView
