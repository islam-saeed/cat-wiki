import image1 from "../images/image 1.png"
import image2 from "../images/image 2.png"
import image3 from "../images/image 3.png"

const Benefits = () => {
    return(
        <div className="benefits">
            <div className="blog-text">
                <h1>Why should you have a cat?</h1>
                <p>Having a cat around you can trigger the release of calming chemicals in your body which lower your stress and anxiety levels</p>
                <h3>READ MORE</h3>
            </div>
            <div>
                <img src={image1} alt="cat" />
                <img src={image2} alt="cat" />
                <img src={image3} alt="cat" />
            </div>
        </div>
    )
}

export default Benefits