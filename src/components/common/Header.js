import Banner1 from '../../assets/images/banner1.png'
import Banner2 from '../../assets/images/banner2.png'

const Header = () => {
	return (
		<div className="card" id="hero-big">
			<div className="image-container">
				<img src={Banner1} alt="Trending movies banner image" className="dark-image" />
				<div className="text-overlay text-light text-end">
					<h1 className="display-big fw-bolder my-0 py-0 tada text-primary">WatchWave</h1>
					<p className="display-6 tada">Your number one movies zone!</p>
				</div>
			</div>
		</div>
	)
}
export default Header