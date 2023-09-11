import { StatusBar } from 'expo-status-bar';
import HomeScreen from './screens/HomeScreen';
import EditScreen from './screens/EditScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={ HomeScreen } />
        <Stack.Screen name="Edit" component={ EditScreen } />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
