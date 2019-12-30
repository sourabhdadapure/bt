import * as React from 'react';
import {View, Text} from 'react-native';
import Geolocation from 'react-native-geolocation-service';

export default class GeoLocation extends React.Component {
  state = {
    location: '',
  };
  componentDidMount() {
    // Instead of navigator.geolocation, just use Geolocation.
    // if (hasLocationPermission) {
    Geolocation.getCurrentPosition(
      position => {
        console.log(position);
        this.setState({location: position});
      },
      error => {
        // See error code charts below.
        console.log(error.code, error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
    // }
  }

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Location : {this.state.location} </Text>
      </View>
    );
  }
}
