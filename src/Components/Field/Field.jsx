import React, { Component } from 'react';
import FieldLayout from './FieldLayout';
import { WIN_PATTERNS } from '../../constants/constants';
import { connect } from 'react-redux';
import {
	SET_CURRENT_PLAYER,
	SET_FIELD,
	SET_IS_DRAW,
	SET_IS_GAME_ENDED,
} from '../../redux/actions';

class Field extends Component {
	checkWin(field, currentPlayer) {
		return WIN_PATTERNS.some(
			([a, b, c]) =>
				field[a] === currentPlayer &&
				field[b] === currentPlayer &&
				field[c] === currentPlayer,
		);
	}

	buttonClick = (ind) => {
		const { field, isGameEnded, currentPlayer, dispatch } = this.props;

		if (field[ind] || isGameEnded) {
			return;
		}

		const newField = [...field];
		newField[ind] = currentPlayer;
		dispatch(SET_FIELD(newField));

		if (this.checkWin(newField, currentPlayer)) {
			dispatch(SET_IS_GAME_ENDED(true));
			return;
		}

		if (!newField.includes('')) {
			dispatch(SET_IS_DRAW(true));
			return;
		}

		dispatch(SET_CURRENT_PLAYER(currentPlayer === 'X' ? 'O' : 'X'));
	};

	render() {
		return <FieldLayout buttonClick={this.buttonClick} />;
	}
}

const mapStateToProps = (state) => ({
	field: state.field,
	isGameEnded: state.isGameEnded,
	currentPlayer: state.currentPlayer,
});

export default connect(mapStateToProps)(Field);
