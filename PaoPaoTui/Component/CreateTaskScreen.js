import React from 'react';
import PropTypes from 'prop-types';
import { Button, NavigatorIOS, Text, View, TextInput } from 'react-native';
import { addTask } from '../core/flux/actions/'
import { store } from "../"


export class CreateTaskScreen extends React.Component {
  static propTypes = {
    route: PropTypes.shape({
      title: PropTypes.string.isRequired
    }),
    navigator: PropTypes.object.isRequired,
  }

  constructor(props, context) {
    super(props, context);
    this.state = { taskDescription: '' };
    this.createTask=this.createTask.bind(this);
  }

  render() {
    return (
    <View style={{flex: 1, backgroundColor: 'powderblue', paddingTop: 64}} >
        <Text>Create A New Task</Text>
        <Text>Task Description</Text>
        <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(taskDescription) => this.setState({taskDescription})}
            value={this.state.taskDescription}
        />
        <Button
          onPress={this.createTask}
          title="Create A New Task"
        />
      </View>
    )
  }

  createTask() {
    store.dispatch(addTask(this.state.taskDescription))
    console.log(store.getState().todos)
  }

}
