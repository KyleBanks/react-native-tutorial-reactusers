import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';

export default class UserDetailsView extends Component {

	render() {
		var user = this.props.user;

		return (
			<View>
				<Image source={{uri: user.picture.large}}
						style={{width: null, height: 300}} />

				<View style={{alignItems: "center", marginTop: 40}}>
					<Text style={{fontSize: 22, fontWeight: "bold", marginBottom: 10}}>
						{user.name.first + " " + user.name.last}
					</Text>
					<Text>{user.login.username}</Text>
					<Text>{user.email}</Text>
					<Text>{user.cell}</Text>

					<TouchableHighlight style={{marginTop: 40, backgroundColor: "#1BB759", width: 200, padding: 15, borderRadius: 20}}
							onPress={this._close.bind(this)}>
						<Text style={{fontSize: 22, color: "white", textAlign: "center"}}>
							OK
						</Text>
					</TouchableHighlight>
				</View>
			</View>
		)
	}

	_close() {
		this.props.onClose();
	}

}