
import img1 from "../images/Capture_logo.PNG"
import img2 from "../images/Capture_hole.PNG"

const HeaderForm = () => {
    return(
        <header className="header-log">
            <div className="left-logo">
                <img src={img2} alt="" />
            </div>
            <div className="right-logo">
                <img src={img1} alt="" />
                <h2>SERVICE PROPOSAL 
</h2>
            </div>
        </header>
    )
}

export default HeaderForm