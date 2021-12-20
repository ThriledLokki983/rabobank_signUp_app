/** @format */

import React from "react";
import { ErrorContainer, InfoTitle, InfoMessage } from "./error.style";

function Error({ title, message_1, color }) {
	return (
		<ErrorContainer backGroundColor={color}>
			<InfoTitle>{title}</InfoTitle>
			<InfoMessage>{message_1}</InfoMessage>
		</ErrorContainer>
	);
}

export default Error;
