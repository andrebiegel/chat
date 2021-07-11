import React, { createContext, useState, useContext } from "react"
import System from "../components/remotes/System"

const DUMMY_REMOTES = [
  {
    url: "http://localhost:8083/remoteEntry.js",
    scope: "ffopsChat",
    module: "./App",
    key: "chat-app",
    routingPath: "/chat",
    component: System,
    linkName: "Chat",
  },
]

const RemoteSystemContext = createContext({
  remotes: DUMMY_REMOTES,
})

export function useRemoteSystem() {
  return useContext(RemoteSystemContext)
}
function RemoteSystemContextProvider(props) {
  const [remotes, setRemotes] = useState(DUMMY_REMOTES)
  const context = {
    remotes: remotes,
  }
  return (
    <RemoteSystemContext.Provider value={context}>
      {props.children}
    </RemoteSystemContext.Provider>
  )
}

export default RemoteSystemContextProvider
