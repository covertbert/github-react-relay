import { graphql } from 'react-relay'
import { compose, setDisplayName } from 'recompose'

import environment from '../../environment'
import { createQueryRenderer } from '../../relay'

import AppHeader from './AppHeader'

const withQueryRenderer = createQueryRenderer(
  environment,
  graphql`
   query AppHeaderContainer_Query {
      viewer {
        login
        name
      }
    }
  `,
)

export default compose(
  setDisplayName('AppHeaderContainer'),
  withQueryRenderer,
)(AppHeader)
