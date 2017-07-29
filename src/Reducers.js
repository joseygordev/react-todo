import { ADD_TASK, DELETE_TASK } from './ActionTypes';

function tasks(state = [], action) {
	switch(action.type) {
		case ADD_TASK:
			let obj = [
				...state,
				{
					'name': action.name,
					'id': action.id 
				}
			];

			return obj;
		case DELETE_TASK: 
		 	state = state.filter(item => item.id !== action.id);
			return state;
		default:
			return state;
	}
}

export default tasks;