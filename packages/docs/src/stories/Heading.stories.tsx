import  { Heading, HeadingProps } from '@ignite-ui/react'
import type { StoryObj, Meta } from '@storybook/react'

export default {
    title: 'Typography/Heading',
    component: Heading,
    args: {
        children: 'Custom title '
    },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
    args: {
        children: 'h1 Heading',
        as: 'h1'
    },
    parameters: {
        docs: {
            description: {
                story: 'Por padrão o heading sempre será um `h2`, mas podemos alterar isso com a propriedade `as`.'
            },
        },
    },
}

