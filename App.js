import React from 'react';
import {
  AppRegistry,
} from 'react-native';
import RouterComponent from './src/components/Router';

export default class App extends React.Component {
  
  render() {
    return (
      <RouterComponent />    
    );
  }
}
AppRegistry.registerComponent('INSTANTO', () => RouterComponent);
