import React from 'react'
import '../styles.css'

export default function Footer(){

	const currentYear = new Date().getFullYear();
	return (

			<div> &copy; {currentYear} MovieDux, All right reserved</div>

		)
}