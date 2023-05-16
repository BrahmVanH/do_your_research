import { gql } from '@apollo/client';

export const GET_USER = gql`
	query user($userId: ID!) {
		user(userId: $userId) {
			_id
			firstName
			lastName
			email
			username
			age
			bio
			posts
		}
	}
`;

export const GET_ALL_USERS = gql`
	query allUsers {
		allUsers {
			_id
			firstName
			lastName
			email
			username
			age
			bio
			posts
		}
	}
`;

export const GET_ALL_POSTS = gql`
  query allPosts {
    allPosts {
      _id
      postCreatorId
      postCreatorUsername
      postTitle
      postBody
      createdAt
    }
  }
`

