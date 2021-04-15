import styled from 'styled-components';

const StyledDetail = styled.div`
  display: flex;
  margin-bottom: 24px;
`;
const Icon = styled.div``;

const Description = styled.div`
  margin-left: 16px;
`;

const Title = styled.div`
  color: rgb(34, 34, 34);
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  margin-bottom: 4px;
`;

const Snippet = styled.div`
  color: rgb(113, 113, 113);
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
`;

const GetDetails = styled.button`
  font-size: inherit;
  font-family: inherit;
  font-style: inherit;
  font-variant: inherit;
  line-height: inherit;
  appearance: none;
  background: transparent;
  border: 0px;
  cursor: pointer;
  margin: 0px;
  padding: 0px;
  user-select: auto;
  color: rgb(34, 34, 34);
  text-decoration: underline;
  border-radius: 4px;
  font-weight: 600;
  outline: none;
`;

export { StyledDetail, Description, Title, Snippet, GetDetails };