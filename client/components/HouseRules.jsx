import React from 'react';

import {PopUpBackground, PopUpContainer, StyledHouseRules, PopUpHeader, PopUpFrame, ContentHeader, AdditionalRulesHeader, AdditionalRules, ClosePopUp, Button} from '../styles/HouseRules.jsx';
import HouseRule from './HouseRule.jsx';
import { CloseOutline } from '@styled-icons/evaicons-outline';

const HouseRules = ({ rules, togglePop }) => {
  return (
    <>
      <PopUpBackground/>
      <section>
        <PopUpContainer>
          <StyledHouseRules>
            <ClosePopUp>
              <Button onClick={togglePop}>
                <CloseOutline size="25px"/>
              </Button>
            </ClosePopUp>
            <PopUpHeader/>
            <PopUpFrame>
              <section>
                <ContentHeader>House rules</ContentHeader>
                {Object.keys(rules).map(rule => {
                  return <HouseRule key={rule} rule={rule} value={rules[rule]}/>
                })}
                <AdditionalRulesHeader>Additional Rules</AdditionalRulesHeader>
                <AdditionalRules>{rules.additionalRules}</AdditionalRules>
              </section>
            </PopUpFrame>
          </StyledHouseRules>
        </PopUpContainer>
      </section>
    </>
  )
};

export default HouseRules;