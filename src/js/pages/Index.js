import React from "react";
import BasicCom from '../components/BasicCom';
import LifeCycle from '../components/LifeCycle';

export default class Index extends React.Component {
	render(){
		return (
			<div className="container">
				<BasicCom />
				<LifeCycle />
			</div>
		);
	}
}