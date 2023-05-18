import  { Avatar, AvatarProps } from '@ignite-ui/react'
import type { StoryObj, Meta } from '@storybook/react'

export default {
    title: 'Typography/Avatar',
    component: Avatar,
    args: {
        src: 'https://github.com/jhonattan2121.png',
        alt: 'Jhonattan Ferri',
    },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
    args: {
        src: undefined,
    },
}



