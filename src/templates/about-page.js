import React from 'react'
import PropTypes from 'prop-types'
import { Graphql } from 'gatsby'

import Layout from '../components/Layout'
import { HTMLContent } from '../components/Content'
import StructuredTemplate from '../components/StructuredTemplate'

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data
  //const { frontmatter } = data.markdownRemark


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

AboutPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default AboutPage

export const pageQuery = graphql`
  query AboutPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "about-page" } }) {
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

