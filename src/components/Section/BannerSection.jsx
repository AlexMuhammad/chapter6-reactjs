const BannerSection = () => {
    return (
        <div className="max-w-full h-80">
            <div className="container flex items-center justify-center w-[81%] h-full mx-auto px-36 bg-bnr-blue rounded-xl">
                <div className="text-center w-[70%]">
                    <h1 className="mb-4 text-white text-bnr-xl font-bnr700">Sewa Mobil di (Lokasimu) Sekarang</h1>
                    <p className="mb-12 text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    <button className="px-3 py-2 text-white bg-bnr-green text-bnr-sm font-bnr700">
                        Mulai Sewa Mobil
                    </button>
                </div>
            </div>
        </div>
    )
}

export default BannerSection