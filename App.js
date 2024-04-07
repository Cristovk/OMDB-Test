import { useFonts } from 'expo-font';
import {useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'react-native';
import { Paragraph, Spacer, TamaguiProvider, Theme, YStack } from 'tamagui';
import config from './src/tamagui.config';
import { getMovieById } from './src/utils/Utils';



export default function App() {
  const colorScheme = useColorScheme();
  const [loaded, setLoaded] = useState(false);
  const [movieData, setMovieData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const results = await getMovieById('tt0111261'); // Change the ID here if needed
        setMovieData(results);
      } catch (error) {
        setError(error);
      } finally {
        setLoaded(true);
      }
    };

    fetchMovie();
  }, []);

  if (!loaded) {
    return null;
  }



  // const [loaded] = useFonts({
  //   Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
  //   InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  // })
 
  return (

    <TamaguiProvider config={config}>
      <Theme name={colorScheme === 'dark' ? 'dark' : 'light'}>
        <YStack f={1} jc="center" ai="center" backgroundColor={'$backgroundSoft'}>
            <Paragraph color="$color" jc="center">
    
            

          </Paragraph>
          <StatusBar style="auto" />
        </YStack>
      </Theme>
    </TamaguiProvider>

  );

}
