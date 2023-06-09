import  { Checkbox, CheckboxProps, Box, Text } from '@ignite-ui/react'
import type { StoryObj, Meta } from '@storybook/react'

export default {
    title: 'Form/CheckBox',
    component: Checkbox,
    args: {},
    decorators: [
        (Story) => {
            return (
                <Box as='label' css={{display: 'flex', flexDirection: 'row', gap: '$2' }}>
                    <Text size='sm'>Accept terms of use</Text>
                    {Story()}
                </Box>
            )
        }
    ],
} as Meta<CheckboxProps>

export const Primary: StoryObj<CheckboxProps> = {}




