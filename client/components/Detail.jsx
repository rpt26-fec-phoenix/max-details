import React from 'react';
import styled from 'styled-components';

const StyledDetail = styled.div`
  display: flex;
  margin-bottom: 24px;
`;

const Detail = ({type, details, host}) => {
  return (
    <StyledDetail>
      {type}
    </StyledDetail>
  );
};

export default Detail;