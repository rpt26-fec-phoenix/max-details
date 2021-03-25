import React from 'react';
import styled from 'styled-components';
import { House, DoorClosed, Star } from '@styled-icons/bootstrap';
import { CalendarCancel } from '@styled-icons/fluentui-system-regular';
import { OpenBook } from '@styled-icons/entypo/';
import { Award } from '@styled-icons/boxicons-regular';

const StyledDetail = styled.div`
  display: flex;
  margin-bottom: 24px;
`;
const Icon = styled.div``;

const Description = styled.div`
  margin-left: 16px;
`;

const Title = styled.div`
  color: rgb(34, 34, 34);
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  margin-bottom: 4px;
`;

const Snippet = styled.div`
  color: rgb(113, 113, 113);
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
`;

const Detail = ({type, details, host}) => {
  // TO DO: replace url's with real urls to icons
  const descriptions = {
    entirePlace: [
      <House size="24"/>,
      'Entire place',
      'You\'ll have the entire place to yourself.'
    ],
    superHost: [<Award size="24"/>, `${host.Hostname} is a Superhost`, 'Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.'],
    selfCheckIn: [<DoorClosed size="24"/>, 'Self check-in', `Check yourself in with the ${details.houseRules.selfCheckIn.howToCheckIn}.`],
    enhancedClean: [<Star size="24"/>, 'Enhanced Clean', 'This host committed to Airbnb\'s 5-step enhanced cleaning process.'],
    cancellationPolicy: [<CalendarCancel size="24"/>, 'Cancellation policy', `This property has a ${details.cancellation} policy.`],
    houseRules: [<OpenBook size="24"/>, 'House rules', 'This place isn’t suitable for children under 12 and the host doesn’t allow pets, parties, or smoking.']
  };

  const description = descriptions[type];

  return (
    <StyledDetail>
      {description[0]}
      <Description>
        <Title>{description[1]}</Title>
        <Snippet>{description[2]}</Snippet>
      </Description>
    </StyledDetail>
  );
};

export default Detail;