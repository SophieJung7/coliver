import React from "react"
import BackgroundImage from "gatsby-background-image"

const BackgroundModule = ({ backgroundImg, styleClass, title, children }) => {
  return (
    <BackgroundImage className={styleClass} fluid={backgroundImg}>
      <h1 className="background-brand text-uppercase text-center display-4 font-weight-bold">
        {title}
      </h1>
      <div>We deliver great coffee to your door.</div>
      {children}
    </BackgroundImage>
  )
}

BackgroundModule.defaultProps = {
  title: "Default Title",
  styleClass: "home-background",
}

export default BackgroundModule
