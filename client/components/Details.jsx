import React from 'react';
import Detail from './Detail.jsx';
import styled from 'styled-components';

const StyledDetails = styled.div`
  padding-top: 32px;
  padding-bottom: 32px;
  border-bottom: 1px solid gainsboro;
  padding-left: 40px;
  padding-right: 40px;
  max-width: 1280px;
  min-width: 744px;
  margin-left: 10%;
  margin-right: 10%;
`;

const Details = ({ details, host, togglePop }) => {
  const detailsToRender = [];
  if (details.typeOfPlace === 'entirePlace') {
    detailsToRender.push(<Detail key={1} type={'entirePlace'} details={details} host={host}/>);
  }
  if (host.isSuperhost) {
    detailsToRender.push(<Detail key={2} type={'superHost'} details={details} host={host}/>);
  } else if (details.houseRules.selfCheckIn.allowSelfCheckIn) {
    detailsToRender.push(<Detail key={2} type={'selfCheckIn'} details={details} host={host}/>);
  }
  detailsToRender.push(<Detail key={3} type={'enhancedClean'} details={details} host={host}/>);
  detailsToRender.push(<Detail key={4} type={'cancellationPolicy'} details={details} host={host}/>);
  detailsToRender.push(<Detail key={5} type={'houseRules'} details={details} host={host} togglePop={togglePop}/>);

  return (
    <StyledDetails>
      {detailsToRender.map((detail) => {
        return detail;
      })}
    </StyledDetails>
  );
};

export default Details;