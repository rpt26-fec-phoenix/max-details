import React from 'react';
import { DoorClosed, ClockFill, CalendarCheckFill} from '@styled-icons/bootstrap';
import { Stroller, NoStroller , SmokeFree, SmokingRooms, Celebration, Pets } from '@styled-icons/material';

import { StyledHouseRule, Icon } from '../styles/HouseRule.jsx';

const HouseRule = ({ rule, value }) => {
  const rules = {
    selfCheckIn: [<DoorClosed size="16"/>, (value.allowSelfCheckIn ? `Self check-in with ${value.howToCheckIn}` : 'Check-in with the host')] ,
    checkIn: [<ClockFill size="16"/>, `Check-in: After ${value}`],
    checkOut: [<ClockFill size="16"/>, `Checkout: ${value}`],
    suitableAge: (value === 'all' ? [<Stroller size="16"/>, 'Suitable for all ages'] : [<NoStroller size="16"/>, `Not suitable for ${value}`]),
    smoking: (value ? [<SmokingRooms size="16"/>, 'Smoking Allowed'] : [<SmokeFree size="16"/>, 'No Smoking']),
    parties: [<Celebration size="16"/>, (value ? 'Suitable for parties or events' : 'No parties or events')],
    pets: [<Pets size="16"/>, (value ? 'Pets allowed' : 'No Pets')],
    longTermStay: [<CalendarCheckFill size="16"/>, (value ? 'Option for long term stay available': 'No long term stays')],
    additionalRules: []
  };

const content = rules[rule];

  return (
    <StyledHouseRule><Icon>{content[0]}</Icon><span>{content[1]}</span></StyledHouseRule>
  )
};

export default HouseRule;



// 'houseRules': {
//   'selfCheckIn': {
//     'allowSelfCheckIn': false,
//     'howToCheckIn': null
//   },
//   'checkIn': '1:00 PM',
//   'checkOut': '11:00 AM',
//   'suitableAge': 'infants',
//   'smoking': true,
//   'parties': false,
//   'pets': true,
//   'longTermStay': true,
//   'additionalRules': 'Aliquam explicabo aut. Ex eius autem nemo laudantium. Sit neque voluptate blanditiis non.'
// }