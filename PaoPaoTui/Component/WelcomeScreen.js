import React from 'react';
import PropTypes from 'prop-types';
import { Button, NavigatorIOS, Text, View } from 'react-native';
import { CreateTaskScreen } from '../Component/CreateTaskScreen'
import { store } from "../"
import {LoginButton} from 'react-native-fbsdk'

export default class NavigatorIOSApp extends React.Component {
  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: WelcomeScreen,
          title: 'Welcome',
          passProps: {index: 1},
        }}
        style={{flex: 1}}
      />
    )
  }
}

class WelcomeScreen extends React.Component {
  static propTypes = {
    route: PropTypes.shape({
      title: PropTypes.string.isRequired
    }),
    navigator: PropTypes.object.isRequired,
  }

  constructor(props, context) {
    super(props, context);
    this.onloginSuccess = this.onloginSuccess.bind(this);
  }


  onloginSuccess() {
    alert("Login was successful with permissions: " + result.grantedPermissions)
  }



  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'powderblue', paddingTop: 64}} >
      <Text>Login With Us</Text>
      <LoginButton
          publishPermissions={["publish_actions"]}
          onLoginFinished={
            (error, result) => {
              if (error) {
                alert("Login failed with error: " + result.error);
              } else if (result.isCancelled) {
                alert("Login was cancelled");
              } else {
                onloginSuccess()
              }
            }
          }
          onLogoutFinished={() => alert("User logged out")}/>
      </View>
      
    )
  }
}