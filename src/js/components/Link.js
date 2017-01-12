import React, { PropTypes } from 'react'
import ReactDOM from 'react-dom'


const Link = ({ children, onClick }) => (
	<a href='#'>{children}</a>
);

Link.propTypes = {
	children : PropTypes.node.isRequired
}

export default Link