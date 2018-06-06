import ReactDOM from 'react-dom'

jest.mock('react-dom')

require('../App')

test('Renders the application', () => {
  expect(ReactDOM.render).toBeCalled()
})
