export default function reducer(state = {
	data_1 : null,
	data_2 : null
}, action){
	switch(action.type){
		case "TEST_ACTION_FILE_2_1" : {
			return {...state, data_1 : "TEST_ACTION_FILE_DATA_2 hellow ritiitka"}
		}

		case "TEST_ACTION_FILE_2_2" : {
			return {...state, data_1 : "TEST_ACTION_FILE_DATA_2", data_2 : "TEST_ACTION_FILE_DATA_2hshdfjhsj fkjhkj"}
		}
	}

	return state;
}