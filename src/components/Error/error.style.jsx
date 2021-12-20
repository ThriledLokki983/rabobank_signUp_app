/** @format */

import styled from "styled-components";

export const ErrorContainer = styled.div`
	position: absolute;
	top: 5rem;
	left: 50%;
	padding: 1.5rem 0;
	display: block;
	transform: translate(-50%, -50%);
	width: 60rem;
	max-width: 80rem;
	text-align: center;
	z-index: 2;
	background-color: ${(props) =>
		props.backGroundColor ? props.backGroundColor : "#ff4800"};
	border-radius: 5px;

	&:focus {
		display: none;
	}

	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

export const InfoTitle = styled.h2`
	display: flex;
	font-weight: 700;
	font-size: 2rem;
	text-transform: capitalize;
	align-items: center;
	justify-content: center;
	margin-bottom: 1rem;
	color: #fff;
`;

export const InfoMessage = styled.p`
	font-size: 1.8rem;
	max-width: 50rem;
	margin: 0 auto;
	color: #fff;
`;
