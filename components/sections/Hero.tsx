"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Mousewheel } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css";
import "swiper/css/effect-fade";
import { GoogleReviewBadge, PhoneBadge, InstagramBadge, AddressBadge } from "../ui/HeroBadges";

const slides = [
  {
    id: 1,
    headline: ["Innovative", "Architect", "Designs, Shaping the", "Future of Spaces"],
    highlight: "Architect",
    image: "/img/hero/hero_slide_1.png",
    badge: <GoogleReviewBadge />
  },
  {
    id: 2,
    headline: ["Visionary Architect Crafting", "Architect", "Tomorrow's Spaces"],
    highlight: "Architect",
    image: "/img/hero/hero_slide_2.png",
    badge: <PhoneBadge number="+1 (555) 123-4567" />
  },
  {
    id: 3,
    headline: ["Where", "Creativity", "Meets Future-Ready Architecture"],
    highlight: "Creativity",
    image: "/img/hero/hero_slide_3.png",
    badge: <InstagramBadge handle="@buildcon.arch" />
  },
  {
    id: 4,
    headline: ["This", " webpage is", "created by", "K K Singh", "know more", "@kksingh.dev"],
    highlight: "K K Singh",
    image: "/img/hero/my profile.png",
    badge: <AddressBadge address="123 Architect Blvd, Miami FL" />
  },
];

const slideInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: (delay: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 1, delay, ease: [0.22, 1, 0.36, 1] as const },
  }),
  exit: { opacity: 0, x: -40, transition: { duration: 0.4 } },
};

const slideInRight = {
  hidden: { opacity: 0, x: 80, scale: 1.04 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] as const },
  },
  exit: { opacity: 0, x: 40, transition: { duration: 0.4 } },
};

