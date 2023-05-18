/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
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
    const [dateInput, setDateInput] = useState(null);
    const [pickUpInput, setPickUpInput] = useState(null);
    const [customerInput, setCustomerInput] = useState(null);
    const [search, setSearch] = useState(false);
    const [filterCar, setFilterCar] = useState([])

    const dispatch = useDispatch();
    const cars = useSelector(carSelectors.selectAll);
    console.log("=======>cars", cars);

    useEffect(() => {
        dispatch(getCars())
    }, [dispatch])

    const rupiah = (number) => {
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
        }).format(number);
    }
    const getRandomInt = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    const populateCars = cars.map((car) => {
        const isPositive = getRandomInt(0, 1) === 1;
        const timeAt = new Date();
        const mutator = getRandomInt(1000000, 100000000);
        const availableAt = new Date(
            timeAt.getTime() + (isPositive ? mutator : -1 * mutator)
        );

        return {
            ...car,
            availableAt,
        };
    });

    // console.log("populate", populateCars);

    const newDateTimeFormat = new Date(`${dateInput} ${pickUpInput}`);
    const getEpochTime = newDateTimeFormat.getTime();

    const carFilter = populateCars.filter((car) => car.capacity >= customerInput && car.availableAt >= getEpochTime)
    console.log(carFilter);

    const onFilterHandler = (ev) => {
        ev.preventDefault();

        setFilterCar(carFilter);
        setSearch(true)
    }
    return (
        <div>
            {/* {array.map((item, index) => (
                <div key={index}>{item.description}</div>
            ))} */}
            <Navbar />
            <HeroSection />
            <FormFilterSection
                valueDateInput={dateInput}
                valuePickUpInput={pickUpInput}
                valueCustomerInput={customerInput}
                setDateInput={setDateInput}
                setPickUpInput={setPickUpInput}
                setCustomerInput={setCustomerInput}
                onFilterHandler={onFilterHandler}
                data={cars}
                search={search}
                filterCar={filterCar}
            />
            <Footer />
        </div>
    )
}

export default SearchPage