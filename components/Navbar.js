import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Icon } from 'react-native-elements';
//import {Icon} from 'react-native-icons/MaterialIcons';

export default class Navbar extends Component {
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.navbar}>
					<Image style={styles.logo} source={require('../img/youtube.png')} />

					<View>
						<Icon name="search" size={27} style={styles.icons} />
						<Icon name="account-circle" size={27} style={styles.icons} />
					</View>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {},
	navbar: {
		marginTop: 35,
		height: 55,
		backgroundColor: 'blue',
		elevation: 3,

		paddingHorizontal: 15,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	logo: {
		width: 120,
		height: 23
	},
	moveright: {
		flexDirection: 'row'
	}
});
