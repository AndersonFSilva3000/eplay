import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

type inputGroupProps = {
  maxWidth?: string
}

type rowProps = {
  marginTop?: string
}

type tabButtonProps = {
  isactive: boolean
}

export const Row = styled.div<rowProps>`
  display: flex;
  column-gap: 24px;
  align-items: flex-end;

  margin-top: ${(props) => props.marginTop || '0'};

  @media (max-width: ${breakpoints.tablet}) {
    display: block;
    margin-top: 16px;
  }
`
export const InputGroup = styled.div<inputGroupProps>`
  flex: auto;

  max-width: ${(props) => props.maxWidth || 'auto'};

  label {
    font-size: 14px;
    margin-bottom: 8px;
    display: block;
  }

  input,
  select {
    background-color: ${colors.white};
    border: 1px solid ${colors.white};
    height: 32px;
    padding: 0 8px;
    width: 100%;

    &.error {
      border: 1px solid red;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    margin-top: 16px;
  }
`

export const TabButton = styled.button<tabButtonProps>`
  background-color: ${(props) =>
    props.isactive ? colors.green : colors.black};
  font-size: 14px;
  font-weight: bold;
  color: ${colors.white};
  border-radius: 8px;
  height: 32px;
  border: none;
  margin-right: 16px;
  padding: 0 8px;
  cursor: pointer;

  img {
    margin-right: 8px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
    margin-top: 8px;
  }
`
