import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import { injectIntl, Link, FormattedMessage } from "gatsby-plugin-intl"
import Img from 'gatsby-image'

export const AtlasPostTemplate = ({
  content,
  contentComponent,
  description,
  title,
  helmet,
  logos
}) => {
  const PostContent = contentComponent || Content

  return (
    <section className="section">
      {helmet || ''}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <Link to='/atlases'> &lt; <FormattedMessage id="menu-atlases"></FormattedMessage></Link>
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <p>{description}</p>
            <PostContent content={content} />
            {logos && logos.length ? (
              <div style={{ marginTop: `4rem` }}>
                <h4><FormattedMessage id="atlases-partner-label"></FormattedMessage></h4>
                <ul className="taglist">
                  {logos.map( logo=> (
                    <li >
                      <a href={logo.url} title={logo.title}>
                      <Img alt={logo.title} fixed={logo.image.childImageSharp.fixed}  />     
                      </a>                 
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}

AtlasPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
  logos: PropTypes.array
}

const AtlasPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <AtlasPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }       
        title={post.frontmatter.title}
        logos={post.frontmatter.logos}
      />
    </Layout>
  )
}

AtlasPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default AtlasPost

export const pageQuery = graphql`
  query AtlasPostByID($id: String!, $locale:String) {
    markdownRemark(id: { eq: $id }, frontmatter: {language: {eq: $locale}}) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description        
        language
        logos {
          title
          url
          image {
              childImageSharp {
                fixed(width: 100) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
        }  
      }
    }
  }
`
