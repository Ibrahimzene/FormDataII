import { useState } from "react";

const initialFormInfo = {
	fields: {
		firstName: {
			label: "First Name",
			value: "",
			isRequired: true,
			isValid: true,
		},
		lastName: {
			label: "Last Name",
			value: "",
			isRequired: true,
			isValid: true,
		},
	},
};

export const PageStateForm = () => {
	const [formInfo, setFormInfo] = useState(initialFormInfo);

	const handleFieldFirstName = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		const _formInfo = structuredClone(formInfo);
		_formInfo.fields.firstName.value = value;
		setFormInfo(_formInfo);

		// setFormInfo({
		//   ...formInfo,
		//   fields: {
		//     ...formInfo.fields,
		//     firstName: {
		//       ...formInfo.fields.firstName,
		//       value: e.target.value,
		//     },
		//   },
		// });
	};

	const handleFieldLastName = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		const _formInfo = structuredClone(formInfo);
		_formInfo.fields.firstName.value = value;
		setFormInfo(_formInfo);
	};

	return (
		<form>
			<fieldset className="border border-slate-500 p-4 rounded max-w-[15rem]">
				<legend>New Member</legend>

				<div>
					<label htmlFor="firstName" className="w-40">{formInfo.fields.firstName.label}</label>
					<input
						type="text"
						onChange={(e) => handleFieldFirstName(e)}
						value={formInfo.fields.firstName.value}
						id="firstName"
					/>
				</div>

				<button>Submit</button>
			</fieldset>
		</form>
	);
};