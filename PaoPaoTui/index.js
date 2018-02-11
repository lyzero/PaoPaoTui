import { AppRegistry } from 'react-native';
import WelcomeScreen from './Component/WelcomeScreen';
import { createStore } from 'redux'
import reducer from './core/flux/store'


export const store = createStore(reducer)


AppRegistry.registerComponent('PaoPaoTui', () => WelcomeScreen);