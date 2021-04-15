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
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif !important;
  font-weight: 600 !important;
  font-size: 22px !important;
  line-height: 26px !important;
  margin-bottom: 32px;
  padding: 0px;
  display: block;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
`;

const AdditionalRulesHeader = styled.h3`
  color: rgb(34, 34, 34) !important;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif !important;
  font-weight: 500 !important;
  font-size: 1.2em !important;
  line-height: 22px !important;
  margin-top: 20px;
  margin-bottom: 20px !important;
`;

const AdditionalRules = styled.div`
  color: rgb(34, 34, 34) !important;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif !important;
  font-weight: 400 !important;
  font-size: 16px !important;
  line-height: 24px !important;
  white-space: pre-wrap !important;
  margin-bottom: 40px;
`;

export {PopUpBackground, PopUpContainer, StyledHouseRules, PopUpHeader, PopUpFrame, ContentHeader, AdditionalRulesHeader, AdditionalRules};