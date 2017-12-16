import React from 'react';
import PropTypes from 'prop-types';
import { Button, NavigatorIOS, Text, View } from 'react-native';
import { TaskList } from '../Component/TaskList'
import { CreateTaskScreen } from '../Component/CreateTaskScreen'

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
  }

  _showCreateTaskPage() {
    let nextIndex = ++this.props.index;
    this.props.navigator.push({
      component: CreateTaskScreen,
      title: "Create A New Task",
      passProps: {index: nextIndex}
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
      </View>
    )
  }
}