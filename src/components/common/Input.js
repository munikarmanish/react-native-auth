import React from 'react';
import { View, Text, TextInput } from 'react-native';

const Input = (props) => (
  <View style={styles.container}>
    <Text style={styles.label}>{props.label}</Text>
    <TextInput
      {...props}
      style={styles.input}
      value={props.value}
      onChangeText={props.onChangeText}
      autoCorrect={false}
      placeholder={props.placeholder}
    />
  </View>
);

const styles = {
  container: {
    // height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1,
  },
  input: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    flex: 2,
  },
};

export { Input };
