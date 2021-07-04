import Section from './'

export default {
  component: Section,
  title: 'atoms/Section',
  parameters: {
    backgrounds: {
      default: 'background'
    }
  }
}

const Template = (args) => <Section {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Text'
}

export const BigContent = Template.bind({})
BigContent.args = {
  children: (
    <div
      style={{
        width: '100%',
        height: '25rem',
        padding: '1rem',
        backgroundColor: 'var(--color-primary)',
        color: 'var(--color-text-light)'
      }}>
      Text
    </div>
  )
}

export const Multiple = (args) => (
  <>
    <Template {...args} />
    <Template {...args} />
    <Template {...args} />
  </>
)
Multiple.args = {
  children: 'Text'
}
