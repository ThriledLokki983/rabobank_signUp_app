/** @format */
import { useState } from "react";
import "./App.css";
import { createUser, getAllUsers } from "../src/components/utils/requstHandler";

// COMPONENTS
import Register from "./components/Register/register.component";

function App() {
	const [users, setUsers] = useState([]);

	// sign up user
	const signUpHandler = async (userObject) => {
		return await createUser("", userObject);
	};

	// wait for 4s and make a get request to the server
	const getUsers = async () => {
		await new Promise((resolve) => setTimeout(resolve, 4000));
		const users = await getAllUsers();
		setUsers(users);
	};

	console.log(users);

	return (
		<div className="App">
			<Register onSignUp={signUpHandler} onButtonClick={getUsers} />
		</div>
	);
}

export default App;
