import React from 'react';
import { connect } from 'react-redux';

import { testAction1, testAction2 } from './../actions/testAction';
import { testActionFile2_1, testActionFile2_2 } from './../actions/testActionFile2';

@connect((store) => {
	return {
		data : store.test.data,
		data_1 : store.test2.data_1,
		data_2 : store.test2.data_2,
	}
})

export default class Layout extends React.Component{
	constructor(props){
		super(props)
	}

	action1(){
		this.props.dispatch(testAction1());
	}

	action2(){
		this.props.dispatch(testAction2());
	}

	action3(){
		this.props.dispatch(testActionFile2_1());
	}

	action4(){
		this.props.dispatch(testActionFile2_2());
	}

	render(){
		return(
			<div>
				Hello New Structure!
				Git Added,
				Ritika Branch

				<button onClick = {this.action1.bind(this)}>Action1</button>
				<button onClick = {this.action2.bind(this)}>Action2</button>
				<button onClick = {this.action3.bind(this)}>Action3</button>
				<button onClick = {this.action4.bind(this)}>Action4</button>

				<h2>{this.props.data}</h2>
				<h2>{this.props.data_1}</h2>
				<h2>{this.props.data_2}</h2>
			</div>
		)
	}
}