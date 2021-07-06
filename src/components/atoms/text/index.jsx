import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import styles from './text.module.scss'

export const Text = (props) => {
  const { children, type, color } = props

  const TextElement = type
  const classNames = classnames(styles.text, styles[type], styles[color])

  return (
    <TextElement {...props} className={classNames}>
      {children}
    </TextElement>
  )
}

Text.defaultProps = {
  type: 'p',
  color: 'dark'
}

Text.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['p', 'span']),
  color: PropTypes.oneOf(['dark', 'light'])
}

export default Text
