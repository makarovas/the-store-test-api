
import React from 'react';
import styled from 'styled-components';


const ErrorWrapper = styled.div`
background-color: red;
height: 100px;
width: 100%;
color: black;

`
const ErrorIndicator = () => {
	return (
		<div>
			Error!
		</div>
	);
};

export default ErrorIndicator;