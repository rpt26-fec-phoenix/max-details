import React from 'react';
import { House, DoorClosed, Star } from '@styled-icons/bootstrap';
import { CalendarCancel } from '@styled-icons/fluentui-system-regular';
import { OpenBook } from '@styled-icons/entypo/';
import { Award } from '@styled-icons/boxicons-regular';
import { createHouseRules } from '../helpers.jsx';
import { StyledDetail, Description, Title, Snippet, GetDetails } from '../styles/Detail.jsx';

const Detail = ({type, details, host, togglePop}) => {
  const descriptions = {
    entirePlace: [
      <House size="24"/>,
      'Entire place',
      'You\'ll have the entire place to yourself.'
    ],
    superHost: [
      <Award size="24"/>,
      `${host.Hostname} is a Superhost`,
      'Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.'
    ],
    selfCheckIn: [
      <DoorClosed size="24"/>,
      'Self check-in',
      `Check yourself in with the ${details.houseRules.selfCheckIn.howToCheckIn}.`
    ],
    enhancedClean: [
      <Star size="24"/>,
      'Enhanced Clean',
      'This host committed to Airbnb\'s 5-step enhanced cleaning process.'
    ],
    cancellationPolicy: [
      <CalendarCancel size="24"/>,
      'Cancellation policy',
      `This property has a ${details.cancellation} policy.`
    ],
    houseRules: [
      <OpenBook size="24"/>,
      'House rules',
      createHouseRules(details.houseRules)
    ]
  };

  const description = descriptions[type];

  return (
    <StyledDetail>
      {description[0]}
      <Description>
        <Title>{description[1]}</Title>
        {type === 'houseRules' ? <Snippet>{description[2]} <GetDetails onClick={togglePop}>Get details</GetDetails></Snippet> : <Snippet>{description[2]}</Snippet>}
      </Description>
    </StyledDetail>
  );
};

export default Detail;