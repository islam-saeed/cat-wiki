import logo from '../images/CatwikiLogo.svg'

const Hero = () => {
    return(
        <div className="hero">
            <img src={logo} alt="logo" />
            <p>Get to know your cat breed</p>
            <input type="text" placeholder="Enter your breed" />
        </div>
    )
}

export default Hero