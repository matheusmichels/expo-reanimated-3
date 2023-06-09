import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Animated, { useSharedValue, withTiming } from 'react-native-reanimated';

export default function App() {
  const fontSize = useSharedValue(10);

  useEffect(() => {
    const interval = setInterval(() => {
      fontSize.value = withTiming(Math.random() * 50);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Open up App.js to start working on your app!</Text>
      <Animated.Text style={{ fontSize }}>Hello World</Animated.Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
