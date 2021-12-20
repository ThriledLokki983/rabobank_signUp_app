/** @format */

/**
 * This function takes in a string(Password) and checks it accordint to the following rules:
 * 1. Must be at least 8 characters long
 * 2. Must contain at lower and uppercase letter
 * 3. Should not contain user’s first or last name.
 * @param {Object} | userObjeto | The user object
 * @returns {Boolean} | True if password is valid
 */
export const validatePassword = (userObject) => {
	if (userObject.password.length < 8) {
		return false;
	} else if (!/[a-z]/.test(userObject.password) || !/[A-Z]/.test(userObject.password)) {
		return false;
	} else if (
		userObject.password.includes(userObject.firstName) ||
		userObject.password.includes(userObject.lastName)
	) {
		return false;
	} else {
		return true;
	}
};
