import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"

// import { useSiteMetadata } from "../hooks/use-site-metadata"
// import Header from "./header"
import "./layout.css"
import Footer from "../footer"

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <link rel="stylesheet" href="https://use.typekit.net/hiv2ccq.css" />
      </Helmet>
      <main>{children}</main>
      <Footer></Footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
