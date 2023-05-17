import { FiUser, FiSettings, FiCalendar } from "react-icons/fi"
const CardCars = () => {
    return (
        <div className='h-full max-w-full py-7'>
            <div className="container flex w-[90%] h-full mx-auto space-x-6 px-36">
                <div className="flex flex-col w-full border border-bnr-dark-gray">
                    <div className="py-12 mx-auto">
                        <img src="/car-card.png" alt="" />
                    </div>
                    <div className="px-6 space-y-2">
                        <h3 className="text-bnr-sm">Nama/Tipe Mobil</h3>
                        <h2 className="text-base font-bnr700">Rp 430.000 / hari</h2>
                        <p className="text-bnr-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        <div className="flex flex-col space-y-2">
                            <div className="inline-flex items-center space-x-2">
                                <FiUser className="text-[#8A8A8A]" />
                                <span className="font-bnr300 text-bnr-sm">4 Orang</span>
                            </div>
                            <div className="inline-flex items-center space-x-2">
                                <FiSettings className="text-[#8A8A8A]" />
                                <span className="font-bnr300 text-bnr-sm">Manual</span>
                            </div>
                            <div className="inline-flex items-center space-x-2">
                                <FiCalendar className="text-[#8A8A8A]" />
                                <span className="font-bnr300 text-bnr-sm">Tahun 2022</span>
                            </div>
                        </div>
                        <div className="py-4">
                            <button className="w-full h-12 px-3 py-2 text-white rounded-sm bg-bnr-green text-bnr-sm font-bnr700">Pilih</button>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-full border border-bnr-dark-gray">
                    <div className="py-12 mx-auto">
                        <img src="/car-card.png" alt="" />
                    </div>
                    <div className="px-6 space-y-2">
                        <h3 className="text-bnr-sm">Nama/Tipe Mobil</h3>
                        <h2 className="text-base font-bnr700">Rp 430.000 / hari</h2>
                        <p className="text-bnr-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        <div className="flex flex-col space-y-2">
                            <div className="inline-flex items-center space-x-2">
                                <FiUser className="text-[#8A8A8A]" />
                                <span className="font-bnr300 text-bnr-sm">4 Orang</span>
                            </div>
                            <div className="inline-flex items-center space-x-2">
                                <FiSettings className="text-[#8A8A8A]" />
                                <span className="font-bnr300 text-bnr-sm">Manual</span>
                            </div>
                            <div className="inline-flex items-center space-x-2">
                                <FiCalendar className="text-[#8A8A8A]" />
                                <span className="font-bnr300 text-bnr-sm">Tahun 2022</span>
                            </div>
                        </div>
                        <div className="py-4">
                            <button className="w-full h-12 px-3 py-2 text-white rounded-sm bg-bnr-green text-bnr-sm font-bnr700">Pilih</button>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-full border border-bnr-dark-gray">
                    <div className="py-12 mx-auto">
                        <img src="/car-card.png" alt="" />
                    </div>
                    <div className="px-6 space-y-2">
                        <h3 className="text-bnr-sm">Nama/Tipe Mobil</h3>
                        <h2 className="text-base font-bnr700">Rp 430.000 / hari</h2>
                        <p className="text-bnr-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        <div className="flex flex-col space-y-2">
                            <div className="inline-flex items-center space-x-2">
                                <FiUser className="text-[#8A8A8A]" />
                                <span className="font-bnr300 text-bnr-sm">4 Orang</span>
                            </div>
                            <div className="inline-flex items-center space-x-2">
                                <FiSettings className="text-[#8A8A8A]" />
                                <span className="font-bnr300 text-bnr-sm">Manual</span>
                            </div>
                            <div className="inline-flex items-center space-x-2">
                                <FiCalendar className="text-[#8A8A8A]" />
                                <span className="font-bnr300 text-bnr-sm">Tahun 2022</span>
                            </div>
                        </div>
                        <div className="py-4">
                            <button className="w-full h-12 px-3 py-2 text-white rounded-sm bg-bnr-green text-bnr-sm font-bnr700">Pilih</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardCars