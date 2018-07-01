export default function reducer(state = {
	data : null
}, action){
	switch(action.type){
		case "TEST_ACTION_1" : {
			return {...state, data:"TEST_ACTION_1"}
		}

		case "TEST_ACTION_2" : {
			return {...state, data : "TEST_ACTION_2"}
		}
	}

	return state;
}