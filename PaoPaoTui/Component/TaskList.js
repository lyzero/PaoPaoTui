import React from 'react';
import PropTypes from 'prop-types';
import { Button, NavigatorIOS, Text, View, ListView } from 'react-native';
import { store } from "../"

export class TaskList extends React.Component {
  static propTypes = {
    route: PropTypes.shape({
      title: PropTypes.string.isRequired
    }),
    navigator: PropTypes.object.isRequired,
  }

  constructor(props, context) {
    super(props, context);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(store.getState().todos),
    };
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'powderblue', paddingTop: 64}}>
      <Text>Task List</Text>
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(rowData) => <Text>{rowData.text}</Text>}
      />
      </View>
    )
  }

}
