import React from "react"
import classes from "./Layout.module.css"
import MainNavigation from "./MainNavigation"

const Layout = (props) => {
  return (
    <>
      <main className={classes.main}>{props.children}</main>
      <footer>
        <MainNavigation />
      </footer>
    </>
  )
}

export default Layout
