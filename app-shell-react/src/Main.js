//import logo from "./logo.svg"
import React, { useContext } from "react"
import classes from "./App.module.css"
import NotFound from "./components/pages/NotFound"
import Home from "./components/pages/Home"
import Configuration from "./components/pages/Configuration"
import Layout from "./components/layout/Layout"
import System from "./components/remotes/System"
import ErrorBoundary from "./components/UI/ErrorBoundary"
import {
  Route,
  Switch,
  Redirect,
  BrowserRouter as Router,
} from "react-router-dom"
import localRoutes from "./routes"

import { useRemoteSystem } from "./store/remote-system-context"

function Main() {
  const remotesCtx = useRemoteSystem()

  const routes = [...localRoutes, ...remotesCtx.remotes]
  console.log(remotesCtx)
  return (
    <Router>
      <Layout>
        <React.Suspense fallback={<div>Loading...</div>}>
          <Switch>
            {routes.map((page, index) => {
              console.log("adding route for " + page.routingPath)
              const { component: PageComponent } = page
              return (
                <Route key={page.key} path={page.routingPath} exact>
                  <ErrorBoundary>
                    <PageComponent system={page} />
                  </ErrorBoundary>
                </Route>
              )
            })}
          </Switch>
        </React.Suspense>
      </Layout>
    </Router>
  )
}

export default Main
