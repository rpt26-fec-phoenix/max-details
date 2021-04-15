import React from 'react';
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
  padding-top: 12px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
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

const DivOne = styled.div`
color: rgb(34, 34, 34) !important;
font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif !important;
font-weight: 600 !important;
font-size: 22px !important;
line-height: 26px !important;
margin-bottom: 32px !important;
`;

const ContentHeader = styled.h2`
  font-size: 1em;
  margin: 0px;
  padding: 0px;
  display: block;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
`;

const DivTwo = styled.div``;

const HouseRules = () => {
  return (
    <>
      <PopUpBackground/>
      <section>
        <PopUpContainer>
          <StyledHouseRules>
            <PopUpHeader/>
            <PopUpFrame>
              <section>
                <DivOne>
                  <ContentHeader>House rules</ContentHeader>
                </DivOne>
              </section>
            </PopUpFrame>
          </StyledHouseRules>
        </PopUpContainer>
      </section>
    </>
  )
};

export default HouseRules;