import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"

import BackgroundModule from "../components/Globals/BackgroundModule"

const IndexPage = ({ data }) => {
  const backgroundImg = data.img.childImageSharp.fluid

  return (
    <Layout>
      <SEO title="Coliver" keywords={[`gatsby`, `application`, `react`]} />
      <BackgroundModule
        backgroundImg={backgroundImg}
        title="Coliver"
        styleClass="home-background"
      />
    </Layout>
  )
}

export const query = graphql`
  {
    img: file(relativePath: { eq: "home-background.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
export default IndexPage
