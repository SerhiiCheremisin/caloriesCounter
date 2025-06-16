import React, { JSX } from 'react'
import { HiddenNav, DropdownMenu } from '../../styles/navigationStyles'
import LinkListItself from './LinkListItself'

export default function HiddenNavigation():JSX.Element {
  
  
  return (
   <nav>
    <HiddenNav>
      <DropdownMenu>
       <LinkListItself isAngled = {true}/>
      </DropdownMenu>
    </HiddenNav>
   </nav>  
  )
}
