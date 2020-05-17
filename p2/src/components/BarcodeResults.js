import React from 'react'

const BarcodeResults = (props) => {
	console.log(props)
	return(
		<div>
			{Object.keys(props).map((info, index) => {
      			return (
       				<li key={info + index}>{info} : {props[info]}</li>
      			)
    		})}
		</div>
	)
}

export default BarcodeResults