import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Header extends Component {
	render() {
		return (
			<View style={ style.container }>
				<Text style={ style.text }>React Users</Text>
			</View>
		)
	}
}

const style = StyleSheet.create({
	container: {
		backgroundColor: "#1BB759"
	},

	text: {
		color: "white",
		textAlign: "center",
		fontSize: 18,
		padding: 20
	}
});