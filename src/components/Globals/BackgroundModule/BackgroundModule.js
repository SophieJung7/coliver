import React from "react"
import BackgroundImage from "gatsby-background-image"
import "./BackgroundModule.scss"

const BackgroundModule = ({ backgroundImg, styleClass, children, title }) => {
  return (
    <BackgroundImage className={styleClass} fluid={backgroundImg}>
      <div>
        <h1 className="background_customize-bigMessage text-uppercase text-center display-4 font-weight-bold">
          {title}
        </h1>
      </div>
      {children}
    </BackgroundImage>
  )
}

BackgroundModule.defaultProps = {
  styleClass: "background_customize",
}

export default BackgroundModule
