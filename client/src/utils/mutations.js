import { gql } from '@apollo/client';

export const CREATE_USER = gql`
	mutation createUser(
		$firstName: String!
		$lastName: String!
		$email: String!
		$username: String!
		$password: String!
		$age: Int!
		$bio: String!
	) {
		createUser(
			firstName: $firstName
			lastName: $lastName
			email: $email
			username: $username
			password: $password
			age: $age
			bio: $bio
		) {
			token
			user {
				_id
				firstName
				lastName
				email
				username
				age
				bio
			}
		}
	}
`;

export const LOGIN_USER = gql`
	mutation loginUser($email: String!, $password: String!) {
		loginUser(email: $email, password: $password) {
			token
			user {
				_id
				username
			}
		}
	}
`;

export const DELETE_USER = gql`
	mutation deleteUser($email: String!, $password: String!) {
		deleteUser(email: $email, password: $password) {
			_id
			email
			username
		}
	}
`;

export const CREATE_POST = gql`
	mutation createPost(
		$postCreatorId: ID!
		$postCreatorUsername: String!
		$postTitle: String!
		$postBody: String!
	) {
		createPost(
			postCreatorId: $postCreatorId
			postCreatorUsername: $postCreatorUsername
			postTitle: $postTitle
			postBody: $postBody
		) {
			_id
			postCreatorId
			postCreatorUsername
			postTitle
			postBody
			createdAt
		}
	}
`;

export const UPDATE_POST_BODY = gql`
	mutation updatePostBody($postId: ID!, $newPostBody: String!) {
		updatePostBody(postId: $postId, newPostBody: $newPostBody) {
			_id
			postCreatorId
			postCreatorUsername
		}
	}
`;

export const UPDATE_POST_TITLE = gql`
	mutation updatePostTitle($postId: ID!, $newPostTitle: String!) {
		updatePostTitle(postId: $postId, newPostTitle: $newPostTitle) {
			_id
			postCreatorId
			postCreatorUsername
		}
	}
`;

export const DELETE_POST = gql`
	mutation deletePost($postId: ID!) {
		deletePost(postId: $postId) {
			_id
			postCreatorId
			postCreatorUsername
		}
	}
`;
