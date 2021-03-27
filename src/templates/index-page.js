import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import ClipListHome from "../components/clip-list-home"
import BlogListHome from "../components/blog-list-home"
import SEO from "../components/seo"

export const pageQuery = graphql`
  query HomeQuery($id: String!){
		markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        tagline
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 2400, maxHeight: 3000, quality: 80, srcSetBreakpoints: [960, 1440]) {
              ...GatsbyImageSharpFluid
            }
            sizes {
              src
            }
          }
        }
        cta {
          ctaText
          ctaLink
        }
      }
    }
  }
`

const HomePage = ({ location, data }) => {

  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  const Image = frontmatter.featuredImage ? frontmatter.featuredImage.childImageSharp.fluid : ""
	return (
		<Layout location={location}>
      <SEO/>
      <div className="home-banner grids col-1 sm-2">
        <div>
          <div>
            {Image ? (
              <Img 
                fluid={Image} 
                alt={frontmatter.title + ' - Featured image'}
                className="featured-image"
              />
            ) : ""}
          </div>
        </div>
        <div className="description" dangerouslySetInnerHTML={{__html: html}}/>
      </div>
      <ClipListHome/>
      <BlogListHome/>
		</Layout>
	)
}

export default HomePage
