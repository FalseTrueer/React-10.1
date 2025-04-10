import React, { Component } from 'react';
import GameLayout from './GameLayout';
import { connect } from 'react-redux';
import { SET_RESTARTGAME } from '../../redux/actions';

class Game extends Component {
	handleRestartGame = () => {
		this.props.dispatch(SET_RESTARTGAME);
	};

	render() {
		return <GameLayout handleRestartGame={this.handleRestartGame} />;
	}
}

export default connect()(Game);
