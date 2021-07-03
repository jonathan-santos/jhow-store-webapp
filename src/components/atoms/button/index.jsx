import React from 'react'
import PropTypes from 'prop-types'

import styles from './button.module.scss'

export const Button = ({ children }) => (
  <button className={styles.button}>{children}</button>
)

Button.propTypes = {
  children: PropTypes.node.isRequired
}

export default Button
