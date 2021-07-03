import React from 'react'
import { render, screen } from '@testing-library/react'

import Button from './index'

describe('<Button />', () => {
  it('render without props', () => {
    render(<Button>text</Button>)

    expect(screen.getByRole('button')).toHaveTextContent('text')
  })
})
