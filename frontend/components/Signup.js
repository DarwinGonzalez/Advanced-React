import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Form from './styles/Form';
import Error from './ErrorMessage';
import {CURRENT_USER_QUERY} from './User';

const SIGNUP_MUTATION = gql`
	mutation SIGNUP_MUTATION($email: String!, $name: String!, $password: String!) {
		signup(email: $email, name: $name, password: $password) {
			id
			email
			name
		}
	}
`;

class Signup extends Component {
	state = {
		name: '',
		email: '',
		password: ''
	};
	saveToState = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};
	render() {
		return (
			<Mutation
				refetchQueries={[{query: CURRENT_USER_QUERY}]}
				mutation={SIGNUP_MUTATION}
				variables={this.state}>
				{(signup, { error, loading }) => (
					<Form method="post" onSubmit={async (e) => {
                        e.preventDefault();
                        await signup();
                        this.setState({name: '', email: '', password: ''});
                    }}>
						<fieldset disabled={loading} aria-busy={loading}>
							<h2>Signup for an Account</h2>
                            <Error error={error}></Error>
							<label htmlFor="email">
								Email
								<input
									type="email"
									name="email"
									placeholder="xxxxxx@gmail.com"
									value={this.state.email}
									onChange={this.saveToState}
								/>
							</label>
							<label htmlFor="name">
								Name
								<input
									type="text"
									name="name"
									placeholder="John"
									value={this.state.name}
									onChange={this.saveToState}
								/>
							</label>
							<label htmlFor="password">
								Password
								<input
									type="password"
									name="password"
									value={this.state.password}
									onChange={this.saveToState}
								/>
							</label>
							<button type="submit">Sign Up!</button>
						</fieldset>
					</Form>
				)}
			</Mutation>
		);
	}
}

export default Signup;
