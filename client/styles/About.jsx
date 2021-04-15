import styled from 'styled-components';

const StyledAbout = styled.div`
  padding-top: 32px;
  padding-bottom: 48px;
  border-bottom: 1px solid gainsboro;
  padding-left: 40px;
  padding-right: 40px;
  max-width: 1280px;
  min-width: 744px;
  margin-left: 10%;
  margin-right: 10%;
`;

const Content = styled.div`
  color: #222222;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
`;

const Heading = styled.span`
  color: var(--parsed-html-color, #222222);
  font-weight: 600;
  margin-bottom: 16px;
`;

const ContactHost = styled.div`
  margin-top: 32px;
  color: #222222;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
`;

export { StyledAbout, Content, Heading, ContactHost };
