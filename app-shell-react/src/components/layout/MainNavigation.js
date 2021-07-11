import React from "react"
import { Link } from "react-router-dom"
import classes from "./MainNavigation.module.css"
import { useRemoteSystem } from "../../store/remote-system-context"

function MainNavigation() {
  const remotesCtx = useRemoteSystem()

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {remotesCtx.remotes.map((remote, index) => {
          return (
            <li key={remote.key}>
              <Link to={remote.routingPath}>{remote.linkName}</Link>
            </li>
          )
        })}
        <li>
          <Link to="/configuration">Configuration</Link>
        </li>
      </ul>
    </nav>
  )
}

export default MainNavigation
