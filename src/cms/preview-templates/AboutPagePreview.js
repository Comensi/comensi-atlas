import React from 'react'
import PropTypes from 'prop-types'
import StructuredTemplate from '../../components/StructuredTemplate'

const AboutPagePreview = ({ entry, getAsset, widgetFor }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <StructuredTemplate
        image={data.image}
        title={data.title}
        heading={data.heading}        
        description={data.description}
        intro={data.intro || { blurbs: [] }}     
        content={widgetFor('body')}   
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
  widgetFor: PropTypes.func,
}

export default AboutPagePreview
