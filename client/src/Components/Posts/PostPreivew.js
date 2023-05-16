import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';

function PostPreview(allPosts) {
	return (
		<div>
			<div className='container'>
				<div className='row'>
					<div className='col-md-10 col-lg-8'>
						{allPosts.map((post) => (
							<div className='post-preview'>
								<div>
									<h2 className='post-title'>{post.postTitle}</h2>
								</div>
								<p className='post-meta'>
									Posted by<span>{post.postCreatorUsername}</span>
								</p>
							</div>
						))};
					</div>
				</div>
			</div>
		</div>
	);
}

export default PostPreview;
