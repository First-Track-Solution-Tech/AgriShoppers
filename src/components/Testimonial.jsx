import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const testimonials = [
  {
    id: 1,
    name: "Ramesh Kumar",
    role: "Farmer – UP",
    message: "Very good quality seeds. My crop yield increased a lot.",
    image: "/images/male.jpg",
  },
  {
    id: 2,
    name: "Suresh Patel",
    role: "Farmer – Gujarat",
    message: "Trusted fertilizers and fast delivery. Highly recommended.",
    image: "/images/male.jpg",
  },
  {
    id: 3,
    name: "Amit Singh",
    role: "Agri Dealer – MP",
    message: "Best agriculture products platform with genuine brands.",
    image: "/images/male.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-olive-100 to-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        What Farmers Say
      </h2>

      <div className="max-w-6xl mx-auto px-6">
        <Swiper
          modules={[Autoplay]}
          loop
          grabCursor
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          spaceBetween={30}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="relative bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition duration-300 h-full">

                {/* Quote icon */}
                <span className="absolute top-6 right-6 text-5xl text-green-100">
                  “
                </span>

                {/* Message */}
                <p className="text-gray-600 italic mb-6 leading-relaxed">
                  {item.message}
                </p>

                {/* User */}
                <div className="flex items-center gap-4 mt-auto">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-green-600"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      {item.name}
                    </h4>
                    <p className="text-sm text-gray-500">
                      {item.role}
                    </p>
                  </div>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
