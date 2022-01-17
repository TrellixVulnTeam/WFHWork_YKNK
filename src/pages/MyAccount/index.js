import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import HeaderLogo from '../../assets/images/header-logo.svg';
import spriteIconClose from '../../assets/icons/sprite-icon-close.svg';
import spriteIconMenu from '../../assets/icons/sprite-icon-menu.svg';

const Index = () => {
	const [ isDropDown, setIsDropDown ] = useState(false);

	useEffect(() => {
		const btnMenuOpen = document.querySelector('.nav__btn-menu');
		const btnMenuClose = document.querySelector('.nav__btn-close');
		const navMenu = document.querySelector('.nav__menu');
		const dropDown = document.querySelector('.drop-down');

		btnMenuOpen.addEventListener('click', () => {
			navMenu.classList.add('nav__menu--open');
			dropDown.style.display = 'none';
		});
		btnMenuClose.addEventListener('click', () => {
			navMenu.classList.remove('nav__menu--open');
			dropDown.style.display = 'block';
		});
	}, []);

	const reqType = window.location.pathname;

	return (
		<header className="my_account_header">
			<nav className="my_account_nav">
				<Link to="/" className="nav__left">
					<img className="nav__logo h-3" src={HeaderLogo} alt="header_img" title="header_img" />
				</Link>
				<div className="nav__menu">
					<div role="button" className="nav__btn-close">
						<img src={spriteIconClose} alt="header_img" title="header_img" />
					</div>
					<ul className="nav__center">
						<li className="nav__item">
							<Link
								to="/directory"
								className={reqType === '/directory' ? `nav__link--active` : `nav__link`}
							>
								Directory
							</Link>
						</li>
						<li className="nav__item">
							<Link
								to="/tradieTV"
								className={reqType === '/tradieTV' ? `nav__link--active` : `nav__link`}
							>
								TradieTV
							</Link>
						</li>
						<li className="nav__item">
							<Link
								to="/articles"
								className={reqType === '/articles' ? `nav__link--active` : `nav__link`}
							>
								Articles
							</Link>
						</li>
					</ul>
				</div>

				<ul className="drop-down">
					<button onClick={() => setIsDropDown(!isDropDown)} className="btn-primary">
						My Account
					</button>

					{isDropDown && (
						<ul>
							<li className="nav__item">
								<Link to="/my-profile" className="nav__link">
									My Profile
								</Link>
							</li>
							<li className="nav__item">
								<Link to="/my-membership" className="nav__link">
									My Membership
								</Link>
							</li>
							<li className="nav__item">
								<Link to="/my-leads" className="nav__link">
									My Leads
								</Link>
							</li>
						</ul>
					)}
				</ul>

				<div role="button" className="nav__btn-menu">
					<img src={spriteIconMenu} alt="header_img" title="header_img" />
				</div>
			</nav>
		</header>
	);
};

export default Index;
