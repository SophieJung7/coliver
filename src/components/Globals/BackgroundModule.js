import React from "react"
import BackgroundImage from "gatsby-background-image"

const BackgroundModule = ({ backgroundImg, styleClass, title, children }) => {
  return (
    <BackgroundImage className={styleClass} fluid={backgroundImg}>
      <h1 className="title text-white text-uppercase text-center display-4 font-weight-bold">
        {title}
      </h1>
      {children}
    </BackgroundImage>
  )
}

BackgroundModule.defaultProps = {
  title: "Default Title",
  styleClass: "home-background",
}

export default BackgroundModule
