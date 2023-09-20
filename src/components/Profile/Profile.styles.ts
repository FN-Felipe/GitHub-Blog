import styled  from "styled-components";

export const ContainerProfile = styled.div`
  width: 54rem;
  display: flex;
  gap: 2rem;

  border-radius: 10px;
  padding: 2.5rem 2rem;
  align-items: center;

  background-color: ${props => props.theme['base-profile']};
  color: ${props => props.theme['base-label']};
  box-shadow: 0px 10px 30px ${props => props.theme['base-input']};

  img {
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 8px;
  }

  h2 {
    color: ${props => props.theme['base-title']};
    font-size: 1.25rem;
  }

  p {
    margin-top: 0.5rem;
    color: ${props => props.theme['base-text']};
    font-size: 0.875rem;
  }

  span {
    color: ${props => props.theme['base-subtitle']};
    font-size: 0.875rem;
  }

  a {
    color: ${props => props.theme['blue']};
    height: fit-content;
    font-size: 0.75rem;
    gap: 0.5rem;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`