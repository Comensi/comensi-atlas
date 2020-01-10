import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Features from '../components/Features'
import Content, { HTMLContent } from '../components/Content'
import StructuredTemplate from '../components/StructuredTemplate'

const AtlasesPage = ({ data }) => {
  const { markdownRemark: post } = data


  return (
    <Layout>
      <StructuredTemplate
        image={post.frontmatter.image}
        title={post.frontmatter.title}
        tagline={post.frontmatter.tagline}
        description={post.frontmatter.description}
        intro={post.frontmatter.intro}
        content={post.html}
        contentComponent={HTMLContent}

      />
    </Layout>
  )
}

AtlasesPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default AtlasesPage

export const pageQuery = graphql`
  query AtlasesPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "atlases-page" } }) {
      html
      frontmatter {
        title        
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }        
        tagline        
        description
        intro {
          heading
          description
          blurbs {
            title
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }            
            text1
            text2
            linkText
            linkUrl
          }
          
        }
      }
    }
  }
`

