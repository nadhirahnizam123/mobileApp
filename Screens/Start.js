import React, { Component } from "react";
import { View, Text, StyleSheet, Button, TextInput, Picker } from "react-native";
import Constants from 'expo-constants';
import * as Speech from 'expo-speech';

export default class Start extends Component {
constructor(props) {
    super(props);
    this.state = { 
      textForTranslation: '', 
    isSpeaking: false, 
    pauseResumeText: 'Pause',
    languages: [
      { language: 'English', code: 'en' }, 
      { language: 'English US', code: 'us' }, 
      { language: 'Spain', code: 'es' },
      { language: 'French', code: 'fr' },
      { language: 'Italian', code: 'it' },
      { language: 'Chinese', code: 'zh' },
    ],
    language: 'en',
    }
  }

   speak = () => {
    const { language, textForTranslation } = this.state;
    if (!textForTranslation) {
      return Speech.speak('You haven\'t provided anything for me to say');
    }
    Speech.speak(textForTranslation, { language, onDone: this.onDone });
    this.setState({ isSpeaking: true });
  }

  stop = () => {
    Speech.stop();
    this.setState({ isSpeaking: false });
  }

  onDone = () => this.setState({ isSpeaking: false });

  resume = () => {
    Speech.resume();
    this.setState({ isSpeaking: false, pauseResumeText: 'Pause' })
  }

  onChangeText = (text) => this.setState({ textForTranslation: text });

  render() {      
        const { pauseResumeText, textForTranslation, isSpeaking, languages } = this.state;
    return (

      <View style={styles.container}>
        <TextInput
          style={{ height: 40 }}
          placeholder="Type here to pronounce word!"
          onChangeText={text => this.onChangeText(text)}
          value={textForTranslation}
        />
        <Picker
          selectedValue={this.state.language}
          style={{height: 50, width: 100}}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({language: itemValue})
          }>
          {languages.map(x => (
            <Picker.Item key={x.code} label={x.language} value={x.code} />
          ))}
        </Picker>
        <Button
          style={ styles.button }
          title="Start"
          disabled={isSpeaking}
          onPress={this.speak}
        />
        <Button
          style={ styles.button } 
          disabled={!isSpeaking}
          title='Stop' 
          onPress={this.stop} 
        />
        
        <Text></Text>

        <View style={styles.button}>
        <Button onPress={() => this.props.navigation.navigate('Home')} title="Tap to finish" />
        </View>
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