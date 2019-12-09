import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from './Layout'
import Features from './Features'
import Content, { HTMLContent } from './Content'

export const StructuredTemplate = ({
  image,
  title,
  tagline,
  description,
  intro,
  content,
  contentComponent,
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
                  {title &&
                    <h1
                      className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-2-widescreen"
                      style={{
                        lineHeight: '1',
                        padding: '0.25em',
                      }}
                    >
                      {title}
                    </h1>
                  }
                  {tagline &&
                    <h3
                      className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
                      style={{
                        lineHeight: '1',
                        padding: '0.25em',
                      }}
                    >
                      {tagline}
                    </h3>
                  }
                </div>
                <div className="content">
                  <p>{description}</p>
                  <PostContent content={content} />
                </div>
              </div>
              <div className="features column is-8">
                {intro.heading && <h3
                  className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
                >{intro.heading}</h3>}
                {intro.description && <p>{intro.description}</p>}
                {<Features gridItems={intro.blurbs} />}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

StructuredTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  tagline: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
    heading: PropTypes.string,
    description: PropTypes.string,
  }),
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

export default StructuredTemplate