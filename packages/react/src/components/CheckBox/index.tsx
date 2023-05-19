import { Check } from "phosphor-react";
import { CheckBoxContainer, CheckBoxIndicator } from "./styles";
import { ComponentProps } from "react";

export interface CheckboxProps extends ComponentProps<typeof CheckBoxContainer> {}

export function CheckBox(props: CheckboxProps) {
    return (
       <CheckBoxContainer {...props}>
        <CheckBoxIndicator>
        <Check weight='bold' />
        </CheckBoxIndicator>
       </CheckBoxContainer>
    )
}

CheckBox.displayName = 'CheckBox'