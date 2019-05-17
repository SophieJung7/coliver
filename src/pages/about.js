import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"

import BackgroundModule from "../components/Globals/BackgroundModule/BackgroundModule"
import Info from "../components/Home/Info/Info"

const AboutPage = ({ data }) => {
  const backgroundImg = data.img.childImageSharp.fluid

  return (
    <Layout>
      <SEO title="Coliver" keywords={[`gatsby`, `application`, `react`]} />
      <BackgroundModule
        backgroundImg={backgroundImg}
        styleClass="about_background"
        title="About us"
      />
      <Info />
    </Layout>
  )
}

export const query = graphql`
  {
    img: file(relativePath: { eq: "about-background.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
export default AboutPage
