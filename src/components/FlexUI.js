import React from 'react';
import { StyleSheet, View} from 'react-native';

const FlexUI = () => {
  return (
    <View
      style={ styles.container }>
      <View style={{flex: 1, backgroundColor: 'red'}} />
      <View style={{flex: 1, backgroundColor: 'darkorange'}} />
      <View style={{flex: 1, backgroundColor: 'green'}} />
      <View style={{flex: 1, backgroundColor: 'yellow'}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
});

export default FlexUI;