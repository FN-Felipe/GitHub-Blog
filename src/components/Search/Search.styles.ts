import styled from "styled-components";

export const SearchContainer = styled.input`
  width: 100%;
  padding: 0.875rem 1rem;

  border-radius: 6px;
  border: 1px solid ${props => props.theme['base-border']};

  background-color: ${props => props.theme['base-input']};
  color: ${props => props.theme['base-text']};

  &:focus {
    border: 1px solid ${props => props.theme['blue']};
  }

  &::placeholder {
    color: ${props => props.theme['base-label']};
  }
`