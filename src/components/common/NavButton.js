function showNav() {
	var nav = document.getElementById('side-nav')
	nav.classList.toggle("shown")
}

const NavButton = () => {
	return (
		<button id="nav-button" className="fw-bolder btn btn-primary" onClick={showNav}>=</button>
	)
}

export default NavButton