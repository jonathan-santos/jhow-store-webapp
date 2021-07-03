import Button from './'

export default {
  component: Button,
  title: 'atoms/Button'
}

const Template = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  className: 'primary',
  children: 'text'
}
