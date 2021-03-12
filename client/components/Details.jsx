import React from 'react';
import Detail from './Detail.jsx';

const Details = ({details, host}) => {
  const detailsToRender = [];
  if (details.typeOfPlace === 'entirePlace') {
    detailsToRender.push(<Detail type={'entirePlace'} details={details} host={host}/>);
  }
  if (host.isSuperhost) {
    detailsToRender.push(<Detail type={'superHost'} details={details} host={host}/>);
  } else if (details.houseRules.selfCheckIn.allowSelfCheckIn) {
    detailsToRender.push(<Detail type={'selfCheckIn'} details={details} host={host}/>);
  }
  detailsToRender.push(<Detail type={'enhancedClean'} details={details} host={host}/>);
  detailsToRender.push(<Detail type={'cancellationPolicy'} details={details} host={host}/>);
  detailsToRender.push(<Detail type={'houseRules'} details={details} host={host}/>);

  return (
    <div>
      <ul>
        {detailsToRender.map((detail) => {
          return detail;
        })}
      </ul>
    </div>
  );
};

export default Details;