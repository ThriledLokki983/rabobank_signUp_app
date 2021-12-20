/** @format */

import React, { useState } from "react";
import { useForm } from "../../customHooks/useForm";
import DisplayError from "../../components/Error/error.component";
import { validatePassword } from "../utils/validate";
import {
	Container,
	Main,
	H2Heading,
	MainForm,
	FormGroup,
	FormInput,
	FormLabel,
	LoginButton,
	LoginFooter,
	SpanStyle,
} from "./register.style";

function SignUp({ onSignUp, onButtonClick }) {
	const initialValue = {};
	const [values, setValues] = useForm(initialValue);
	const [error, setError] = useState();
	const [success, setSuccess] = useState();
	const [errMessage, setErrMessage] = useState("Something went worng");

	const handleSignUp = async (event) => {
		event.preventDefault();

		const user = {
			firstName: values.firstName,
			lastName: values.lastName,
			email: values.email,
			password: values.password,
		};

		if (validatePassword(user)) {
			const data = await onSignUp(user);
			console.log(data);
			if (data._id) {
				setSuccess("User created successfully");
			}
		} else {
			setError(true);
			setErrMessage("Password Incorrect: Please check and try again!");
		}

		event.target.reset();
	};

	return (
		<>
			{error ? (
				<DisplayError message_1={errMessage} color={"red"} />
			) : success ? (
				<DisplayError message_1={success} color={"green"} />
			) : (
				<></>
			)}
			<Main>
				<Container>
					<H2Heading>
						{" "}
						join <span>rabobank</span>{" "}
					</H2Heading>
					<MainForm onSubmit={handleSignUp}>
						<FormGroup>
							<FormLabel htmlFor="firstName">First Name</FormLabel>
							<FormInput
								placeholder="John"
								type="text"
								required
								name="firstName"
								onChange={setValues}
							/>
						</FormGroup>
						<FormGroup>
							<FormLabel htmlFor="lastName">Last Name</FormLabel>
							<FormInput
								placeholder="Doe"
								type="text"
								required
								name="lastName"
								onChange={setValues}
							/>
						</FormGroup>
						<FormGroup>
							<FormLabel htmlFor="email">Email Address</FormLabel>
							<FormInput
								placeholder="rabobank@example.nl"
								type="text"
								required
								name="email"
								onChange={setValues}
							/>
						</FormGroup>
						<FormGroup>
							<FormLabel htmlFor="password">Password</FormLabel>
							<FormInput
								placeholder="************"
								required
								type="password"
								minLength={8}
								name="password"
								onChange={setValues}
							/>
						</FormGroup>
						<FormGroup>
							<LoginButton onClick={onButtonClick} type="submit">
								Sign up
							</LoginButton>
						</FormGroup>
						<FormGroup>
							<LoginFooter>
								{" "}
								&copy;Gideon 2021: <SpanStyle> Rabobank</SpanStyle>
							</LoginFooter>
						</FormGroup>
					</MainForm>
				</Container>
			</Main>
		</>
	);
}

export default SignUp;
