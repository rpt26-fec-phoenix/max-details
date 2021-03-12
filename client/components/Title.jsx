import React from 'react';

const Title = ({details, host}) => {
  return (
    <div>
      <div>{details.typeOfPlace} in {details.propertyType} hosted by {host.Hostname}</div>
      <div>{details.sleepingArrangements.guests} guests {details.sleepingArrangements.bedrooms} rooms  {details.sleepingArrangements.beds} beds {details.sleepingArrangements.baths} baths</div>
    </div>
  );
};

export default Title;