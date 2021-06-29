import React, { createContext, useState } from "react"
import useFetch from "../hooks/fetch"

export const EnvContext = createContext()

const EnvContextProvider = ({ children }) => {
  const [env, setEnv] = useState({})
  const { isLoading, error, sendRequest: fetchEnv } = useFetch()

  useEffect(() => {
    fetchEnv({ url: `${__webpack_public_path__}env-config.json` }, setEnv)
  }, [fetchTasks])
  return isLoading ? (
    "Loading..."
  ) : (
    <EnvContext.Provider value={env}>{children}</EnvContext.Provider>
  )
}

export default EnvContextProvider
