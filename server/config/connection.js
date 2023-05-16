const mongoose = require('mongoose');

// Pass 

mongoose.connect(
	process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/do_your_research_blog'
);

module.exports = mongoose.connection;
