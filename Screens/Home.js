import React, { Component } from "react";
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import Constants from 'expo-constants';
import * as Speech from 'expo-speech';

export default class App extends Component {
  
  componentDidMount() {
    Speech.speak('Welcome to SPEAK-UP, text-to-speech. Enter a word you would like me to pronounce, and select the language you want.');
  }

  render() {
    return (
      <View style={styles.container}>
      <Text>Welcome to SPEAK-UP!</Text>
      <Text></Text>
      <Image source={require('./download.png')} style={{width:150,height:150}}/>
      <Text></Text> 
        <Button styles={styles.button}onPress={() => this.props.navigation.navigate('Start')} title="Start" />
    
      </View>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    textAlignVertical: 'top',
  },
  button: {
    flexDirection: 'row'  
  }
});