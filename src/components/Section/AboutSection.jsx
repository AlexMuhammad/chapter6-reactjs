import { BiCheck } from "react-icons/bi"

const AboutSection = () => {
    return (
        <div className="h-full max-w-full py-28">
            <div className="container w-full h-full mx-auto px-36">
                <div className="flex items-center justify-around">
                    <div>
                        <img src="/happy-girl.png" alt="happy-girl" className="w-[450px] h-[420px]" />
                    </div>
                    <div className="w-[40%] space-y-6">
                        <h3 className="text-bnr-md font-bnr700">Best Car Rental for any kind of trip in (Lokasimu)!</h3>
                        <p className="text-justify text-bnr-sm">Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.</p>
                        <ul className="space-y-5">
                            <li className="inline-flex items-center space-x-3 text-bnr-sm">
                                <BiCheck className="w-6 h-6 p-1 mr-3 rounded-full bg-bnr-dark-gray text-bnr-blue" />
                                Sewa Mobil Dengan Supir di Bali 12 Jam
                            </li>
                            <li className="inline-flex items-center text-bnr-sm">
                                <BiCheck className="w-6 h-6 p-1 mr-3 rounded-full bg-bnr-dark-gray text-bnr-blue" />
                                Sewa Mobil Lepas Kunci di Bali 24 Jam
                            </li>
                            <li className="inline-flex items-center text-bnr-sm">
                                <BiCheck className="w-6 h-6 p-1 mr-3 rounded-full bg-bnr-dark-gray text-bnr-blue" />
                                Sewa Mobil Jangka Panjang Bulanan
                            </li>
                            <li className="inline-flex items-center text-bnr-sm">
                                <BiCheck className="w-6 h-6 p-1 mr-3 rounded-full bg-bnr-dark-gray text-bnr-blue" />
                                Gratis Antar - Jemput Mobil di Bandara
                            </li>
                            <li className="inline-flex items-center text-bnr-sm">
                                <BiCheck className="w-6 h-6 p-1 mr-3 rounded-full bg-bnr-dark-gray text-bnr-blue" />
                                Layanan Airport Transfer / Drop In Out
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutSection