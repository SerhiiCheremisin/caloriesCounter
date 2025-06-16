import { LinkList, StyledNavLink, LinkListLi } from '../../styles/navigationStyles'
import { IRoutes } from '../../services/types/sharedTypes'
import { appRoutes } from '../../services/shared/routes'
import { AppButton } from '../../styles/sharedStyles'
import { JSX } from 'react'
import { logOuter } from '../../services/functions/sessionStorageFunctions'
import { useCommonDispatch } from '../../services/hooks/useCommonDispatch'


interface ILinkListItselfProps {
  isAngled: boolean
}

export default function LinkListItself({ isAngled } :ILinkListItselfProps ):JSX.Element {
  
  const dispatch = useCommonDispatch()
  
  return (
      <LinkList style={{ padding: isAngled ? "5px" : "20px", gap: isAngled ? "2px" : "10px" }}>
          { appRoutes.map( (el:IRoutes) => {
            if (el.name === "Login") return null
            return(
             <LinkListLi angle={isAngled ? el.angle : 0} key={el.path}>
               <StyledNavLink  to={el.path}>{el.name}</StyledNavLink></LinkListLi>
            )
          }) }
          <AppButton onClick={() => logOuter(dispatch)} style={{ width: "50%", transform: `rotate(${isAngled ? 40 : 0}deg)`, marginTop: "25px" }} >Logout</AppButton>
      </LinkList>  
  )
}
