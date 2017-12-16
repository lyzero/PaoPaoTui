import React from 'react';
import PropTypes from 'prop-types';
import { Button, NavigatorIOS, Text, View } from 'react-native';


export class CreateTaskScreen extends React.Component {
  static propTypes = {
    route: PropTypes.shape({
      title: PropTypes.string.isRequired
    }),
    navigator: PropTypes.object.isRequired,
  }

  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
    <View style={{flex: 1, backgroundColor: 'powderblue', paddingTop: 64}} >
        <Text>Create A New Task</Text>
      </View>
    )
  }

}
