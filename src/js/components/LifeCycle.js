import React from "react";
export default class LifeCycle extends React.Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	name: this.props.name,
	  	age: this.props.age
	  };
	}

	componentWillMount(){
		console.log('React组件生命周期：componentWillMount');
	}

	componentDidMount(){
		console.log('React组件生命周期：componentDidMount');
	}

	componentWillReceiveProps(nextProps){
		console.log(nextProps);
		console.log('React组件生命周期：componentWillReceiveProps');
	}



	render(){
		return (
			<section>
				<h2>React组件生命周期</h2>
				<div className="padding">
					
				</div>
			</section>
		);
	}
}