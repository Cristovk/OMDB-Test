import React, { useContext, useEffect } from 'react';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'react-native';
import { Paragraph, Spacer, TamaguiProvider, Theme, YStack, Text} from 'tamagui';
import config from './src/tamagui.config';
 import { MovieContext , MovieProvider } from './src/contexts/DataContext';

export default function App() {
  const colorScheme = useColorScheme();
  const [loaded, error] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  });


  if (!loaded) {
    return null
  }
  if (error) {
    console.error('Error loading fonts:', error);
  }



  return (
  <MovieProvider>
    <TamaguiProvider config={config}>
      <Theme name={colorScheme === 'dark' ? 'dark' : 'light'}>
        <YStack f={1} jc="center" ai="center" backgroundColor="$backgroundSoft">
          <Text>
          ESTO ESTA CABRON
          </Text>
        </YStack>
        </Theme>
    </TamaguiProvider>
  </MovieProvider>
  );
}