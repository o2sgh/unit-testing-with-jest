import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const App = () => {

  return (
    <View style={{flex:1,margin:8}}>
      <View style={[styles.innerViews,{backgroundColor:'red'}]}>
      <Text style={styles.textStyle}>Muhammad Imran Shafqat</Text>
    </View>
    <View style={[styles.innerViews,{backgroundColor:"gray"}]}>
        <Text style={styles.textStyle}>Muhammad Imran Shafqat</Text>
    </View>
    <View style={[styles.innerViews,{backgroundColor:'yellow'}]}>
        <Text style={styles.textStyle}>Muhammad Imran Shafqat</Text>
    </View>
    </View>
  )
}

export default App


const styles = StyleSheet.create({
  innerViews:{
    flex:1,
    justifyContent:'center',
    alignItems:"center",
    borderWidth:5,
    borderRadius:40, 
    marginVertical:20
  },
textStyle:{
  fontSize:20,
  color:'#000000',
  paddingHorizontal:10
}

})