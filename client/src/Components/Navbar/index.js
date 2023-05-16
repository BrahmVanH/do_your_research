import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';




function Navbar () {


  


  return (
		<nav
			className='navbar navbar-light navbar-expand-lg fixed-top'
			id='mainNav'>
			<div className='container'>
				<Link className='navbar-brand' to='/'>
					DO YOUR RESEARCH
				</Link>
				<Button
					data-bs-toggle='collapse'
					data-bs-target='#navbarResponsive'
					className='navbar-toggler'
					aria-controls='navbarResponsive'
					aria-expanded='false'
					aria-label='Toggle navigation'></Button>
				<div className='collapse navbar-collapse' id='navbarResponsive'>
					<ul className='navbar-nav ms-auto'>
						<li className='nav-item'>
							<Link className='nav-link' to='/'>
								Home
							</Link>
						</li>
						<li className='nav-item'>
							<Link className='nav-link' to='/posts'>
								Posts
							</Link>
						</li>
						<li className='nav-item'>
							<Link className='nav-link' to='/about'>
								About
							</Link>
						</li>
						<li className='nav-item'>
							<Link className='nav-link' to='/contact'>
								Contact us
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
export default Navbar;