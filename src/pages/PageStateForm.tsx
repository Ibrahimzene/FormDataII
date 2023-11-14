import { useState } from "react";

const initialFormInfo = {
	fields: {
		"firstName": {
			"label": "First Name",
			"value": "nnn222",
			isRequired: true,
			isValid: true
		}
	}
}

export const PageStateForm = () => {
	const [formInfo, setFormInfo] = useState(initialFormInfo);
	return (
		<form>
			<fieldset>
				<legend>New Member</legend>

				<div>
					<label htmlFor="firstName"></label>
					<input type="text" onChange={handleFieldFirstName} value={formInfo.fields.firstName.value} id="firstName" />
				</div>
				<button>Submit</button>
			</fieldset>
		</form>
	);
};
