import { Link, useLocation } from "react-router-dom"

const HeroSection = () => {
    const { pathname } = useLocation()
    return (
        <div className="relative h-[calc(100vh-300px)] max-w-full bg-bnr-gray mt-20">
            <div className="container flex items-center w-full h-full mx-auto px-36">
                <div className="w-1/2 space-y-5">
                    <h1 className="text-bnr-xl font-bnr700">Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
                    <p className="w-[70%] text-bnr-sm text-justify">Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                    {pathname !== "/" ? null :
                        <Link to="/sewa">
                            <button className="px-3 py-2 text-white bg-bnr-green text-bnr-sm font-bnr700 mt-5">
                                Mulai Sewa Mobil
                            </button>
                        </Link>
                    }
                </div>
                <div className="absolute bottom-0 right-0">
                    <img src="car-binar.png" alt="car-binar" className="w-[700px] h-[400px]" />
                </div>
            </div>
        </div>
    )
}

export default HeroSection