import  { Button, ButtonProps } from '@ignite-ui/react'
import type { StoryObj, Meta } from '@storybook/react'
import { ArrowRight } from 'phosphor-react'

export default {
    title: 'Form/Button',
    component: Button,
    args: {
        children: 'send',
    },
    argTypes: {
        onClick: { action: 'clicked' },
    },
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}

export const Secondary: StoryObj<ButtonProps> = {
    args: {
        variant: 'secondary',
        children: 'Create New',
        
    },
}

export const Tertiary: StoryObj<ButtonProps> = {
    args: {
        variant: 'tertiary',
        children: 'Cancel',
    },
}

export const Small: StoryObj<ButtonProps> = {
    args: {
        size: 'sm',
    },
}

export const WithIcon: StoryObj<ButtonProps> = {
    args: {
        children: (
            <>
                Próximo passo
                <ArrowRight weight='bold'/>
            </>
        ),
    },
}

export const disabled: StoryObj<ButtonProps> = {
    args: {
        disabled: true,
    },
}

