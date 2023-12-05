import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ id, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <MySelect id= {id} value= {value} onChange= {onChange}>
        {children}
      </MySelect>
      <SelectedOption>
        {displayedValue}
        <IconWrapper style={{'--size': 20 + 'px'}}>
          <Icon id='chevron-down' strokeWidth={2} size={20}/>
        </IconWrapper>
      </SelectedOption>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: max-content;
`;

const MySelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
`;

const SelectedOption = styled.div`
  color: ${COLORS.gray700};
  background-color: ${COLORS.transparentGray15};
  font-size: 1rem;
  padding: 0.8rem 1rem;
  padding-right: 2.5rem;
  border-radius: 0.5rem;
  cursor: pointer;

  ${MySelect}:focus + & {
    outline: 1px dotted gold;
    outline: 5px auto -webkit-focus-ring-color;
  }

  ${MySelect}:hover + & {
    color: ${COLORS.black};
    border: 2px;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 10px;
  margin: auto;
  width: var(--size);
  height: var(--size);
  pointer-events: none;
`;

export default Select;
