const { AuthenticationError } = require('apollo-server-express');
const { User, Message } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
	Query: {
		user: async (parent, { userId }) => {
			if (!userId) {
				throw new AuthenticationError('Missing user ID...');
			}

			const user = await User.findOne({ _id: userId });

			if (!user) {
				throw new Error('No user found with that ID');
			}

			return user;
		},
		allUsers: async () => {
			const allUsers = await User.find();

			if (!allUsers) {
				throw new Error('Something went wrong retrieving all users');
			}

			return allUsers;
		},
		allPosts: async () => {
			const allPosts = await Post.find();

			if (!allPosts) {
				throw new Error('Something went wrong retrieving all posts');
			}

			return allPosts;
		},
	},

	Mutation: {
		createUser: async (
			parent,
			{ firstName, lastName, email, username, password, age, bio }
		) => {
			const newUser = await User.create({
				firstName,
				lastName,
				email,
				username,
				password,
				age,
				bio,
			});

			const token = signToken(newUser);

			return { token, newUser };
		},
		loginUser: async (parent, { email, password }) => {
			const user = await User.findOne({ email: email });

			if (!user) {
				throw new AuthenticationError('No user found with that email!');
			}

			const correctPassword = await user.isCorrectPassword(password);

			if (!correctPassword) {
				throw new AuthenticationError('Incorrect password!');
			}

			const token = signToken(user);

			return { token, user };
		},
		deleteUser: async (parent, { email, password }) => {
			const user = await User.findOne({ username: username });

			if (!user) {
				throw new AuthenticationError('No user with that email.');
			}

			const correctPassword = await user.isCorrectPassword(password);

			if (!correctPassword) {
				throw new AuthenticationError('Incorrect password.');
			}

			const token = signToken(newUser);

			return { token, newUser };
		},
		createPost: async (
			parent,
			{ postCreatorId, postCreatorUsername, postTitle, postBody }
		) => {
			if (!postCreatorId || !postCreatorUsername || !postTitle || !postBody) {
				throw new Error('Missing fields in createPost resolver');
			}

			const newPost = await Post.create({
				postCreatorId,
				postCreatorUsername,
				postTitle,
				postBody,
			});

			if (!newPost) {
				throw new Error('Something went wrong in creating new post');
			}

			return newPost;
		},
		updatePostBody: async (parent, { postId, newPostBody }) => {
			if (!postId || !newPostBody) {
				throw new Error('Missing post ID or new body in resolver');
			}

			const updatedPost = await Post.findOneAndUpdate(
				{ _id: postID },
				{ $set: { postBody: newPostBody } },
				{
					runValidators: true,
				}
			);

			return updatedPost;
		},
		updatePostTitle: async (parent, { postId, newPostTitle }) => {
			if (!postId || !newPostTitle) {
				throw new Error('Missing post ID or new title in resolver');
			}

			const updatedPost = await Post.findOneAndUpdate(
				{ _id: postId },
				{ $set: { postTitle: newPostTitle } },
				{ runValidators: true }
			);

			if (!updatedPost) {
				throw new Error('Something went wrong in updating post title');
			}

			return updatedPost;
		},
		deletePost: async (parent, { postId }) => {
			if (!postId) {
				throw new Error('Missing post ID in delete post resolver');
			}

			const deletedPost = await Post.delete({ _id: postId });

			if (!deletedPost) {
				throw new Error('Something went wrong in deleting post');
			}
		},
	},
};

module.exports = resolvers;
