import React from "react"
import { StatusBar } from "expo-status-bar"
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Discover } from "./src/screens/game-discovery/components/Discover"
import { MyGames } from "./src/screens/my-games/MyGames"
import { MyConsoles } from "./src/screens/my-consoles/MyConsoles"

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Tab.Navigator>
        <Tab.Screen name="Mes jeux" component={MyGames} />
        <Tab.Screen name="Discover" component={Discover} />
        <Tab.Screen name="Mes Consoles" component={MyConsoles} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
