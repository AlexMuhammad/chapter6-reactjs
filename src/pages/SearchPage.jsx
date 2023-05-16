/* eslint-disable react/prop-types */

import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import HeroSection from "../components/Section/HeroSection"

/* eslint-disable react/jsx-key */
const SearchPage = () => {
    // const array = []
    // for (const property in data) {
    //     const tes = data[property];
    //     array.push(tes)
    // }
    // console.log(array);
    return (
        <div>
            {/* {array.map((item, index) => (
                <div key={index}>{item.description}</div>
            ))} */}
            <Navbar />
            <HeroSection />
            <Footer />
        </div>
    )
}

export default SearchPage