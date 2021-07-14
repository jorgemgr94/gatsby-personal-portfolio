import React from "react";
import Position from "./Position";
import { positions } from "../../database";

function ProfessionalExperience() {
	return (
		<>
			<br />
			<span className="bold">PROFESSIONAL EXPERIENCE</span>
			<br />
			<br />
			{positions.map((position, key) => {
				return <Position key={key} data={position} />;
			})}
		</>
	);
}

export default ProfessionalExperience;
