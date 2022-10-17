import { StyleSheet, Text, View } from 'react-native';

import Welcome from './screens/welcome';
import Login from './screens/login';
import Signup from './screens/signup';
import Home from './screens/home';

export default function App() {
  return (
    <View style={styles.container}>
      <Welcome />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: '#fff',
  },
});
