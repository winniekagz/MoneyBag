import React from 'react';
import {StatusBar, Text, View} from 'react-native';
import styled from 'styled-components/native';
import {Container} from '../components/shared';
import {colors} from '../components/colors';
import backgroundImage from '../assets/bgs/background_v1.png';
import {BigTextText, SmallText} from '../components/Texts/typography';
import {RegularButton} from '../components/buttons/regularButton';

export default function Welcome() {
  return (
    <View style={{height: '100%'}}>
      <StatusBar />
      <Text>Big Girl</Text>
      <WelcomeContainer>
        <TopSection>
          <TopImage source={backgroundImage} />
        </TopSection>
        <BottomSection>
          <BigTextText textStyles={{width: '70%', marginBottom: '25%'}}>
            Best way to track money
          </BigTextText>
          <SmallText textStyles={{width: '70%', marginBottom: '25%'}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </SmallText>
          <RegularButton onPress={() => console.log('starting')}>
            Get Started
          </RegularButton>
        </BottomSection>
      </WelcomeContainer>
    </View>
  );
}

export const WelcomeContainer = styled(Container)`
  background-color: ${colors.secondary};
  justify-content: space-between;
  height: 100%;
  width: 100%;
`;

export const TopSection = styled.View`
  width: 100%;
  flex: 1;
  max-height: 55%;
`;

export const BottomSection = styled.View`
  width: 100%;
  flex: 1;
  padding: 25px;
  justify-content: flex-end;
`;
export const TopImage = styled.Image`
  width: 100%;
  resize-mode: stretch;
  height: 100%;
`;
