/* eslint-disable react/no-unescaped-entities */
import SectionTitle from "../Shared/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaQuoteLeft } from "react-icons/fa";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay"
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { testimonials } from "../../utils/tastimonials";

const Testimonials = () => {
    return (
        <div className="section-container">
            <SectionTitle
                title={"Testimonials"}
                description={"What our client say (Review)"}
            />
            <div>
                <Swiper
                    slidesPerView={2}
                    spaceBetween={50}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true

                    }}
                    // pagination={{
                    //     clickable: true,
                    // }}
                    modules={[Pagination, Autoplay, Navigation]}
                    className="mySwiper"
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 50,
                        },
                    }}
                >
                    {testimonials.map(({ id, name, position, image, testimonial }) => (
                        <SwiperSlide key={id}>
                            <div className=" p-8 rounded-xl shadow-xl h-[380px] flex flex-col justify-between transform transition-transform hover:-translate-y-2">
                                <div className="mb-6">
                                    <FaQuoteLeft className="text-orange-500 mb-4" size={36} />
                                    <p className="text-gray-700 font-light italic leading-relaxed text-lg">
                                        "{testimonial}"
                                    </p>
                                </div>
                                <div className="flex items-center">
                                    <img src={image} className="w-16 h-16 rounded-full object-cover mr-4 shadow-lg border-2 border-indigo-100" alt={name} />
                                    <div>
                                        <p className="text-xl font-bold text-gray-800">{name}</p>
                                        <p className="text-sm text-indigo-600">{position}</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}

                </Swiper>
            </div>
        </div>
    );
};

export default Testimonials;