import React from 'react'
import PropTypes from 'prop-types'

const Content = ({props}) => (
    <div>
        {props.stepNumber}
    </div>
)

Content.propTypes = {
    stepNumber: PropTypes.string,
  }
  
Content.defaultProps = {
    stepNumber: 1,
}

export default Content
