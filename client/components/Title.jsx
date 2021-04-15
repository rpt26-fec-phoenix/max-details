import React from 'react';
import { StyledTitle, StyledDiv, StyledHeading, StyledArrangements, StyledImg } from '../styles/Title.jsx';
import { createPropertyTitle } from '../helpers.jsx';

const Title = ({details, host}) => {
  const { sleepingArrangements: {guests, bedrooms, beds, baths}, typeOfPlace, propertyType} = details;
  const propertyTitle = createPropertyTitle(typeOfPlace, propertyType);
  return (
    <StyledTitle>
      <StyledDiv>
        <StyledHeading>{propertyTitle} hosted by {host.hostName}</StyledHeading>
        <StyledArrangements>
          <span>{guests} {guests > 1 ? 'guests' : 'guest'}</span><span> · </span>
          <span>{bedrooms} { bedrooms > 1 ? 'bedrooms' : 'bedroom'}</span><span> · </span>
          <span>{beds} {beds > 1 ? 'beds' : 'bed'}</span><span> · </span>
          <span>{baths} {baths > 1 ? 'baths' : 'bath'}</span>
        </StyledArrangements>
      </StyledDiv>
      <StyledImg src={host.profilePic}></StyledImg>
    </StyledTitle>
  );
};

export default Title;