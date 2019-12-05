import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import { Link } from 'gatsby'

const FeatureGrid = ({ gridItems }) => (
  <div className="columns is-multiline">    
    {gridItems.map(item => (
      <div key={item.text1} className="column is-4">
        <section className="section">
          <div className="">
            <h3>{item.title}</h3>
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
            <p><a  href={item.link}> {item.linkText}</a>
          </p>
        </section>
      </div>
    ))}
  </div>
)

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      linkUrl: PropTypes.string,
      text1: PropTypes.string,
      text2: PropTypes.string,
      title: PropTypes.string,
      linkText: PropTypes.string,
      
    })
  ),
}

export default FeatureGrid
