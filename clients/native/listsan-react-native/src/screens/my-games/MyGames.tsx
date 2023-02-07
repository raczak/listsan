import React, { useEffect } from 'react'
import { StatusBar, View, Text, StyleSheet } from 'react-native'
import  AppService  from '../../../../../../application/build/application/app'

export default function MyGames() {
  useEffect(() => {
    const games = new AppService().getGameAdapterInstance()
    console.log(games.getGames())
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
