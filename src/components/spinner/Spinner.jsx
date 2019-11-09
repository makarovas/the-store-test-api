import React from 'react';
import icon from './images/icon.svg';
import styled from 'styled-components';


const Container = styled.div`
display: flex;
align-self: center;
justify-self: center;
height: 40px;
	`


const Spinner = () => {
	return (
		<div >
			<img src={icon} alt='spinner' />

		</div >
	)
};
export { Spinner };