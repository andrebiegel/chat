import React from "react"
import Main from "./Main"
import RemoteSystemContextProvider from "./store/remote-system-context"

const App = () => {
  return (
    <>
      <RemoteSystemContextProvider>
        <Main />
      </RemoteSystemContextProvider>
    </>
  )
}

export default App
