import styled from "styled-components";

export const BlogRoot = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
`

export const BlogContainer = styled.div`
  display: flex;
  flex-direction: column;

  h3 {
    color: ${props => props.theme['base-subtitle']};
    font-size: 1.125rem;
  }
`

export const PostsContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  margin-top: 4.5rem;
  gap: 0.875rem;
`