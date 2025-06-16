import React, { JSX, useState } from 'react'
//Navigation components
import ClassicalNavigation from './ClassicalNavigation';
import HiddenNavigation from './HiddenNavigation';
import { AppButton } from '../../styles/sharedStyles';
import { useHiddenMenuHandler } from '../../services/hooks/useHiddenMenuHandler';

export default function NavigationList():JSX.Element {
  const { getNavMenu, setNavMenu } = useHiddenMenuHandler()

  return (
    <>
     <AppButton style={{position: "absolute", left: "2%", top: "2%"}} 
                  onClick={() => setNavMenu(!getNavMenu)}> { getNavMenu ? "Expand menu" : "Hide menu" } </AppButton>
      {getNavMenu ? <HiddenNavigation /> : <ClassicalNavigation />}
    </>
  )
}
