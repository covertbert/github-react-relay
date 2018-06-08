import React from 'react'
import PropTypes from 'prop-types'

import { AppBar, Toolbar, IconButton, Typography, MenuItem, Menu, Avatar } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

const AppHeader = ({ viewer }) => (
  <AppBar position="static">
    <Toolbar>

      <IconButton color="inherit" aria-label="Menu">
        <MenuIcon />
      </IconButton>

      <Typography variant="title" color="inherit" style={{ flex: 1 }}>
        { viewer.name }
      </Typography>

      <IconButton
        aria-haspopup="true"
        color="inherit"
      >
        <Avatar alt="Avatar" src={viewer.avatarUrl} />
      </IconButton>

      <Menu
        id="menu-appbar"
        anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
        transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
        open={false}
      >
        <MenuItem>My account</MenuItem>
      </Menu>
    </Toolbar>
  </AppBar>
)

AppHeader.propTypes = {
  viewer: PropTypes.shape({
    avatarUrl: PropTypes.string,
    name: PropTypes.string,
    login: PropTypes.string,
  }).isRequired,
}

export default AppHeader
