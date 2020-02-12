import React from 'react'
import Layout from '../../components/Layout'
import PreviewCompatibleImage from '../../components/PreviewCompatibleImage'
import { injectIntl, Link, FormattedMessage } from "gatsby-plugin-intl"

export const HandbookIndexPage = ({intl}) => {
  const titleKey = "handbook-title"
  const descriptionKey = "handbook-description"

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
                  <FormattedMessage id="handbook-available" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>)
}

export default injectIntl(HandbookIndexPage)

