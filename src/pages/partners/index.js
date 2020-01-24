import React from 'react'

import Layout from '../../components/Layout'
import PartnerRoll from '../../components/PartnerRoll'

export default class PartnerIndexPage extends React.Component {
  render() {
    let title=null
    let tagline="About"
    let description = 'Strategies for community empowerment in underprivileged neighbourhoods usually include calls for civic participation, however, the intended beneficiaries rarely contribute. If the needs and ideas of the most disadvantaged adults were taken into account, these could help to reduce their risk of social exclusion while providing benefit for the whole community. The project COmmunity ENgagement for Social Inclusion (COMENSI) aims to understand why marginalised adults do not participate and what tools and strategies could be developed to revert this situation. Project partners will work in five challenging EU urban neighbourhoods to create a network of adult educators and professionals to explore the problems and potential solutions.'
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
                <PartnerRoll></PartnerRoll>
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
