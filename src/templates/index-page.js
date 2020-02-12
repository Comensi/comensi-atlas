import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import { injectIntl, Link, FormattedMessage } from "gatsby-plugin-intl"

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,  
  description,  
  content,
  contentComponent,
  intl

}) => {
  const PostContent = contentComponent || Content
  return (
    <div>           
      <section className="section section--gradient">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-4">
                <div className="intro">
                <h1
            className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
            style={{              
              
              lineHeight: '1',
              padding: '0.25em',
            }}
          >
            {title}
          </h1>
          <h3
            className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
            style={{
              
              lineHeight: '1',
              padding: '0.25em',
            }}
          >
            {subheading}
          </h3>
                </div>
                <div >            
                      <h3 className="has-text-weight-semibold">
                        {heading}
                      </h3>                      
                </div>
              </div>
              <div className="content column is-8">
              <p>{description}</p>
              <PostContent content={content} />

              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )}

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,  
  subheading: PropTypes.string,  
  description: PropTypes.string,  
  content: PropTypes.string,  
}

const IndexPage = ({ data, intl }) => {
  const { markdownRemark: post } = data  
  //const { frontmatter } = data.markdownRemark

  return (
    <Layout>      
      <IndexPageTemplate
        image={post.frontmatter.image}
        title={post.frontmatter.title}
        subheading={post.frontmatter.subheading}
        heading={post.frontmatter.heading}
        description={post.frontmatter.description}        
        content={post.html}
        contentComponent={HTMLContent}
        intl={intl}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,    
  }),
}

export default injectIntl(IndexPage)

export const pageQuery = graphql`
  query IndexPageTemplate($locale: String) {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" }, language: {eq: $locale} }) {
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
        subheading
        heading        
        description        
      }
    }
  }
`
