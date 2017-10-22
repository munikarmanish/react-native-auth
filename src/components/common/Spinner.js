import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Spinner = (props) => {
  console.log();
  return (
    <View style={styles.container}>
      <ActivityIndicator size={props.size || 'large'} />
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export { Spinner };
