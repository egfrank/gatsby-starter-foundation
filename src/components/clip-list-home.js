import React from "react"
import { StaticQuery, graphql } from "gatsby"
// import { RiArrowRightSLine } from "react-icons/ri"

import ClipEntry from "./clip-entry"

const ClipSection = ({ data }) => (
  <section className="home-posts">
    <h2 class="latest">Clips</h2>
    <div className="grids col-1 sm-2 lg-3">
      {data}
    </div>
  </section>
)

export default function ClickListHome() {
  return (
    <StaticQuery 
      query={graphql`
        query {
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { frontmatter: { template: { eq: "clip-entry" } } }
            limit: 6
          ) {
            edges {
              node {
                id
                excerpt(pruneLength: 250)
                frontmatter {
                  date(formatString: "MMMM DD, YYYY")
                  title
                  publisher
                  link
                }
              }
            }
          }
        }`
      }

      render={ data => {
          const posts = data.allMarkdownRemark.edges
            .filter(edge => !!edge.node.frontmatter.date)
            .map(edge =>
              <ClipEntry key={edge.node.id} data={edge.node} />
          )
          return <ClipSection data={posts} />
        } 
      }
    />
  )
}

