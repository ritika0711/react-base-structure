export function testAction1(){
	return function(dispatch){
		dispatch({
			type : "TEST_ACTION_1"
		})
	}
}

export function testAction2(){
	return function(dispatch){
		dispatch({
			type : "TEST_ACTION_2"
		})
	}
}