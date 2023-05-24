
import  { CheckBox, CheckboxProps, Box, Text } from '@ignite-jhon/react'
import type { StoryObj, Meta } from '@storybook/react'

export default {
    title: 'Form/CheckBox',
    component: CheckBox,
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




