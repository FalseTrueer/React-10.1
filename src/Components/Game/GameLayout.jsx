import Field from '../Field/Field';
import Information from '../Information/Information';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
export default class GameLayout extends Component {
	render() {
		return (
			<div className="m-2.5 mx-auto p-2.5 flex flex-col items-center justify-between border-2 border-black border-solid rounded-2xl gap-5 w-fit ">
				<Information />
				<Field />
				<button
					className="border-2 border-black border-solid bg-black text-white rounded-md p-2.5 cursor-pointer"
					onClick={this.props.handleRestartGame}
				>
					Начать заново
				</button>
			</div>
		);
	}
}

GameLayout.propTypes = {
	handleRestartGame: PropTypes.func.isRequired,
};
