import React, { useEffect } from "react"
import { StatusBar, View, Text, StyleSheet } from "react-native"
import { AppService } from "@listsan/app"

export function MyGames() {
  useEffect(() => {
    const games =  AppService.Main.getGameAdapterInstance()
    console.log(games);
    
  }, [])

  return (
    <View style={styles.container}>
      <StatusBar />
      <Text>Mesjeux</Text>
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
