import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
	return (
		<footer>
			<div className="container footer__container">
				<article>
					<Link to="/" className="logo">
						<img src={Logo} alt="Footer Logo" />
					</Link>
					<p>
					Exercising relieves tension, irritability, and anxiety through endorphins released by the brain. The endorphins make the body feel good and help it relax, and suppress tension and daily stressors. In other words, it's not just good for your physical body, exercising regularly also promotes sound mental health.	</p>
					<div className="footer__socials">
						<a
							href="https://www.linkedin.com/"
							target="_blank"
							rel="noreferrer noopener"
						>
							<FaLinkedin />
						</a>
						<a
							href="https://facebook.com/"
							target="_blank"
							rel="noreferrer noopener"
						>
							<FaFacebookF />
						</a>
						<a
							href="https://twitter.com/"
							target="_blank"
							rel="noreferrer noopener"
						>
							<AiOutlineTwitter />
						</a>
						<a
							href="https://www.instagram.com/aacademy22/"
							target="_blank"
							rel="noreferrer noopener"
						>
							<AiFillInstagram />
						</a>
					</div>
				</article>
				<article>
					<h4>Permalinks</h4>
					<Link to="/about">About</Link>
					<Link to="/plans">Plans</Link>
					<Link to="/trainers">Trainers</Link>
					<Link to="/gallery">Gallery</Link>
					
				</article>
				
				<article>
					<h4>Get In Touch</h4>
					<Link to="/contact">Contact Us</Link>
					
				</article>
			</div>
			<div className="footer__copyright">
				<small> &copy; Gauravzack </small>
			</div>
		</footer>
	);
};

export default Footer;
