import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"

import BackgroundModule from "../components/Globals/BackgroundModule/BackgroundModule"
import Info from "../components/Home/Info/Info"
import Menu from "../components/Home/Menu/Menu"

const IndexPage = ({ data }) => {
  const backgroundImg = data.img.childImageSharp.fluid

  return (
    <Layout>
      <SEO title="Coliver" keywords={[`gatsby`, `application`, `react`]} />
      <BackgroundModule
        backgroundImg={backgroundImg}
        styleClass="background_customize"
        title={`We deliver great coffee to your home`}
      />
      <Info />
      <Menu items={data.menu} />
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
    menu: allContentfulCoffeeItem {
      edges {
        node {
          id
          title
          price
          category
          description {
            description
          }
          image {
            fixed(width: 50, height: 50) {
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }
  }
`
export default IndexPage
