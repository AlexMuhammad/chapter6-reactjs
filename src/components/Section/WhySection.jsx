import { getDataWhyCard } from "../../constant/data"
import CardWhy from "../Cards/CardWhy"

const WhySection = () => {
    return (
        <div className="h-full max-w-full">
            <div className="container flex flex-col w-full h-full mx-auto px-36">
                <div className="space-y-3">
                    <h1 className="font-bnr700 text-bnr-md">Why Us?</h1>
                    <p className="text-bnr-sm">Mengapa harus pilih Binar Car Rental?</p>
                </div>
                <div className="flex my-8">
                    {
                        getDataWhyCard.map((card, index) => (
                            <CardWhy key={index} title={card.title} image={card.image} description={card.description} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default WhySection