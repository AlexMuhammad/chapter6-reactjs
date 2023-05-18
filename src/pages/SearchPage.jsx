/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { carSelectors, getCars } from "../redux/features/car/carSlice"
import CardCars from "../components/Cards/CardCars"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import FormFilterSection from "../components/Section/FormFilterSection"
import HeroSection from "../components/Section/HeroSection"

/* eslint-disable react/jsx-key */
const SearchPage = () => {
    // const array = []
    // for (const property in data) {
    //     const tes = data[property];
    //     array.push(tes)
    // }
    // console.log(array);
    const dispatch = useDispatch();
    const cars = useSelector(carSelectors.selectAll);
    console.log("=======>cars", cars);

    useEffect(() => {
        dispatch(getCars())
    }, [dispatch])
    return (
        <div>
            {/* {array.map((item, index) => (
                <div key={index}>{item.description}</div>
            ))} */}
            <Navbar />
            <HeroSection />
            <FormFilterSection />
            <CardCars data={cars} />
            <Footer />
        </div>
    )
}

export default SearchPage