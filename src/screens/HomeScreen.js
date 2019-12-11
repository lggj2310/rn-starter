import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = () => {
  return (
    <View>
      <Text style={styles.text}>Hi there everyone!</Text>
      <Button 
        onPress={() => console.log('Button pressed')}
        title="Go to Components Demo"
      />
      <TouchableOpacity onPress={() => console.log('List pressed')}>
        <Text>Go to List Demo LOOOOOOOOOOOOOLL</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
