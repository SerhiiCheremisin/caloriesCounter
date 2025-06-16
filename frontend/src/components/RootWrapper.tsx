import React, { JSX } from 'react'
import { useHiddenMenuHandler } from '../services/hooks/useHiddenMenuHandler'
import { MainScreen, NavigationMenu, ViewScreen } from '../styles/layout'
import { BrowserRouter } from 'react-router-dom'
import App from '../App'
import Navigation from './navigation/Navigation'

export default function RootWrapper():JSX.Element {
    const { getNavMenu } = useHiddenMenuHandler()

    return (
      <ViewScreen>
        <BrowserRouter>
          <NavigationMenu style={{ width: getNavMenu ? "0%" : "10%" }}>
            <Navigation />
          </NavigationMenu>
          <MainScreen>
            <App />
          </MainScreen>
        </BrowserRouter>
      </ViewScreen>
    )
}
