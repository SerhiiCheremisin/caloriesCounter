import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//Redux
import { Provider } from 'react-redux'
import store from './redux/store.ts'
//Styles
import './index.css'

import RootWrapper from './components/RootWrapper.tsx'

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <StrictMode>
      <RootWrapper />
    </StrictMode>
  </Provider>
)
