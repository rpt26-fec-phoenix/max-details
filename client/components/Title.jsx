import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.div`
  padding-top: 48px;
  padding-bottom: 24px;
  max-width: 95%;
  margin: auto;
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

const Title = ({details, host}) => {
  const { sleepingArrangements: {guests, bedrooms, beds, baths}, typeOfPlace, propertyType} = details;
  return (
    <StyledTitle>
      <StyledDiv>
        <StyledHeading>{typeOfPlace} in {propertyType} hosted by {host.Hostname}</StyledHeading>
        <StyledArrangements>
          <span>{guests} {guests > 1 ? 'guests' : 'guest'}</span><span> · </span>
          <span>{bedrooms} { bedrooms > 1 ? 'bedrooms' : 'bedroom'}</span><span> · </span>
          <span>{beds} {beds > 1 ? 'beds' : 'bed'}</span><span> · </span>
          <span>{baths} {baths > 1 ? 'baths' : 'bath'}</span>
        </StyledArrangements>
      </StyledDiv>
      <StyledImg src={host.HostprofilePicture}></StyledImg>
    </StyledTitle>
  );
};

export default Title;