import CardCarousel from "../Cards/CardCarousel"

const TestimonialSection = () => {
    return (
        <div className="h-full max-w-full py-24">
            <div className="w-full h-full space-y-6">
                <h1 className="text-center text-bnr-md font-bnr700">Testimonial</h1>
                <p className="text-center text-bnr-sm">Berbagai review positif dari para pelanggan kami</p>
                <CardCarousel />
            </div>

        </div>
    )
}

export default TestimonialSection