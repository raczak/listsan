import React from "react"
import { View, Text, StatusBar, StyleSheet, FlatList } from "react-native";
import { useFetchGames } from "../hooks/useFetchGames";

export function Discover() {
  const games = useFetchGames();
  return (
    <View style={styles.container}>
      <StatusBar />
      <FlatList
        data={games}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      />
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
