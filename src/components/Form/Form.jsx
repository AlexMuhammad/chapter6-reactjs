/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
// import { useState } from "react"
import Button from "../Button/Button"
import CardCars from "../Cards/CardCars"
// import {
//     Select,
//     SelectContent,
//     SelectItem,
//     SelectTrigger,
//     SelectValue,
//     SelectGroup,
//     // SelectLabel
// } from "@teovilla/shadcn-ui-react-select"
// import { Select, Option } from "@material-tailwind/react";
const FormFilterInput = ({ valueDateInput, valuePickUpInput, valueCustomerInput, setDateInput, setPickUpInput, setCustomerInput, onFilterHandler, search, filterCar, data }) => {
    return (
        <div className='h-full max-w-full'>
            <div className='container w-[90%] h-full mx-auto px-36'>
                <form>
                    <div className='flex items-center px-5 py-6 space-x-4 bg-white rounded-md -mt-14 drop-shadow-md'>
                        <div className="w-full space-y-2">
                            <label htmlFor="dateInput" className="text-[12px]">Tipe Driver</label>
                            <select className="rounded-sm text-[12px] px-3 py-2 border border-bnr-dark-gray h-9 w-full outline-4-bnr-green">
                                <option value="" defaultValue>Pilih Driver</option>
                                <option value="Dengan Sopir">Dengan Sopir</option>
                                <option value="Tanpa Sopir">Tanpa Sopir (Lepas Kunci)</option>
                            </select>
                        </div>
                        <div className="w-full space-y-2">
                            <label htmlFor="dateInput" className="text-[12px]">Tanggal</label>
                            <input
                                type="date"
                                placeholder='Pilih Tanggal'
                                value={valueDateInput}
                                onChange={(e) => setDateInput(e.target.value)}
                                className="rounded-sm text-[12px] px-3 py-2 border border-bnr-dark-gray w-full outline-bnr-green" />
                        </div>
                        <div className="w-full space-y-2">
                            <label htmlFor="pickUpInput" className="text-[12px]">Waktu Jemput/Ambil</label>
                            <select
                                aria-label="Default select example"
                                name="pickUpInput"
                                id="pickUpInput"
                                onChange={(e) => setPickUpInput(e.target.value)}
                                value={valuePickUpInput}
                                className="rounded-sm text-[12px] px-3 py-2 border border-bnr-dark-gray h-9 w-full outline-bnr-green focus:border-bnr-green"
                            >
                                <option className="select-placeholder">Pilih Waktu</option>
                                <option value="08:00">
                                    08.00 WIB
                                </option>
                                <option value="09:00">
                                    09.00 WIB
                                </option>
                                <option value="10:00">
                                    10.00 WIB
                                </option>
                                <option value="11:00">
                                    11.00 WIB
                                </option>
                                <option value="12:00">
                                    12.00 WIB
                                </option>
                            </select>
                        </div>
                        <div className="w-full space-y-2">
                            <label htmlFor="customerInput" className="text-[12px]">Jumlah Penumpang (optional)</label>
                            <input
                                type="text"
                                placeholder='Jumlah Penumpang'
                                onChange={(e) => setCustomerInput(e.target.value)}
                                value={valueCustomerInput}
                                className="rounded-sm text-[12px] px-3 py-2 border border-bnr-dark-gray w-full outline-bnr-green" />
                        </div>
                        <div>
                            <button
                                type="submit"
                                onClick={onFilterHandler}
                                className="px-3 py-2 text-white bg-bnr-green text-bnr-sm font-bnr700">Cari Mobil</button>
                        </div>
                    </div>
                </form>
            </div >
            <CardCars data={data} search={search} filterCar={filterCar} />
        </div >
    )
}

export default FormFilterInput