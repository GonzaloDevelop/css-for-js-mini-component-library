/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  large: {
    height: 24,
    padding: 4,
    radius: 8,
  },
  medium: {
    height: 12,
    padding: 0,
    radius: 4,
  },
  small: {
    height: 8,
    padding: 0,
    radius: 4,
  }
}

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];
  return (
    <Wrapper
      role= "progressbar"
      aria-valuemin="0"
      aria-valuemax="100"
      aria-valuenow={value}
      style={{
        '--padding': styles.padding + 'px',
        '--radius': styles.radius + 'px',
      }}
    >
      <VisuallyHidden>Your progress percentage is: {value}% </VisuallyHidden>
      <BarWrapper>
        <Bar style={{
          '--height': styles.height + 'px',
          '--width': value + '%'
        }}/>
      </BarWrapper>
    </Wrapper>
  )
};

export default ProgressBar;

const Wrapper = styled.div`
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  background-color: ${COLORS.transparentGray15};
  border-radius: var(--radius);
  padding: var(--padding);
`;

const BarWrapper = styled.div`
  border-radius: 4px;
  overflow: hidden;
`;

const Bar = styled.div`
  border-radius: 4px 0px 0px 4px;
  background-color: ${COLORS.primary};
  width: var(--width);
  height: var(--height)
`;
