import styled from 'styled-components'
import { withContainer } from '../../utils'
import { primary, secondary, success, danger } from '../../styles/colors'

export const Button = styled.button`
  transition: 0.2s;
  padding: 10px;
  background-color: transparent;
  border: solid 1px;
  border-radius: 5px;
  cursor: pointer;
  color: ${({ color }) => color};
  text-transform: uppercase;
  :hover {
    border-color: transparent;
    color: ${({ backgroundColor = 'white' }) => backgroundColor};
    background-color: ${({ color = 'black' }) => color};
  }
`

export const PrimaryButton = withContainer({
  color: primary,
})(Button)

export const SecondaryButton = withContainer({
  color: secondary,
})(Button)

export const SuccessButton = withContainer({
  color: success,
})(Button)

export const DangerButton = withContainer({
  color: danger,
})(Button)
