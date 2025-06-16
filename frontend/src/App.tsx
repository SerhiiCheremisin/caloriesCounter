import { Navigate, Route, Routes, useLocation } from "react-router-dom"
import useAuthState from "./services/hooks/useAuthState"
import { appRoutes } from "./services/shared/routes"
import { useEffect } from "react"
import { appSessionChecker } from "./services/functions/sessionStorageFunctions" 
import { useCommonDispatch } from "./services/hooks/useCommonDispatch"
import { setUserLogged, setUserName } from "./redux/slices/userSlice"

function App() {
  const { isUserLogged } = useAuthState()
  const location = useLocation()
  const dispatch = useCommonDispatch()

  useEffect( () => {
   const checkSession = async () => {
    try {
      const data = await appSessionChecker()
      if (data != null) {
        dispatch(setUserLogged(true))
        dispatch(setUserName(data))
      }
    } catch (error) {
      console.error("Session check failed:", error)
    }
  };
  checkSession();
  }, [])

  if (isUserLogged && location.pathname === "/login") {
    return <Navigate to="/about" replace />
  }

  if (!isUserLogged && location.pathname !== "/login") {
    return <Navigate to="/login" replace />
  }

  return (
    <Routes>
      {appRoutes.map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}
      <Route
        path="*"
        element={<Navigate to={isUserLogged ? "/about" : "/login"} replace />}
      />
    </Routes>
  )
}

export default App
