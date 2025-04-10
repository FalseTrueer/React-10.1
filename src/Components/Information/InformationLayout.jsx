import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class InformationLayout extends Component {
	render() {
		return (
			<h1 className="text-2xl font-semibold">
				{this.props.isDraw
					? 'Ничья'
					: this.props.isGameEnded
						? `Победа: ${this.props.currentPlayer}`
						: `Ходит: ${this.props.currentPlayer}`}
			</h1>
		);
	}
}

InformationLayout.propTypes = {
	isDraw: PropTypes.bool.isRequired,
	isGameEnded: PropTypes.bool.isRequired,
	currentPlayer: PropTypes.string.isRequired,
};
