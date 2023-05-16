const { gql } = require('apollo-server-express');

typeDefs = gql`
	type User {
		_id: ID!
		firstName: String!
		lastName: String!
		email: String!
		username: String!
		password: String!
		age: Int!
		bio: String!
		posts: [Post]
	}

	type Post {
		_id: ID!
		postCreatorId: ID!
		postCreatorUsername: String!
		postTitle: String!
		postBody: String!
		createdAt: String!
	}

	input PostInput {
		postCreatorId: ID!
		postCreatorUsername: String!
		postTitle: String!
		postBody: String!
		createdAt: String!
	}

	type Auth {
		user: User
		token: ID!
	}

	type Query {
		user(userId: ID!): User
		allUsers: [User]!
		allPosts: [Post]!
	}

	type Mutation {
		createUser(
			firstName: String!
			lastName: String!
			email: String!
			username: String!
			password: String!
			age: Int!
			bio: String!
		): Auth
		loginUser(email: String!, password: String!): Auth
		deleteUser(email: ID!, password: String!): User
		createPost(
			postCreatorId: ID!
			postCreatorUsername: String!
			postTitle: String!
			postBody: String!
		): Post!
		updatePostBody(postId: ID!, newPostBody: String!): Post!
		updatePostTitle(postId: ID!, newPostTitle: String!): Post!
		deletePost(postId: ID!): Post!
	}
`;
module.exports = typeDefs;
