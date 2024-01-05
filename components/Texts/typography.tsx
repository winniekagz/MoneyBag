import React, {FunctionComponent} from 'react';
import styled from 'styled-components/native';
import {colors} from '../colors';
import {TextProps} from './types';

export const SmallText: FunctionComponent<TextProps> = props => {
  return (
    <>
      <StyledSmallText style={props.textStyles}>
        {props.children}
      </StyledSmallText>
    </>
  );
};

export const BigTextText: FunctionComponent<TextProps> = props => {
  return (
    <>
      <StyledBigText style={props.textStyles}>{props.children}</StyledBigText>
    </>
  );
};

const StyledSmallText = styled.Text`
  font-size: 13px;
  color: ${colors.gray};
  text-align: left;
`;
const StyledBigText = styled.Text`
  font-size: 13px;
  color: ${colors.white};
  text-align: left;
`;
