import { ADD_TASK, DELETE_TASK } from './ActionTypes';

let id = 0;

export function addTask(name) {
	return {
		type: ADD_TASK,
		name,
		'id': id++
	}
}

export function deleteTask(id) {
	return {
		type: DELETE_TASK,
		id
	}
}