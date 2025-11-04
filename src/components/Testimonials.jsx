import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import people1 from "../assets/people-1.jpg";
import people2 from "../assets/people-2.jpg";
import people3 from "../assets/people-3.jpg";
import people4 from "../assets/people-4.jpg";
import people5 from "../assets/people-5.jpg";
import people6 from "../assets/people-6.jpg";
// Import Swiper styles
import "swiper/css";
import { BsChevronLeft, BsChevronRight, BsStarFill } from "react-icons/bs";

const testimonials = [
  {
    id: 1,
    name: "Mohamed Sami",
    image: people1,
    text: "Exceptional web development! Delivered a seamless, responsive site with clean code and great UX.",
  },
  {
    id: 2,
    name: "Ahmed Hassan",
    image: people2,
    text: "Impressive work! Fast loading times, intuitive design, and flawless backend integration. Highly recommend.",
  },
  {
    id: 3,
    name: "Ali Mohamed",
    image: people3,
    text: "Outstanding developer! Built a robust site with perfect functionality. Efficient and detail-oriented.",
  },
  {
    id: 4,
    name: "Ashraf Khaled",
    image: people4,
    text: "Creative and skilled! Produced a modern, user-friendly site that exceeded expectations. Great communication.",
  },
  {
    id: 5,
    name: "yousef Adel",
    image: people5,
    text: "Professional work! Delivered on time, with a polished design and smooth user experience. Top-notch developer.",
  },
  {
    id: 6,
    name: "Sara Magdy",
    image: people6,
    text: "Excellent project execution! High-quality code, responsive design, and exceptional problem-solving skills.",
  },
];

const TestimonialsSection = () => {
  return (
    <section
      id="testimonials"
      className="py-16 px-4 max-w-7xl mx-auto container  md:px-8 xl:max-w-6xl pt-20"
    >
      <div className="text-center mb-4">
        <h2 className="bg-gradient-to-r from-[#fafafa] to-[#a1a1aa] bg-clip-text text-transparent text-4xl md:text-5xl font-semibold leading-tight mb-4">
          What our happy client say
        </h2>
        <p className="text-zinc-300">
          Things that make it the best place to start trading
        </p>
      </div>

      {/* testimonials cards */}
      <div className="relative">
        {/* swiper cards */}
        <Swiper
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          modules={[Navigation, Autoplay]}
          className="testimonials-swiper !py-[20px_0] md:mb-12 "
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className="!h-auto md:py-12  py-4">
              <div className="bg-zinc-800/50 text-center p-4 h-full flex flex-col rounded-lg shadow-lg">
                <div className="size-24 mx-auto mb-4">
                  <img
                    src={testimonial.image}
                    alt="testimonial image"
                    className="w-20 h-20  object-cover rounded-full"
                  />
                </div>
                {/* testimonial stars */}
                <div className="flex justify-center gap-1 mb-2">
                  {[...Array(5)].map((_, index) => (
                    <BsStarFill key={index} className="text-yellow-400" />
                  ))}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">
                    {testimonial.name}
                  </h3>
                  <p className="text-zinc-400">{testimonial.text}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* navigation buttons */}
        <div className="flex justify-center gap-4 md:mt-8 mt-4">
          <button className="swiper-button-prev w-12 h-12 cursor-pointer rounded-full border border-gray-200 flex items-center justify-center hover:bg-zinc-600/50 hover:text-white transition-all duration-200">
            <BsChevronLeft className="size-6" />
          </button>
          <button className="swiper-button-next w-12 h-12 cursor-pointer rounded-full border border-gray-200 flex items-center justify-center hover:bg-zinc-600/50 hover:text-white transition-all duration-200">
            <BsChevronRight className="size-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
