import HeroSection from "./HeroSection";
import Navbar from "./Navbar";
import "../../Styles/components/top-section.css";
import Image from "next/image";

const TopSection = () => {
    return (
        <div className="top-section">
            <Image
                width={200}
                height={200}
                src="/Images/bg.jpg"
                alt="Background"
                className="bg"
                layout="responsive"
            />
            <Navbar />
            <HeroSection />
        </div>
    );
};

export default TopSection;
