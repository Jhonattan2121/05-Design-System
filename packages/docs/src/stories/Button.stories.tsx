import  { Button, ButtonProps } from '@ignite-jhon/react'
import type { StoryObj, Meta } from '@storybook/react'
import { ArrowRight } from 'phosphor-react'

export default {
    title: 'Form/Button',
    component: Button,
    args: {
        children: 'send',
        variant: 'primary',
        size: 'md',
        disabled: false,
    },
    argTypes: {
        variant: {
           options: ['primary', 'secondary', 'tertiary'],
           control: {
               type:'inline-radio',
           },
        },
        size: {
            options: ['sm', 'md'],
            control: {
                type:'inline-radio',
            },
         },
         disabled: {
            control: {
                type: 'boolean',
            },
         },
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

