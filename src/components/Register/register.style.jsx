/** @format */

import styled from "styled-components";

export const Main = styled.main`
	margin: 0 auto;
	background-color: #141240;
	position: relative;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	align-items: center;
	display: flex;
	flex-direction: column;
`;

export const ImageCont = styled.div`
	width: 10rem;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Container = styled.div`
	margin: 10rem 0;
	max-width: 75rem;
	width: 70rem;
	background-color: #fff;
	box-shadow: 0 2.5rem 8rem 2rem rgba(0, 0, 0, 0.06);
	padding: 5rem 7rem;
	border-radius: 5px;

	@media (max-width: 425px) {
		width: 100%;
		padding: 1rem;
		border-radius: 0;
	}
`;

export const SpanStyle1 = styled.span`
	padding-top: 2rem;
	font-weight: 400;
`;

export const H2Heading = styled.h2`
	font-size: 3rem;
	text-transform: capitalize;
	font-weight: 500;
	background-image: -webkit-gradient(
		linear,
		left top,
		right top,
		from(#141240),
		to(#141240)
	);
	background-image: linear-gradient(to right, #1e2749, #1e2749);
	-webkit-background-clip: text;
	color: transparent;
	letter-spacing: 0.1rem;
	line-height: 1.3;
	display: inline-block;

	margin-bottom: 3.5rem !important;

	& span {
		color: #141240;
		font-style: oblique;
		font-weight: 700;
	}
`;

export const MainForm = styled.form`
	margin: 0 auto;
	max-width: 55rem;
	background-color: #fff;
	-webkit-box-shadow: 0 2.5rem 8rem 2rem rgba(0, 0, 0, 0.06);
	box-shadow: 0 2.5rem 8rem 2rem rgba(0, 0, 0, 0.06);
	padding: 5rem 7rem;
	border-radius: 5px;

	@media (max-width: 425px) {
		width: 100%;
		padding: 1rem;
	}
`;

export const FormGroup = styled.div`
	margin-bottom: 2.5rem;
`;

export const FormInput = styled.input`
	display: block;
	font-family: inherit;
	font-size: 1.5rem;
	color: inherit;
	padding: 1.25rem 1.75rem;
	border: none;
	width: 100%;
	background-color: #fff;
	background-color: #f2f2f2;
	border-top: 3px solid transparent;
	border-bottom: 3px solid transparent;
	-webkit-transition: all 0.3s;
	transition: all 0.3s;
	border-radius: 4px;
	-webkit-box-sizing: border-box;
	box-sizing: border-box;

	&:focus {
		outline: none;
		border-bottom: 3px solid rgba(30, 39, 73, 1);
	}

	&:focus:invalid {
		border-bottom: 3px solid #ff4800;
	}

	&::-webkit-input-placeholder {
		color: #bbb;
		font-size: 1.3rem;
	}
`;

export const FormLabel = styled.label`
	display: block;
	font-size: 1.6rem;
	font-weight: 350;
	margin-bottom: 0.75rem;
	text-align: left;
	padding-left: 5px;
`;

export const LoginButton = styled.button`
	width: 100%;
	font-size: 1.6rem;
	padding: 1.4rem 3rem;
	border-radius: 5px;
	text-transform: uppercase;
	display: inline-block;
	text-decoration: none;
	position: relative;
	-webkit-transition: all 0.4s;
	transition: all 0.4s;
	font-weight: 600;
	-webkit-backface-visibility: hidden;
	backface-visibility: hidden;
	border: none;
	cursor: pointer;
	background-color: rgb(20, 18, 64, 0.9);
	color: #fff;

	&:hover {
		background-color: rgb(20, 18, 64, 1);
		-webkit-transform: translateY(-3px);
		transform: translateY(-3px);
		-webkit-box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
		box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
	}
`;

export const LoginFooter = styled.p`
	margin-top: 1rem;
	color: #1e2749;
	font-size: 13px;
`;

export const SpanStyle = styled.span`
	font-weight: 600;
`;
