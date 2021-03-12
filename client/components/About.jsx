import React from 'react';

const About = ({details}) => {
  return (
    <div>
      <div>About</div>
      <div>{JSON.stringify(details.about)}</div>
    </div>
  );
};

export default About;