import React from 'react';
import { Link } from "react-bootstrap/lib/Navbar";
import { useQuery } from '@apollo/client';

function Home() {
  return (
  <div>
    
    <div className="container">
        <div className="row">
            <div className="col-md-10 col-lg-8">
                <div className="post-preview"><Link to="#">
                        <h2 className="post-title">Blog post title</h2>
                    </Link>
                    <p className="post-meta">Posted by&nbsp;<Link to="#">Start Bootstrap on September 24, 2018</Link></p>
                    <div className="post-preview"><Link to="#">
                            <h2 className="post-title">Blog post title</h2>
                        </Link>
                        <p className="post-meta">Posted by&nbsp;<a to="#">Start Bootstrap on September 24, 2018</Link></p>
                    </div>
                <div className="clearfix"><button className="btn btn-primary float-end" type="button">Older Posts&nbsp;⇒</button></div>
            </div>
        </div>
    </div>
    </div>
    </div>
    
  )
}