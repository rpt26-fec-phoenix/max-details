import styled from 'styled-components';

const StyledTitle = styled.div`
  padding-top: 48px;
  padding-bottom: 24px;
  border-bottom: 1px solid gainsboro;
`;

const StyledDiv = styled.div`
  display: inline-block;
  padding-right: 10px;
  max-width: 90%;
`;

const StyledHeading = styled.div`
color: rgb(34, 34, 34);
font-weight: 500;
font-size: 22px;
line-height: 26px;
margin-bottom: 8px;
`;

const StyledArrangements = styled.div`
color: #222222 !important;
font-weight: 325 !important;
font-size: 16px !important;
line-height: 20px !important;
`;

const StyledImg = styled.img`
  border-radius: 56%;
  width: 56px;
  height: 56px;
  background: white;
  display: inline;
  position: absolute;
`;

export { StyledTitle, StyledDiv, StyledHeading, StyledArrangements, StyledImg };
