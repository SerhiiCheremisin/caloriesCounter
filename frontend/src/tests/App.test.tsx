import { render, screen } from '@testing-library/react'
import App from '../App'
import { MemoryRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../redux/store'

vi.mock('../services/hooks/useAuthState', () => ({
  __esModule: true,
  default: () => ({
    isUserLogged: false,
  }),
}))

describe('App tests', () => {
  test('Login component should be shown if user is not logged in', () => {
    render(
      <Provider store={store}>
      <MemoryRouter initialEntries={['/login']}>
        <App />
      </MemoryRouter>
      </Provider>
    )
    expect(screen.getByTestId('login-form')).toBeInTheDocument()
  })
})
