import styled from 'styled-components';

const PopUpBackground = styled.div`
  z-index: 2000;
  position: fixed;
  inset: 0px;
  overflow-y: auto;
  background: rgb(34, 34, 34);
  animation-duration: 400ms;
  animation-iteration-count: 1;
  animation-fill-mode: both;
  animation-name: keyframe_15p0df;
  opacity: 0.5;
`;

const PopUpContainer = styled.div`
  z-index: 2000;
  position: fixed;
  inset: 0px;
  max-height: calc(var(--vh, 1vh) * 100);
  padding-top: 2.5%;
  padding-bottom: 2.5%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center
`;

const StyledHouseRules = styled.div`
  width: 100%;
  max-width: 780px;
  border-radius: 12px;
  background: rgb(255, 255, 255);
  position: relative;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.28) 0px 8px 28px;
  animation-duration: 400ms;
  animation-iteration-count: 1;
  animation-fill-mode: both;
  animation-name: keyframe_d37zz3;
`;

const PopUpHeader = styled.div`
  flex: 0 0 72px;
  position: sticky;
  text-align: left;
  top: 0px;
  z-index: -1;
`;

const PopUpFrame = styled.div`
  flex: 1 1 auto;
  overflow: auto;
  padding: 24px;
`;

const ContentHeader = styled.h2`
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
  font-weight: 600;
  font-size: 22px;
  line-height: 26px;
  margin-bottom: 32px;
  padding: 0px;
  display: block;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
`;

const AdditionalRulesHeader = styled.h3`
  color: rgb(34, 34, 34);
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
  font-weight: 500;
  font-size: 1.2em;
  line-height: 22px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const AdditionalRules = styled.div`
  color: rgb(34, 34, 34);
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  white-space: pre-wrap;
  margin-bottom: 40px;
`;

const ClosePopUp = styled.div`
  position: absolute;
  top: 24px;
  left: 24px;
  display: flex;
`;

const Button = styled.button`
  appearance: none;
  display: inline-block;
  border-radius: 50%;
  border: none;
  outline: none;
  margin: 0px;
  padding: 0px;
  color: rgb(34, 34, 34);
  cursor: pointer;
  touch-action: manipulation;
  position: relative;
  background: transparent;
  transition: -ms-transform 0.25s ease 0s, -webkit-transform 0.  25s ease 0s, transform 0.25s ease 0s;
`;

export {PopUpBackground, PopUpContainer, StyledHouseRules, PopUpHeader, PopUpFrame, ContentHeader, AdditionalRulesHeader, AdditionalRules, ClosePopUp, Button };