import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class FieldLayout extends Component {
	render() {
		return (
			<ul className="grid grid-cols-3 grid-rows-3">
				{this.props.field.map((el, ind) => (
					<li
						key={ind}
						className="flex justify-center items-center border-1 border-black border-solid"
					>
						<button
							className="px-13 py-13 cursor-pointer"
							onClick={() => this.props.buttonClick(ind)}
						>
							{el}
						</button>
					</li>
				))}
			</ul>
		);
	}
}

FieldLayout.propTypes = {
	buttonClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
	field: state.field,
});

export default connect(mapStateToProps)(FieldLayout);
