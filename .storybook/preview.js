import '!style-loader!css-loader!sass-loader!../src/styles/global.scss'

export const parameters = {
  controls: { expanded: true },
  backgrounds: {
    default: 'light',
    values: [
      { name: 'light', value: '#ffffff' },
      { name: 'dark', value: '#111111' },
      { name: 'background', value: '#eeeeee' }
    ]
  }
}

export const decorators = [
  (storyFn) => <div style={{ padding: '16px' }}>{storyFn()}</div>
]
