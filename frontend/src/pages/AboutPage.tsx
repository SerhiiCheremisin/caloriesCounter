import React, { JSX, useEffect } from 'react'
import { AppButton } from '../styles/sharedStyles' 
import { AboutList } from '../styles/about'

import { findOneUserFromCustomDatabase } from '../services/functions/databaseHandler'
import { todayHasEaten } from '../services/functions/sharedFunctions'

import { useAuthState } from '../services/hooks/useAuthState'
import useGetCustomData from '../services/hooks/useGetCustomData'
import useSetCustomData from '../services/hooks/useSetCustomData'

export default function AboutPage():JSX.Element {
  const { userName } = useAuthState()
  const { calories_limit : limit, intake_history: history  } = useGetCustomData()
  const { setAllCustomData } = useSetCustomData()
 
  useEffect( () => {
        findOneUserFromCustomDatabase(userName)
        .then( (data) => {
          setAllCustomData(data.id, data.custom_recipes, data.intake_history, data.calories_limit )
        })
  }, [])

  return (
    <AboutList>
      <li>{`Hello ${userName}`}</li>
      <li>{`Daily calories limitation : ${limit}`}<AppButton>Change the limit</AppButton></li>
      <li>{`Have eaten today : ${todayHasEaten(history)}`}</li>
    </AboutList>
  )
}
