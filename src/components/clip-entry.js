import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

const ClipEntry = ({ data }) => (
  <div class="clip-entry">
    <a href={data.frontmatter.link}>
      <span className="clip-title">{data.frontmatter.title},</span>
      <span className="clip-publisher">{data.frontmatter.publisher}</span>
    </a>
  </div>
)

export default ClipEntry