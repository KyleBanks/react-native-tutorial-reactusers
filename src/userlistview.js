import React, { Component } from 'react';
import {
  StyleSheet,
  ListView,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';
import fetchUsers from './api';

export default class UserListView extends Component {
	constructor() {
		super();
		console.log("Hello from React Native!")

		const ds = new ListView.DataSource({rowHasChanged: this._rowHasChanged});
		this.state = {
			pageSize: 10,
			data: [],
			dataSource: ds
		}

		this._getNextPage();
	}

	render() {
		return (
			<ListView
        		dataSource={this.state.dataSource}
        		renderRow={this._renderRow.bind(this)} 
        		enableEmptySections={true} 
        		onEndReached={this._getNextPage.bind(this)} 
        		pageSize={this.state.pageSize} />
      )
	}

	_renderRow(row, sectionId, rowId, highlightRow) {
		var self = this;

		return (
			<TouchableHighlight activeOpacity={80}
								underlayColor={"#1BB759"}
								onPress={function() {
									highlightRow(sectionId, rowId)
									self.props.onUserSelected(row)
								}}>

				<View style={{flexDirection: 'row', marginBottom: 5, marginTop: 5, marginLeft: 10, alignItems: 'center'}}>
					<Image source={{uri: row.picture.thumbnail}}
						   style={{width: 50, height: 50, borderRadius: 50}} />

					<Text style={{marginLeft: 10}}>
						{row.name.first + " " + row.name.last}
					</Text>
				</View>
			</TouchableHighlight>
		)
	}

	_rowHasChanged(r1, r2) {
		return r1 !== r2
	}

	_getNextPage() {
		var self = this;

		fetchUsers(self.state.pageSize)
			.then(function(users) {
				var data = self.state.data.concat(users);

				self.setState({
					data: data,
					dataSource: self.state.dataSource.cloneWithRows(data)
				})
			});
	}
}