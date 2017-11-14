import React, { Component } from 'react';

class Hello extends React.Component {
	// constructor(props) {
	// 	super(props);

	// 	this.state = {
	// 		count: 5
	// 	};
	// }


	render() {
		return (
			<h1>Hello World, {this.props.name}</h1>
		);
	}
}

export default Hello;