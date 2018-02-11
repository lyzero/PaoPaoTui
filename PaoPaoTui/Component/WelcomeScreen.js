import React from 'react';
import PropTypes from 'prop-types';
import { Button, NavigatorIOS, Text, View } from 'react-native';
import { TaskList } from '../Component/TaskList'
import { CreateTaskScreen } from '../Component/CreateTaskScreen'
import { store } from "../"
import {LoginButton} from 'react-native-fbsdk'

export default class NavigatorIOSApp extends React.Component {
  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: MyScene,
          title: 'Home',
          passProps: {index: 1},
        }}
        style={{flex: 1}}
      />
    )
  }
}

class MyScene extends React.Component {
  static propTypes = {
    route: PropTypes.shape({
      title: PropTypes.string.isRequired
    }),
    navigator: PropTypes.object.isRequired,
  }

  constructor(props, context) {
    super(props, context);
    this._showCreateTaskPage = this._showCreateTaskPage.bind(this);
  }


  _showCreateTaskPage() {
   
  }



  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'powderblue', paddingTop: 64}} >
        <Button
          onPress={this._showCreateTaskPage}
          title="Create New Task"
        />

        <Text>Login With Us</Text>
        <Button
        onPress={this._showCreateTaskPage}
        title="Continue with fb"
        color="#4267B2"
      />
      <LoginButton
          publishPermissions={["publish_actions"]}
          onLoginFinished={
            (error, result) => {
              if (error) {
                alert("Login failed with error: " + result.error);
              } else if (result.isCancelled) {
                alert("Login was cancelled");
              } else {
                alert("Login was successful with permissions: " + result.grantedPermissions)
              }
            }
          }
          onLogoutFinished={() => alert("User logged out")}/>

      </View>
      
    )
  }
}