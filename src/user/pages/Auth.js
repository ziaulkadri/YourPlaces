import React, { useContext, useState } from 'react';
import { AuthContext } from '../../shared/context/auth-context';
import Button from '../../shared/FormElements/Button';
import Input from '../../shared/FormElements/Input';
import { useForm } from '../../shared/hooks/form-hook';
import Card from '../../shared/UIElements/Card';
import {
	VALIDATOR_EMAIL,
	VALIDATOR_MINLENGTH,
	VALIDATOR_REQUIRE,
} from '../../util/validators';
import './Auth.css';
function Auth(props) {
	const auth = useContext(AuthContext);
	const [isLoginMode, setIsLoginMode] = useState(true);
	const [formState, InputHandler, setFormData] = useForm(
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

	const switchModeHandler = () => {
		if (!isLoginMode) {
			setFormData(
				{
					...formState.inputs,
					name: undefined,
				},
				formState.inputs.email.isValid && formState.inputs.password.isValid
			);
		} else {
			setFormData(
				{
					...formState.inputs,
					name: {
						value: '',
						isValid: false,
					},
				},
				false
			);
		}
		setIsLoginMode((prevmode) => !prevmode);
	};

	const authSubmitHandler = (event) => {
		event.preventDefault();
		console.log(formState.inputs);
		auth.login();
	};

	return (
		<Card className="authentication">
			<h2>Login Required</h2>
			<hr />
			<div style={{ margin: '10px', padding: '10px' }}>
				<form onSubmit={authSubmitHandler}>
					{!isLoginMode && (
						<Input
							element="input"
							type="text"
							id="name"
							label="Your Name"
							validators={[VALIDATOR_REQUIRE()]}
							errorText="Please enter a name."
							onInput={InputHandler}
						/>
					)}
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
						{isLoginMode ? 'Login' : 'Signup'}
					</Button>
				</form>
				<Button inverse onClick={switchModeHandler}>
					Switch to {isLoginMode ? 'Signup' : 'Login'}
				</Button>
			</div>
		</Card>
	);
}

export default Auth;
