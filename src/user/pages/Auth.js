import React from 'react';
import Button from '../../shared/FormElements/Button';
import Input from '../../shared/FormElements/Input';
import { useForm } from '../../shared/hooks/form-hook';
import Card from '../../shared/UIElements/Card';
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH } from '../../util/validators';
import './Auth.css';
function Auth(props) {
	const [formState, InputHandler] = useForm(
		{
			email: {
				value: '',
				isValid: false,
			},
			password: {
				value: '',
				isValid: false,
			},
		},
		false
	);

	const authSubmitHandler = (event) => {
		event.preventDefault();
		console.log(formState.inputs);
	};
	return (
		<Card className="authentication">
			<h2>Login Required</h2>
			<hr />
			<div style={{ margin: '10px', padding: '10px' }}>
				<form onSubmit={authSubmitHandler}>
					<Input
						element="input"
						type="email"
						id="email"
						label="E-Mail"
						validators={[VALIDATOR_EMAIL()]}
						errorText="Please enter a valid email address."
						onInput={InputHandler}
					/>
					<Input
						element="input"
						type="password"
						id="password"
						label="Password"
						validators={[VALIDATOR_MINLENGTH(5)]}
						errorText="Please enter a valid password at least 5 characters."
						onInput={InputHandler}
					/>
					<Button type="submit" disabled={!formState.isValid}>
						Login
					</Button>
				</form>
			</div>
		</Card>
	);
}

export default Auth;
