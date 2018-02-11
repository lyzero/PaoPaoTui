import React from 'react';
import PropTypes from 'prop-types';
import { Button, NavigatorIOS, Text, View } from 'react-native';
import { TaskList } from '../Component/TaskList'
import { CreateTaskScreen } from '../Component/CreateTaskScreen'
import { store } from "../"

export class NavigatorIOSApp extends React.Component {
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

class WelcomeScreen extends React.Component {
  static propTypes = {
    route: PropTypes.shape({
      title: PropTypes.string.isRequired
    }),
    navigator: PropTypes.object.isRequired,
  }

  constructor(props, context) {
    super(props, context);
    this._onForward = this._onForward.bind(this);
    this._showCreateTaskPage = this._showCreateTaskPage.bind(this);
  }

  _onForward() {
    let nextIndex = ++this.props.index;
    this.props.navigator.push({
      component: TaskList,
      title: "Task List",
      passProps: {index: nextIndex}
    });
    console.log(store.getState().todos)
  }

  _showCreateTaskPage() {
    let nextIndex = ++this.props.index;
    this.props.navigator.push({
      component: CreateTaskScreen,
      title: "Create A New Task",
      passProps: {index: nextIndex}
    });
  }

  getMoviesFromApiAsync() {
      return fetch('http://mis.logpie.com/logpie/products/category', {
        method: 'GET',
        headers: {
          Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
          'Content-Type': 'application/json;charset=UTF-8',
        }})
        .then((response) =>
          console.log(response.json())
        )
        .catch((error) => {
          console.error(error);
        });
    }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'powderblue', paddingTop: 64}} >
        <Button
          onPress={this._onForward}
          title="View All Tasks"
        />
        <Button
          onPress={this._showCreateTaskPage}
          title="Create New Task"
        />
        <Button
          onPress={this.getMoviesFromApiAsync}
          title="API Call"
        />
        <Text>Task List</Text>
      </View>
      
    )
  }
}