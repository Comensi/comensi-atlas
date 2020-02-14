import React from 'react'
import PropTypes from 'prop-types'
import { PartnerPostTemplate } from '../../templates/blog-post'

const PartnerPostPreview = ({ entry, widgetFor }) => (
  <BlogPostTemplate
    content={widgetFor('body')}    
    title={entry.getIn(['data', 'title'])}
  />
)

BlogPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default PartnerPostPreview
