import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Title from './src/components/title';
import Main from './src/components/main'; 
import Home2 from './src/components/novoComponente'; 
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/HomeScreen';
import CounterScreen from './src/components/counterScreen';
import Form from './src/components/form';
import ColorList from './src/components/ColorList';

const Stack = createStackNavigator(); 

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Home2" component={Home2} />
        <Stack.Screen name="CounterScreen" component={CounterScreen} />
        <Stack.Screen name="Form" component={Form} />
        <Stack.Screen name="ColorList" component={ColorList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#999',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
