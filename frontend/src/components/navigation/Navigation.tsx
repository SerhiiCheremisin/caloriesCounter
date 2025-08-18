import React, { JSX } from 'react'
import NavigationList from './NavigationList'
import { useAuthState } from '../../services/hooks/useAuthState'

export default function Navigation():JSX.Element {
  const { isUserLogged } = useAuthState() 
  
  if ( isUserLogged ) {
    return ( <NavigationList/> )
  }
  return (
      <h1>You need to login</h1>
  )
}
