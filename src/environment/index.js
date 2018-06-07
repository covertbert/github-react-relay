import { Environment, Network, RecordSource, Store } from 'relay-runtime' // eslint-disable-line

require('dotenv').config()

function fetchQuery(operation, variables) {
  return fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
    },
    body: JSON.stringify({ query: operation.text, variables }),
  }).then((response) => response.json())
}

const network = Network.create(fetchQuery)
const source = new RecordSource()
const store = new Store(source)

export default new Environment({ network, store })
