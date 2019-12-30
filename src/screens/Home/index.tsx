import * as React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

export default class Home extends React.Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Home Screen</Text>
        <TouchableOpacity style={{backgroundColor: 'red'}}>
          <Text style={{padding: 20, borderRadius: 10}}>GeoLocation </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
