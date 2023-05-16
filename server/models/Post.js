const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const messageSchema = new Schema(
	{
		postCreatorId: {
			type: Schema.Types.ObjectId,
			required: true,
		},
		postCreatorUsername: {
			type: String,
			required: true,
		},
    postTitle: {
      type: String,
      required: true,
    },
		postBody: {
			type: String,
			required: true,
		},
		createdAt: {
			type: Date,
			default: Date.now,
			get: (timestamp) => dateFormat(timestamp),
		},
	},
	{
		toJSON: {
			virtuals: true,
		},
	}
);

const Post = model('post', messageSchema);

module.exports = Post;
