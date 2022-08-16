import React, { ReactElement, useEffect, useState } from "react";
import {View, Text, StatusBar, StyleSheet, FlatList, ListRenderItem} from "react-native";
import axios from "axios";

interface items {
  id: number;
  name: string;
};
export function List(){
  const [items, setItems] = useState<items[]>([]);
  useEffect(() => { 
    axios.get("https://rawg.io/api/collections/must-play/games").then(res => {
      console.log(res.data);
      setItems(res.data.results);
    });
  }, []);
  return (
    <View style={styles.container}>
      <StatusBar />
      <FlatList data={items} renderItem = {({item}) => <Text>{item.name}</Text>} />
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
