import { connect } from 'react-redux';
import InformationLayout from './InformationLayout';
import React, { Component } from 'react';

class Information extends Component {
	render() {
		return (
			<InformationLayout
				isDraw={this.props.isDraw}
				isGameEnded={this.props.isGameEnded}
				currentPlayer={this.props.currentPlayer}
			/>
		);
	}
}

const mapStateToProps = (state) => ({
	isDraw: state.isDraw,
	isGameEnded: state.isGameEnded,
	currentPlayer: state.currentPlayer,
});

export default connect(mapStateToProps)(Information);
