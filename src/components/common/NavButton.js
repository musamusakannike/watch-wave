import  { faNavIcon } from '@fortawesome/free-solid-svg-icons'
function showNav() {
	var nav = document.getElementById('side-nav')
	nav.classList.toggle("shown")
}

const NavButton = () => {
	return (
		<button id="nav-button" className="fw-bolder btn btn-primary" onClick={showNav}>
			<FontAwesomeIcon icon={faNavIcon} />
		</button>
	)
}

export default NavButton
