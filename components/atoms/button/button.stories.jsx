import Button from './index'

export default {
  component: Button,
  title: 'atoms/Button'
}

const Story = (args) => <Button {...args} />

export const Primary = Story.bind({})
Primary.args = {
  className: 'primary',
  children: 'text'
}
