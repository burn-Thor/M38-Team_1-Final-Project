import { useState } from "react";
import { Navigate } from "react-router-dom";

import {
	Form,
	InputLogin,
	LoginBtn,
	FormBox,
	FormTitle,
	FormOuter,
	AccountBtn,
	LoginHeader,
	LoginHeaderBox,
} from "./login.styled";
import { logIn, signUp } from "../../utils";
import Nav from "../nav/nav";
import "./login.css";


const Login = ({ setter, user }) => {
	const [username, setUsername] = useState();
	const [name, setName] = useState();
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const [logBool, setLogBool] = useState(false);

	const submitSignUp = async (e) => {
		e.preventDefault();

		if (logBool) {
			console.log(`Log In: ${username}, ${password}, ${setter}`);
			await logIn(username, password, setter);
		} else {
			console.log(
				`Sign Up: ${username}, ${name}, ${email}, ${password}, ${setter}`
			);
			await signUp({ username, name, email, password }, setter);
		}
	};


	return (
		<div>
			<div>
				<Nav />
			</div>
			<div className="spacer" />

			<div>
				{user && <Navigate to="/shop" />}
				<div className="backgroundLogin">
					<FormOuter>
						<LoginHeaderBox>
							<LoginHeader>
								Selling everything, anywhere at the best prices
							</LoginHeader>
						</LoginHeaderBox>
						<FormBox>
							<Form onSubmit={submitSignUp}>
								<FormTitle>{!logBool ? "Sign Up" : "Log In"}</FormTitle>
								<InputLogin
									onChange={(e) => setUsername(e.target.value)}
									placeholder="Username"
								/>
								<div className="formSpaces" />
								{!logBool && (
									<InputLogin
										onChange={(e) => setName(e.target.value)}
										placeholder="Name"
									/>
								)}
								<div className="formSpaces" />
								{!logBool && (
									<InputLogin
										id="email"
										onChange={(e) => setEmail(e.target.value)}
										placeholder="Email"
									/>
								)}
								<div className="formSpaces" />
								<InputLogin
									onChange={(e) => setPassword(e.target.value)}
									placeholder="Password"
									type="password"
								/>
								<div className="formSpaces" />
								<LoginBtn onClick={submitSignUp}>
									{logBool ? "Log In" : "Sign Up"}
								</LoginBtn>
								<div className="formSpaces" />
							</Form>
							<div className="btnMid">
								<AccountBtn onClick={() => setLogBool(!logBool)}>
									{logBool ? "Don't " : "Already "} have an account?
								</AccountBtn>
							</div>
							<div className="black" />
						</FormBox>
					</FormOuter>
				</div>
			</div>
		</div>
	);
};

export default Login;
