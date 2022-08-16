import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { List } from './components/List';
import { Discover } from './components/Discover';
import { Mesjeux } from './components/Mesjeux';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Tab.Navigator>
        <Tab.Screen name="Mesjeux" component={Mesjeux} />
        <Tab.Screen name="Discover" component={Discover} />
        <Tab.Screen name="List" component={List} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

