import {ReactNode} from 'react';
import {StyleProp, TextStyle} from 'react-native';

export type TextProps = {
  textStyles?: StyleProp<TextStyle>;
  children: ReactNode;
};
