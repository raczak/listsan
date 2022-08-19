import React from "react"
import { StatusBar, View, Text, StyleSheet } from "react-native"

export function MyConsoles() {
  return (
    <View style={styles.container}>
      <StatusBar />
      <Text>Mes Consoles</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})
