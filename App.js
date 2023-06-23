import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {useFonts} from 'expo-font';
//
import { RegistrationScreen } from './src/components/RegistrationScreen';
import { LoginScreen } from './src/components/LoginScreen';
import { PostsScreen } from './src/screens/PostsScreen';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Roboto-Black': require('./src/assets/fonts/Roboto-Black.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  };

  return (
    <View style={styles.container}>
        <RegistrationScreen />

        {/* <LoginScreen /> */}

        {/* <PostsScreen /> */}
        
        <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
    
    