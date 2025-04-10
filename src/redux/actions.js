export const SET_RESTARTGAME = {
	type: 'SET_RESTARTGAME',
};

export const SET_FIELD = (newField) => ({
	type: 'SET_FIELD',
	payload: newField,
});

export const SET_IS_GAME_ENDED = (isGameEnded) => ({
	type: 'SET_IS_GAME_ENDED',
	payload: isGameEnded,
});

export const SET_IS_DRAW = (isDraw) => ({
	type: 'SET_IS_DRAW',
	payload: isDraw,
});

export const SET_CURRENT_PLAYER = (currentPlayer) => ({
	type: 'SET_CURRENT_PLAYER',
	payload: currentPlayer,
});
