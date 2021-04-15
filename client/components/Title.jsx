import React from 'react';
import { StyledTitle, StyledDiv, StyledHeading, StyledArrangements, StyledImg } from '../styles/Title.jsx';

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