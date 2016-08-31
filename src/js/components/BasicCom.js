import React from "react";
export default class BasicCom extends React.Component {
	render(){
		return (
			<section>
				<h2>React基本使用：定义并导出组件</h2>
				<div className="padding">
<pre>{`import React from "react";
export default class Hello extends React.Component {
  render(){
	return (
	  <h1>Hello, {this.props.name} </h1>
	);
  }
}
`}</pre>
				</div>
				<hr />
				<div className="padding">
					<p>import Hello from '../components/Hello';</p>
<pre>{`
<Hello name="ken" />`}</pre>
				</div>
			</section>
		);
	}
}