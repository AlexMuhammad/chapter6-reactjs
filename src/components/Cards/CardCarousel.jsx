// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { FreeMode, Navigation } from "swiper";

const CardCarousel = () => {
    return (
        <>
            <Swiper
                slidesPerView={2}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Navigation]}
                className="mySwiper"
                navigation={true}
            >
                <SwiperSlide>
                    <div className="h-[270px] max-w-full bg-bnr-gray rounded-md">
                        <div className="flex w-full h-full">
                            <div className="flex items-center px-6">
                                <img src="/profile.svg" alt="" className="w-20 h-20" />
                                <div className="flex flex-col ml-6 space-y-4">
                                    <div className="flex">
                                        <img src="/star.svg" alt="" className="w-4 h-4" />
                                        <img src="/star.svg" alt="" className="w-4 h-4" />
                                        <img src="/star.svg" alt="" className="w-4 h-4" />
                                        <img src="/star.svg" alt="" className="w-4 h-4" />
                                        <img src="/star.svg" alt="" className="w-4 h-4" />
                                    </div>
                                    <div className="flex flex-col items-start">
                                        <p className="text-justify text-bnr-sm">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</p>
                                        <span className="text-bnr-sm">John Dee 32, Bromo</span>
                                    </div>
                                </div>
                            </div>
                            {/* <div>
                                <div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="h-[270px] max-w-full bg-bnr-gray rounded-md">
                        <div className="flex w-full h-full">
                            <div className="flex items-center px-6">
                                <img src="/profile.svg" alt="" className="w-20 h-20" />
                                <div className="flex flex-col ml-6 space-y-4">
                                    <div className="flex">
                                        <img src="/star.svg" alt="" className="w-4 h-4" />
                                        <img src="/star.svg" alt="" className="w-4 h-4" />
                                        <img src="/star.svg" alt="" className="w-4 h-4" />
                                        <img src="/star.svg" alt="" className="w-4 h-4" />
                                        <img src="/star.svg" alt="" className="w-4 h-4" />
                                    </div>
                                    <div className="flex flex-col items-start">
                                        <p className="text-justify text-bnr-sm">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</p>
                                        <span className="text-bnr-sm">John Dee 32, Bromo</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="h-[270px] max-w-full bg-bnr-gray rounded-md">
                        <div className="flex w-full h-full">
                            <div className="flex items-center px-6">
                                <img src="/profile.svg" alt="" className="w-20 h-20" />
                                <div className="flex flex-col ml-6 space-y-4">
                                    <div className="flex">
                                        <img src="/star.svg" alt="" className="w-4 h-4" />
                                        <img src="/star.svg" alt="" className="w-4 h-4" />
                                        <img src="/star.svg" alt="" className="w-4 h-4" />
                                        <img src="/star.svg" alt="" className="w-4 h-4" />
                                        <img src="/star.svg" alt="" className="w-4 h-4" />
                                    </div>
                                    <div className="flex flex-col items-start">
                                        <p className="text-justify text-bnr-sm">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</p>
                                        <span className="text-bnr-sm">John Dee 32, Bromo</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="h-[270px] max-w-full bg-bnr-gray rounded-md">
                        <div className="flex w-full h-full">
                            <div className="flex items-center px-6">
                                <img src="/profile.svg" alt="" className="w-20 h-20" />
                                <div className="flex flex-col ml-6 space-y-4">
                                    <div className="flex">
                                        <img src="/star.svg" alt="" className="w-4 h-4" />
                                        <img src="/star.svg" alt="" className="w-4 h-4" />
                                        <img src="/star.svg" alt="" className="w-4 h-4" />
                                        <img src="/star.svg" alt="" className="w-4 h-4" />
                                        <img src="/star.svg" alt="" className="w-4 h-4" />
                                    </div>
                                    <div className="flex flex-col items-start">
                                        <p className="text-justify text-bnr-sm">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</p>
                                        <span className="text-bnr-sm">John Dee 32, Bromo</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="h-[270px] max-w-full bg-bnr-gray rounded-md">
                        <div className="flex w-full h-full">
                            <div className="flex items-center px-6">
                                <img src="/profile.svg" alt="" className="w-20 h-20" />
                                <div className="flex flex-col ml-6 space-y-4">
                                    <div className="flex">
                                        <img src="/star.svg" alt="" className="w-4 h-4" />
                                        <img src="/star.svg" alt="" className="w-4 h-4" />
                                        <img src="/star.svg" alt="" className="w-4 h-4" />
                                        <img src="/star.svg" alt="" className="w-4 h-4" />
                                        <img src="/star.svg" alt="" className="w-4 h-4" />
                                    </div>
                                    <div className="flex flex-col items-start">
                                        <p className="text-justify text-bnr-sm">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</p>
                                        <span className="text-bnr-sm">John Dee 32, Bromo</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default CardCarousel