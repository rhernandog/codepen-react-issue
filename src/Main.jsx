let langs = [
	{"value":"no-val", "text":"Select Language"},
	{"value":"en", "text":"English"},
	{"value":"es", "text":"Español"},
	{"value":"fr", "text":"Français"}
];


class Option extends React.Component{

	render(){

		return(
			<option value={this.props.value}>{this.props.text}</option>
		);

	}

};


class MainComp extends React.Component{

	constructor(props){

		super(props);

		this.state = {lang:this.props.langData[3]};

		this.changeHandler = this.changeHandler.bind(this);
		this.renderOption = this.renderOption.bind(this);

	}

	renderOption(e,i){

		return <Option key={i} value={e.value} text={e.text} />;

	}

	changeHandler(e){

		let selection = e.target.value;
		let languages = this.props.langData;

		for( var i = 0; i < languages.length; i++ ){

			if( selection === languages[i].value ) {
				this.setState({lang:languages[i]});
				break;
			}// if end

		}// loop end

	}

	componentDidUpdate(){
		console.log(this.props.langData);
	}

	render(){

		return(
			<label>Multiple Select Menu
				<select onChange={this.changeHandler} defaultValue={this.state.lang.value}>
					{this.props.langData.map(this.renderOption)}
				</select>
			</label>
		);

	}

};


ReactDOM.render(
	<MainComp langData={langs} />, document.getElementById('main')
);
