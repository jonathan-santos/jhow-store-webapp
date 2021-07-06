import Title from '.'

export default {
  component: Title,
  title: 'atoms/Title'
}

const Template = (args) => <Title {...args} />

export const Level1 = Template.bind({})
Level1.args = {
  children: 'Text'
}

export const Level2 = Template.bind({})
Level2.args = {
  children: 'Text',
  level: '2'
}

export const Level3 = Template.bind({})
Level3.args = {
  children: 'Text',
  level: '3'
}
