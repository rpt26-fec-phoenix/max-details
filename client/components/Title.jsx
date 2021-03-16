import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.div`
  font-family: Arial, Helvetica, sans-serif;
`;

const Title = ({details, host}) => {
  return (
    <StyledTitle>
      <div>{details.typeOfPlace} in {details.propertyType} hosted by {host.Hostname}</div>
      <div>{details.sleepingArrangements.guests} guests {details.sleepingArrangements.bedrooms} rooms  {details.sleepingArrangements.beds} beds {details.sleepingArrangements.baths} baths</div>
    </StyledTitle>
  );
};

export default Title;