import React from 'react'

import Layout from '../../components/Layout'
import ToolRoll from '../../components/ToolRoll'

export default class ToolIndexPage extends React.Component {
  render() {
    let title=null
    let tagline="Toolkit"
    let description = 'A collection of tools for community engagement chosen to work with adults living in underprivileged urban areas. It includes a description of the general methodology and a detailed description of exercises selected by the different partners.'
    let intro = {
      'heading': null,
      'description' : null,
    }
    return (
      <Layout>
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
                </div>
              </div>
              <div className="features column is-8">
                {intro.heading && <h3
                  className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
                >{intro.heading}</h3>}
                {intro.description && <p>{intro.description}</p>}
                <ToolRoll></ToolRoll>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
      </Layout>
    )
  }
}
