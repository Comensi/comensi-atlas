import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../../components/Layout'
import PreviewCompatibleImage from '../../components/PreviewCompatibleImage'
import { injectIntl, Link, FormattedMessage } from "gatsby-plugin-intl"

export const PartnersIndexPage = ({ data, intl }) => {
  const { edges: posts } = data.allMarkdownRemark
  const titleKey = "partners-title"
  const descriptionKey = "partners-description"

  return (
    <Layout>
      <div>
        <section className="section section--gradient">
          <div className="container">
            <div className="section">
              <div className="columns">
                <div className="column is-4">

                  <div className="intro">
                    <h3
                      className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
                      style={{
                        lineHeight: '1',
                        padding: '0.25em',
                      }}
                    >
                      <FormattedMessage id={titleKey} />
                    </h3>
                  </div>
                  <div className="content">
                    <p><FormattedMessage id={descriptionKey} /></p>
                  </div>
                </div>
                <div className="features column is-8">
                  <div className="articleGrid columns is-multiline">
                    {posts &&
                      posts.map(({ node: post }) => (
                        <div className="is-parent column is-6" key={post.id}>
                          <article
                            className={` ${
                              post.frontmatter.featuredpost ? 'is-featured' : ''
                              }`}
                          >
                            <header>
                              <p className="post-meta">
                                <Link
                                  className="title is-size-5"
                                  to={post.fields.slug}
                                >
                                  {post.frontmatter.title}
                                </Link>
                              </p>
                              {post.frontmatter.featuredimage ? (
                                <div className="featured-thumbnail">
                                  <PreviewCompatibleImage
                                    imageInfo={{
                                      image: post.frontmatter.featuredimage,
                                      alt: `featured image thumbnail for post ${
                                        post.title
                                        }`,
                                    }}
                                  />
                                </div>
                              ) : null}

                            </header>
                            <p>
                              {post.excerpt}
                              <br />
                              <br />
                            </p>
                          </article>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>)
}

PartnersIndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default injectIntl(PartnersIndexPage)


export const query = graphql`
      query partnerQuery($locale: String) {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "partner-post" } , language: {eq: $locale}} }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                language
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 120, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `