import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    height: 24,
    fontSize: 16,
    iconSize: 18,

  },
  large: {
    height: 36,
    fontSize: 18,
    iconSize: 20,
  },
}

const IconInput = ({ 
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  const styles = SIZES[size];
  return(
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper style={{ '--size': styles.iconSize + 'px' }}>
        <Icon id={icon} size={styles.iconSize} />
      </IconWrapper>
      <TextInput 
             {...{placeholder}}
            style={{
            '--width': width + 'px',
            '--height': styles.height / 16 + 'rem',
            '--border-thickness': styles.borderThickness + 'px',
            '--font-size': styles.fontSize / 16 + 'rem',
          }}/>
    </Wrapper>
  )

};

const Wrapper = styled.div`
  display: inline-block;
  position: relative;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  margin: auto;
  bottom: 0;
  height: var(--size);

`;

const TextInput = styled.input`
  width: var(--width);
  height: var(--height);
  font-size: var(--font-size);
  color: inherit;
  font-weight: 700;
  outline-offset: 2px;
  border: none;
  border-bottom: 2px solid ${COLORS.black};
  padding-left: var(--height);

  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }
`;


export default IconInput;
