import { ThemeProvider } from 'styled-components/native';
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto';

import { StatusBar } from 'react-native';

import { Loading } from '../components/loading/Loading';
import { Groups } from '../screens/groups/Groups';
import Theme from '../theme/Theme';

const App = () => {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });
  return (
    <>
      <ThemeProvider theme={Theme}>
        <StatusBar
          barStyle={'light-content'}
          backgroundColor={'transparent'}
          translucent
        />
        {fontsLoaded ? <Groups /> : <Loading />}
      </ThemeProvider>
    </>
  );
};

export default App;
