import React from 'react'
import PropTypes from 'prop-types'

const MainView = ({ viewer }) => (
  <h1>{ viewer }</h1>
)

MainView.propTypes = {
  viewer: PropTypes.object.isRequired,
}

export default MainView
