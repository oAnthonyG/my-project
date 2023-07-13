import React from "react";
import {StyleSheet, View, Text } from "react-native";

export default function Title(){
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Calcula IMC
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: "#eaeaea"
  },
  title:{
    fontWeight: "bold"
  }
})