import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
// @ts-ignore

const addNumbers = (a, b) => {
return  a + b
};
 
const Sum = () => {
  return (addNumbers(2,3))

}

export default Sum

const styles = StyleSheet.create({})