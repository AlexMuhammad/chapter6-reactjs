import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import AboutSection from "../components/Section/AboutSection"
import BannerSection from "../components/Section/BannerSection"
import FaqSection from "../components/Section/FaqSection"
import HeroSection from "../components/Section/HeroSection"
import TestimonialSection from "../components/Section/TestimonialSection"
import WhySection from "../components/Section/WhySection"


const HomePage = () => {
    return (
        <>
            <Navbar />
            <HeroSection />
            <AboutSection />
            <WhySection />
            <TestimonialSection />
            <BannerSection />
            <FaqSection />
            <Footer />
        </>
    )
}

export default HomePage