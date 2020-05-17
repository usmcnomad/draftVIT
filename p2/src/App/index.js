import React, { Component } from "react";
import "./style.css";

import Title from '../components/Title'
import Navigation from '../components/Navigation'
import BarcodeForm from '../components/BarcodeForm'
import BarcodeResults from '../components/BarcodeResults'
import Footer from '../components/Footer'

import axios from 'axios'

class App extends Component {
	constructor(){
		super()
		this.state={
			data: null,
			inputFormValue: ''
		}
	}

	handleInputChange = (event) => {
		this.setState({
			inputFormValue: event.target.value
		})
	}

	onFormSubmit = async(event) => {
		event.preventDefault()

		const resp = await axios(`https://www.datakick.org/api/items/${this.state.inputFormValue}`, {mode: "no-cors"})
		this.setState({
			data: resp.data,
			inputFormValue: ''
		})
		console.log(this.state)
	}

	render() {
		return (
			<div className="App">
				<Title />
				<Navigation />
				<main>
					<BarcodeForm 
						handleInputChange={this.handleInputChange}
						inputFormValue={this.state.inputFormValue}
						onFormSubmit={this.onFormSubmit}/>
					<BarcodeResults {...this.state.data}/>
				</main>
				<Footer />
			</div>
	  	)
	  }
}

export default App;
