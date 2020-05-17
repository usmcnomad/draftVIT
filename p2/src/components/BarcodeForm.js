import React from 'react'

const BarcodeForm = (props) => {
	return(
		<div>
			<form onSubmit={props.inputFormValue ? props.onFormSubmit : null}>
				<input 
					type="number" 
					placeholder="Barcode"
					value={props.inputFormValue}
					onChange={props.handleInputChange}/>
				<input type="submit" />
			</form>
		</div>
	)
}

export default BarcodeForm