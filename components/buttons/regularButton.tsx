import React, {ReactNode} from 'react';
import styled from 'styled-components/native';
import {colors} from '../colors';
import {
  GestureResponderEvent,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';
import {SmallText} from '../Texts/typography';

type ButtonProps = {
  btnStyles?: StyleProp<ViewStyle>;
  onPress: (event: GestureResponderEvent) => void;
  textStyles?: StyleProp<TextStyle>;
  children: ReactNode;
};

export function RegularButton(props: ButtonProps) {
  return (
    <ButtonView onPress={props.onPress} style={props.btnStyles}>
      <SmallText textStyles={props.textStyles}>{props.children}</SmallText>
    </ButtonView>
  );
}

const ButtonView = styled.TouchableOpacity`
  align-items: center;
  background-color: ${colors.primary};
  width: 100%;
  padding: 20px;
  border-radius: 20px;
`;
