import { StatusBar, View, Text, StyleSheet } from "react-native";

export function Mesjeux () {
  return (
    <View style={styles.container}>
      <StatusBar />
      <Text>Mesjeux</Text>
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