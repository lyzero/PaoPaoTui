import { AppRegistry } from 'react-native';
import MyScene from './Component/MyScene';
import { createStore } from 'redux'
import reducer from './core/flux/store'

export const store = createStore(reducer)


AppRegistry.registerComponent('PaoPaoTui', () => MyScene);