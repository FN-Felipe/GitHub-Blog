import styled from "styled-components";

export const PostContainer = styled.div`
  width: 26rem;
  height: 13rem;
  padding: 2rem;
  gap: 1.25rem;

  display: flex;
  flex-direction: column;

  border-radius: 10px;
  background-color: ${porps => porps.theme['base-post']};
  border: 1px solid transparent;

  h2 {
    color: ${porps => porps.theme['base-title']};
    font-size: 1.125rem;
    height: 3rem;

    display: -webkit-box;
    -webkit-line-clamp: 2;
    overflow: hidden;
    -webkit-box-orient: vertical; 
  }

  p {
    color: ${porps => porps.theme['base-text']};
    font-size: 0.875rem;
    
    display: -webkit-box;
    -webkit-line-clamp: 4;
    overflow: hidden;
    -webkit-box-orient: vertical; 
  }

  span {
    color: ${porps => porps.theme['base-span']};
    font-size: 0.75rem;
    max-width: 95ch
  }

  &:hover {
    border: 1px solid ${props => props.theme['base-label']};
    cursor: pointer;
  }
`

export const ContainerStructure = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  gap: 1rem;

  margin-top: 2.225rem;
  margin-bottom: 10 rem;
`