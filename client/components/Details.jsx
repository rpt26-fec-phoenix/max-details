import React from 'react';
import Detail from './Detail.jsx';

const Details = ({details, host}) => {
  const detailsToRender = [];
  if (details.typeOfPlace === 'entirePlace') {
    detailsToRender.push(<Detail key ={1} type={'entirePlace'} details={details} host={host}/>);
  }
  if (host.isSuperhost) {
    detailsToRender.push(<Detail key ={2} type={'superHost'} details={details} host={host}/>);
  } else if (details.houseRules.selfCheckIn.allowSelfCheckIn) {
    detailsToRender.push(<Detail key ={2} type={'selfCheckIn'} details={details} host={host}/>);
  }
  detailsToRender.push(<Detail key ={3} type={'enhancedClean'} details={details} host={host}/>);
  detailsToRender.push(<Detail key ={4} type={'cancellationPolicy'} details={details} host={host}/>);
  detailsToRender.push(<Detail key ={5} type={'houseRules'} details={details} host={host}/>);

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