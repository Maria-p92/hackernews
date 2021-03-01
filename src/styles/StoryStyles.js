import styled from 'styled-components';

export const StoryWrapper = styled.section`
  padding-top: 10px;
  margin-bottom: 20px;
  border-top: 1px solid #bd7dde;
  &:first-of-type {
    border-top: 0;
  }
  &:last-of-type {
    margin-bottom: 0;
    padding-bottom: 0;
  }
`;

export const StoryTitle = styled.h1`
  margin-bottom: 5px;
  font-size: 18px;
  line-height: 1.8;
  margin: 0;
  text-decoration: none;
  a {
    color: #bd7dde;
    text-decoration: none;
  }
  a :hover{
    mix-blend-mode: exclusion;
  } 
`;

export const StoryMeta = styled.div`
  {
    
    opacity: 0.8;
    font-size: 0.9rem;
  }
  > span:first-child {
    margin-right: 10px;
  }
  > span:not(:first-child):before {
    content: '•'
    margin: 0 7px;
  }
`;

export const StoryMetaElement = styled.span`
  font-weight: bold;
  color: ${props => props.color};
`;