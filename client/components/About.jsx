import React from 'react';

import { StyledAbout, Content, Heading, ContactHost } from '../styles/About.jsx';

const About = ({details}) => {
  return (
    <StyledAbout>
      <Content>
        <span>
          {details.about.description}
          <br/>
          <br/>
          <Heading>The space</Heading>
          <br/>
          {details.about.space}
          <br/>
          <br/>
          <Heading>Access</Heading>
          <br/>
          {details.about.access}
          <br/>
          <br/>
          <Heading>Other information</Heading>
          <br/>
          {details.about.other}
        </span>
      </Content>
      <ContactHost>Contact host</ContactHost>
    </StyledAbout>
  );
};

export default About;