export function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [key, setKey] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);

  const handleSlideChange = (swiper: SwiperType) => {
    setActiveIndex(swiper.realIndex);
    setKey((k) => k + 1);
  };

  return (
    <section className='relative w-full min-h-screen overflow-hidden'>
      <div className='container-main h-full min-h-dvh'>
        <div className='relative w-full h-full min-h-screen'>
          {/* Slide counter — top left */}
          <div className='absolute top-24 mb-10 sm:top-28 lg:top-36 left-0 z-20 flex items-center gap-3'>
            <span className='text-sm font-body text-text font-medium tracking-wider'>0{activeIndex + 1}</span>
            <span className='w-8 h-px bg-main' />
            <span className='text-sm font-body text-main font-medium tracking-wider'>0{slides.length}</span>
          </div>

          {/* Scroll Down — far right vertical */}
          <div className='hero-scroll-indicator absolute -right-15 top-1/2 -translate-y-1/2 z-20 hidden lg:flex flex-col items-center gap-3 pointer-events-auto'>
            <div className='flex flex-col gap-2'>
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => swiperRef.current?.slideToLoop(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === activeIndex ? "bg-main scale-125" : "bg-gray"
                  }`}
                />
              ))}
            </div>
            <div
              className='text-[10px] font-body text-body tracking-[0.25em] mt-4'
              style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}>
              Scroll Down
            </div>
            <div className='w-px h-12 bg-main' />
          </div>

          {/* Main Swiper */}
          <Swiper
            modules={[Autoplay, EffectFade, Mousewheel]}
            effect='fade'
            fadeEffect={{ crossFade: true }}
            autoplay={{ delay: 10000, disableOnInteraction: false }}
            mousewheel={{ eventsTarget: ".hero-scroll-indicator" }}
            loop
            speed={800}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={handleSlideChange}
            className='w-full min-h-screen'>
            {slides.map((slide, index) => (
              <SwiperSlide key={slide.id}>
                <div className='relative w-full h-full min-h-dvh flex flex-col justify-center'>

                  {/* Left content */}
                  <div className='relative z-10 w-full lg:w-[55%] flex items-center justify-center pt-20 lg:pt-0'>
                    <AnimatePresence mode='wait'>
                      {activeIndex === index && (
                        <motion.div key={`content-${key}`} className="w-full">
                          {/* Headline */}
                          <motion.h1
                            className='title-display font-title font-semibold leading-[1.05] text-text mb-6 lg:mb-8'
                            custom={0.2}
                            variants={slideInLeft}
                            initial='hidden'
                            animate='visible'
                            exit='exit'>
                            {slide.headline.map((part, i) =>
                              part === slide.highlight ? (
                                <span key={i} className='text-main'>
                                  {part}{" "}
                                </span>
                              ) : (
                                <span key={i}>{part} </span>
                              ),
                            )}
                          </motion.h1>

                          {/* Buttons */}
                          <motion.div
                            className='flex items-center gap-4 mb-12 flex-wrap'
                            custom={0.35}
                            variants={slideInLeft}
                            initial='hidden'
                            animate='visible'
                            exit='exit'>
                            <a
                              href='#about'
                              className='group relative overflow-hidden font-body text-sm font-medium px-7 py-3.5 rounded-full bg-main text-white transition-transform duration-300 hover:scale-105 shadow-lg shadow-orange-200'>
                              {/* Dark sweep drawing effect */}
                              <span className="absolute inset-0 -translate-x-full bg-black/15 transition-transform duration-500 ease-out group-hover:translate-x-0" />
                              <span className="relative z-10">Know More Us</span>
                            </a>
                            <a
                              href='#projects'
                              className='group relative overflow-hidden font-body text-sm font-medium px-7 py-3.5 rounded-full border border-text text-text transition-colors duration-300 hover:text-white hover:border-text'>
                              {/* Dark sweep drawing effect */}
                              <span className="absolute inset-0 translate-y-full bg-text transition-transform duration-500 ease-out group-hover:translate-y-0" />
                              <span className="relative z-10">Explore Projects</span>
                            </a>
                          </motion.div>

                          {/* Slide Dynamic Bottom Info Badge */}
                          <motion.div
                            className='flex items-center gap-4'
                            custom={0.5}
                            variants={slideInLeft}
                            initial='hidden'
                            animate='visible'
                            exit='exit'>
                            {slide.badge}
                          </motion.div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Right: full bleed image */}
                  <div className='relative lg:absolute right-0 top-0 w-full lg:w-[52%] h-[40vh] sm:h-[50vh] lg:h-full mt-8 lg:mt-0'>
                    <AnimatePresence mode='wait'>
                      {activeIndex === index && (
                        <motion.div
                          key={`img-${key}`}
                          className='w-full h-full relative'
                          variants={slideInRight}
                          initial='hidden'
                          animate='visible'
                          exit='exit'>
                          <Image
                            src={slide.image}
                            alt={`Slide ${slide.id}`}
                            fill
                            priority={index === 0}
                            sizes='(max-width: 1024px) 100vw, 52vw'
                            className='object-contain object-center'
                          />

                          {/* Play button overlay */}
                          <div className='absolute inset-0 flex items-center justify-center'>
                            <a
                              href='https://www.youtube.com/watch?v=_sI_Ps7JSEk'
                              target='_blank'
                              rel='noopener noreferrer'
                              className='group relative w-20 h-20 rounded-full border-2 border-white/70 flex items-center justify-center backdrop-blur-sm bg-white/10 hover:bg-white/20 transition-all duration-300'>
                              {/* Ripple rings */}
                              <span className='absolute w-full h-full rounded-full border border-white/40 animate-ping' />
                              <span
                                className='absolute w-[130%] h-[130%] rounded-full border border-white/20 animate-ping'
                                style={{ animationDelay: "0.4s" }}
                              />
                              <svg className='w-6 h-6 text-white ml-1' fill='currentColor' viewBox='0 0 24 24'>
                                <path d='M8 5v14l11-7z' />
                              </svg>
                            </a>
                          </div>

                          {/* "Let's Build" card — top right */}
                          <motion.div
                            className='absolute top-4 lg:top-32 right-0 flex items-start gap-3 max-w-[160px] lg:max-w-[200px] z-10'
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.6 }}>
                            <div className='shrink-0 w-20 h-20 rounded-full border-2 border-main flex items-center justify-center bg-white hover:bg-main hover:border-main transition-all duration-300 group cursor-pointer'>
                              <svg
                                className='w-6 h-6 text-text group-hover:text-white transition-colors'
                                fill='none'
                                stroke='currentColor'
                                strokeWidth={2}
                                viewBox='0 0 24 24'>
                                <path d='M7 17L17 7M17 7H7M17 7v10' />
                              </svg>
                            </div>
                            <p className='font-title text-sm font-semibold text-text leading-snug pt-1'>
                              Let&apos;s Build Something Great Together
                            </p>
                          </motion.div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
