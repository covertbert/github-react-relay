import React from 'react'
import PropTypes from 'prop-types'

const AppHeader = ({ viewer }) => (
  <header>
    { viewer.name }
  </header>
)

AppHeader.propTypes = {
  viewer: PropTypes.shape({
    login: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
}

export default AppHeader
