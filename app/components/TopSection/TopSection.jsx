import HeroSection from "./HeroSection";
import Navbar from "./Navbar";

const TopSection = () => {

    return (
        <div className="top-section">
            <img src="Images/bg.jpg" alt="Background" className="bg" />
            <Navbar />
            <HeroSection />
        </div>
    )
}

export default TopSection;