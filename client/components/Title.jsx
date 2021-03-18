import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  padding-top: 48px;
  padding-bottom: 24px;
`;
const Avatar = styled.div`
  float: right;
  height: 100%;
  width: 100%;
`;

const Title = ({details, host}) => {
  return (
    <StyledTitle>
      <div>{details.typeOfPlace} in {details.propertyType} hosted by {host.Hostname}</div>
      <div>{details.sleepingArrangements.guests} guests {details.sleepingArrangements.bedrooms} rooms  {details.sleepingArrangements.beds} beds {details.sleepingArrangements.baths} baths</div>
      <Avatar><img src={host.HostprofilePicture}></img></Avatar>
    </StyledTitle>
  );
};

export default Title;