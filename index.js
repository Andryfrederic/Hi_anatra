/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
// import Home from './src/screens/Home'
import Root from './src/rootings/Root'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Root);
