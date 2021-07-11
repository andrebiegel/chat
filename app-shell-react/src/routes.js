import React from "react"

const Home = React.lazy(() => import("./components/pages/Home"))
const NotFound = React.lazy(() => import("./components/pages/NotFound"))
const Configuration = React.lazy(() =>
  import("./components/pages/Configuration")
)
const localRoutes = [
  {
    url: "local",
    scope: "local",
    module: "local",
    key: "Home",
    linkName: "Home",
    routingPath: "/",
    component: Home,
  },
  {
    url: "local",
    scope: "local",
    module: "local",
    key: "Configuration",
    linkName: "Configuration",

    routingPath: "/configuration",
    component: Configuration,
  },

  // {
  //url: "local",
  //scope: "local",
  //module: "local",
  //key: "NotFound",
  //linkName: "NotFound",
  //routingPath: "/*",
  //component: NotFound,
  //},
]

export default localRoutes
