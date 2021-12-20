/** @format */

import axios from "axios";

const BASE_URL = `http://localhost:8080/api/v1/`;
const RABO_URL = `https://demo-api.now.sh/users`;

export const createUser = async (urlSubString = "", data = "", rabo = true) => {
	const fetchdData = await fetch(`${rabo ? RABO_URL : BASE_URL}${urlSubString}`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: data && JSON.stringify(data),
	});
	const theData = await fetchdData.json();
	return theData;
};

export const getAllUsers = async (urlSubString = "", rabo = true) => {
	const fetchdData = await fetch(`${rabo ? RABO_URL : BASE_URL}${urlSubString}`, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
	});
	const theData = await fetchdData.json();
	return theData;
};
