import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const FeatureGrid = ({ gridItems }) => (
  <div className="featureGrid columns is-multiline">
    {gridItems.map(item => (
      <div key={item.text1} className="column is-4">
        <section className="section">
          <div className="">
            {item.title && <h3>{item.title}</h3>}
            <div
              style={{
                width: '100%',
                display: 'inline-block',
              }}
            >
              <PreviewCompatibleImage imageInfo={item} />
            </div>
          </div>
          <p>{item.text1}</p>
          <p>{item.text2}</p>
          <p 
            style={{
              paddingTop: '1em'
            }}
          
          ><a
            className="has-text-weight-bold"
            href={item.linkUrl}> {item.linkText}</a>
          </p>
        </section>
      </div>
    ))}
  </div>
)

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      linkUrl: PropTypes.string,
      linkText: PropTypes.string,
      text1: PropTypes.string,
      text2: PropTypes.string,
      
    })
  ),
}

export default FeatureGrid
