import { Link } from 'react-router-dom';
import LogoImage from "../../assets/images/watchwave.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFistRaised, faMap, faFilm, faLaugh, faMask, faGhost, faUsers, faHatWizard, faTheaterMasks, faBook, faHeart, faLandmark, faGear, faMusic, faFaceSadTear } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
	return (
		<nav id="side-nav" className="card shadow">
			<div className="logo-section border">
				<img src={LogoImage} alt="WatchWave logo image" />
			</div>
			<ul className="list-group list-unstyled" id="nav-list">
				<li className="list-group-item lead fw-normal">
					<Link to="/category/action" className="text-dark">
						<FontAwesomeIcon icon={faFistRaised} />
						<span> Action</span>
					</Link>
				</li>

				<li className="list-group-item lead fw-normal">
					<Link to="/category/adventure" className="text-dark">
						<FontAwesomeIcon icon={faMap} />
						<span> Adventure</span>
					</Link>
				</li>

				<li className="list-group-item lead fw-normal">
					<Link to="/category/animation" className="text-dark">
						<FontAwesomeIcon icon={faFilm} />
						<span> Animation</span>
					</Link>
				</li>

				<li className="list-group-item lead fw-normal">
					<Link to="/category/comedy" className="text-dark">
						<FontAwesomeIcon icon={faLaugh} />
						<span> Comedy</span>
					</Link>
				</li>

				<li className="list-group-item lead fw-normal">
					<Link to="/category/crime" className="text-dark">
						<FontAwesomeIcon icon={faMask} />
						<span> Crime</span>
					</Link>
				</li>

				<li className="list-group-item lead fw-normal">
					<Link to="/category/horror" className="text-dark">
						<FontAwesomeIcon icon={faGhost} />
						<span> Horror</span>
					</Link>
				</li>

				<li className="list-group-item lead fw-normal">
					<Link to="/category/family" className="text-dark">
						<FontAwesomeIcon icon={faUsers} />
						<span> Family</span>
					</Link>
				</li>

				<li className="list-group-item lead fw-normal">
					<Link to="/category/fantasy" className="text-dark">
						<FontAwesomeIcon icon={faHatWizard} />
						<span> Fantasy</span>
					</Link>
				</li>

				<li className="list-group-item lead fw-normal">
					<Link to="/category/drama" className="text-dark">
						<FontAwesomeIcon icon={faTheaterMasks} />
						<span> Drama</span>
					</Link>
				</li>

				<li className="list-group-item lead fw-normal">
					<Link to="/category/documentary" className="text-dark">
						<FontAwesomeIcon icon={faBook} />
						<span> Documentary</span>
					</Link>
				</li>

				<li className="list-group-item lead fw-normal">
					<Link to="/category/romance" className="text-dark">
						<FontAwesomeIcon icon={faHeart} />
						<span> Romance</span>
					</Link>
				</li>

				<li className="list-group-item lead fw-normal">
					<Link to="/category/history" className="text-dark">
						<FontAwesomeIcon icon={faLandmark} />
						<span> History</span>
					</Link>
				</li>

				<li className="list-group-item lead fw-normal">
					<Link to="/category/tragedy" className="text-dark">
						<FontAwesomeIcon icon={faFaceSadTear} />
						<span> Tragedy</span>
					</Link>
				</li>

				<li className="list-group-item lead fw-normal">
					<Link to="/category/music" className="text-dark">
						<FontAwesomeIcon icon={faMusic} />
						<span> Music</span>
					</Link>
				</li>
			</ul>
		</nav>
	)
}

export default Navbar;
