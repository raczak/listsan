import {View, Text, StatusBar, StyleSheet} from "react-native";

export function Discover () {
  return (
    <View style={styles.container}>
      <StatusBar />
      <Text>Discover</Text>
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