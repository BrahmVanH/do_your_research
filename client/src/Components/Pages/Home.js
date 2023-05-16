import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { useQuery } from '@apollo/client';
import { GET_ALL_POSTS } from '../../utils/queries';
import PostPreview from '../Posts/PostPreivew';
import Auth from '../../utils/auth';

function Home() {

    const [allPosts, setAllPosts] = useState({});

    const userId = Auth.getProfile().data._id;

    const allThem = useQuery(GET_ALL_POSTS);

    console.log(allThem);

    // useEffect(() => {
    //     if(data && data.allPosts) {
    //     setAllPosts(data.allPosts);
    //     } else {
    //         throw new Error('no data to set posts with');
    //     }
    // }, [data]);

    console.log(allPosts);


  return (
  <div>
    
    <div className="container">
        <div className="row">
            <div className="col-md-10 col-lg-8">
                <div className="post-preview">
                    <PostPreview
                    key={userId}
                    allPosts={allPosts}
                    />
                <div className="clearfix"><button className="btn btn-primary float-end" type="button">Older Posts&nbsp;⇒</button></div>
            </div>
        </div>
    </div>
    </div>
    </div>
    
  )
};

export default Home;