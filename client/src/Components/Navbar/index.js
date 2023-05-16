import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';




function Navbar () {


  


  return (
		<nav className='navbar navbar-light navbar-expand-lg fixed-top' id='mainNav'>
			<div className='container'>
				<a className='navbar-brand' href='index.html'>
					DO YOUR RESEARCH
				</a>
				<Button
					data-bs-toggle='collapse'
					data-bs-target='#navbarResponsive'
					className='navbar-toggler'
					aria-controls='navbarResponsive'
					aria-expanded='false'
					aria-label='Toggle navigation'>
				</Button>
				<div className='collapse navbar-collapse' id='navbarResponsive'>
					<ul className='navbar-nav ms-auto'>
						<li className='nav-item'>
							<Link className='nav-link' href='index.html'>
								Home
							</Link>
						</li>
						<li className='nav-item'>
							<Link className='nav-link' href='about.html'>
								POSTS
							</Link>
						</li>
						<li className='nav-item'></li>
						<li className='nav-item'>
							<Link className='nav-link' href='post.html'>
								Contact us
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}