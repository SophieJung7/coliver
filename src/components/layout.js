import React from "react"
import PropTypes from "prop-types"

import "./bootstrap.min.css"
import "./layout.scss"

import Navbar from "./Globals/Navbar/Navbar"
import Footer from "./Globals/Footer/Footer"

const Layout = ({ children }) => (
  <>
    <Navbar />
    {children}
    <Footer />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
