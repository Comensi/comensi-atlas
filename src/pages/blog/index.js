import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section section--gradient">
          <div className="container">           
              <div className="intro">

                <h1
                  className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-2-widescreen"
                  style={{
                    lineHeight: '1',
                    padding: '0.25em',
                  }}
                >
                  Project blog
                    </h1>

              </div>          
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="content">
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
