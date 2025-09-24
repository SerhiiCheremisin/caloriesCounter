import React, { JSX, useEffect, useState } from 'react'
import { AppButton } from '../styles/sharedStyles' 
import { AboutList } from '../styles/about'

import { findOneUserFromCustomDatabase , sendAnewLimit  } from '../services/functions/databaseHandler'
import { todayHasEaten } from '../services/functions/sharedFunctions'

import { useAuthState } from '../services/hooks/useAuthState'
import useGetCustomData from '../services/hooks/useGetCustomData'
import useSetCustomData from '../services/hooks/useSetCustomData'

export default function AboutPage():JSX.Element {
  const { userName } = useAuthState()
  const { calories_limit : limit, intake_history: history  } = useGetCustomData()
  const { setAllCustomData, setLimit } = useSetCustomData()
  const [isLimitShouldBeChanged, setIsLimitShouldBeChanged] = useState(false)
  const [newLimit, setNewLimit] = useState("")
 
  useEffect( () => {
        findOneUserFromCustomDatabase(userName)
        .then( (data) => {
          setAllCustomData(data.id, data.custom_recipes, data.intake_history, data.calories_limit )
        })
  }, [])

  const limitChangeHandler = ():void => {
        sendAnewLimit(userName, (Number(newLimit)))
        .then( (data) => {
          setNewLimit("")
          setIsLimitShouldBeChanged(false)
          setLimit(data.calories_limit)
        })
  }

  return (
    <AboutList>
      <li>{`Hello ${userName}`}</li>
      <li>{`Daily calories limitation : ${limit}`}<AppButton onClick={() => setIsLimitShouldBeChanged(!isLimitShouldBeChanged)}>Change the limit</AppButton></li>
      { isLimitShouldBeChanged && <li><input value={newLimit} onChange={(e) => setNewLimit(e.target.value.replace(/[^0-9]/g, "")) }>
                                    </input><AppButton onClick={() => limitChangeHandler()}>Set</AppButton></li> }
      <li>{`Have eaten today : ${todayHasEaten(history)}`}</li>
    </AboutList>
  )
}
