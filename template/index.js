/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome';

FontAwesome5Icon.loadFont();

AppRegistry.registerComponent(appName, () => App);
