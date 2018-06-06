import { compose, setDisplayName } from 'recompose'
import { graphql } from 'react-relay'

import MainView from './MainView'
import { createQueryRenderer } from '../../relay'
import environment from '../../environment'

const withQueryRenderer = createQueryRenderer(
  environment,
  graphql`
   query MainViewContainer_Query {
      viewer {
        login
      }
    }
  `,
)

alert(withQueryRenderer)

export default compose(
  setDisplayName('MainViewContainer'),
  withQueryRenderer,
)(MainView)
