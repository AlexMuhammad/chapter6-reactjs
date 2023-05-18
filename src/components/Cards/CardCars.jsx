/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { FiUser, FiSettings, FiCalendar } from "react-icons/fi"
const CardCars = ({ data }) => {
    console.log(data.length);
    return (
        <div className='h-full max-w-full py-6 space-x-3'>
            <div className="container grid w-full h-full grid-cols-3 gap-6 mx-auto px-36">
                {
                    data.map((item, index) => (
                        <div key={index} className="flex flex-col w-full border border-bnr-dark-gray">
                            <div className="w-full pb-6 mx-auto">
                                <img src={item.image} alt="" className="w-full max-h-[240px] object-cover" />
                            </div>
                            <div className="px-6 space-y-2">
                                <div>
                                    <h3 className="text-bnr-sm">{item.manufacture}</h3>
                                    <h2 className="text-base font-bnr700">Rp {item.rentPerDay} / hari</h2>
                                    <p className="text-bnr-sm">{item.description}</p>
                                    <div className="flex flex-col space-y-2">
                                        <div className="inline-flex items-center space-x-2">
                                            <FiUser className="text-[#8A8A8A]" />
                                            <span className="font-bnr300 text-bnr-sm">{item.capacity} Orang</span>
                                        </div>
                                        <div className="inline-flex items-center space-x-2">
                                            <FiSettings className="text-[#8A8A8A]" />
                                            <span className="font-bnr300 text-bnr-sm">{item.transmission}</span>
                                        </div>
                                        <div className="inline-flex items-center space-x-2">
                                            <FiCalendar className="text-[#8A8A8A]" />
                                            <span className="font-bnr300 text-bnr-sm">Tahun {item.year}</span>
                                        </div>
                                    </div>

                                </div>
                                <div className="h-24 py-4">
                                    <button className="w-full h-12 px-3 py-2 text-white rounded-sm bg-bnr-green text-bnr-sm font-bnr700">Pilih</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default CardCars