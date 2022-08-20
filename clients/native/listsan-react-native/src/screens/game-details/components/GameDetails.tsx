import React from "react"
import { StyleSheet, StatusBar, View, Text } from "react-native";

export function GameDetails() {
  return (
    <View style={styles.container}>
      <StatusBar />
      <Text>GameDetails</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
