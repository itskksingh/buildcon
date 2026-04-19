import Image from "next/image";

export function About() {
  const stats = [
    {
      title: "PROJECTS",
      value: "259+",
      desc: "Delivering diverse architectural solutions, showcasing our expertise and creativity.",
    },
    {
      title: "CUSTOMERS",
      value: "12M+",
      desc: "Discover the importance of estate planning and how wills and trusts can safeguard.",
    },
    {
      title: "HAPPY CLIENTS",
      value: "100%",
      desc: "Client satisfaction is our top priority, reflected in glowing reviews.",
    },
    {
      title: "AWARDS WON",
      value: "128+",
      desc: "Going above and beyond to exceed expectations in every project.",
    },
  ];

  const services = [
    {
      name: "3D Space Designing",
      icon: (
        <svg className='w-8 h-8 text-text shrink-0' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='1.5'
            d='M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'
          />
        </svg>
      ),
    },
    {
      name: "3D Model Building",
      icon: (
        <svg className='w-8 h-8 text-text shrink-0' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='1.2'
            d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
          />
        </svg>
      ),
    },
    {
      name: "Architectural Drawing",
      icon: (
        <svg className='w-8 h-8 text-text shrink-0' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='1.2'
            d='M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10'
          />
        </svg>
      ),
    },
    {
      name: "Building The Space",
      icon: (
        <svg className='w-8 h-8 text-text shrink-0' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='1.2'
            d='M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z'
          />
        </svg>
      ),
    },
  ];

  return (
    <section id='about' className='relative w-full overflow-hidden section-space'>
      {/* Top Animated Scale Image */}
      <div className='absolute top-0 left-0 w-full h-6 sm:h-10 z-10 pointer-events-none opacity-90 mix-blend-multiply overflow-hidden'>
        <div
          className='flex w-[200%] sm:w-[300%] h-full animate-marquee'
          style={{ animationDirection: "reverse", animationDuration: "70s" }}>
          <div className="w-full h-full bg-[url('/img/about/scale.png')] bg-repeat-x bg-contain bg-left"></div>
          <div className="w-full h-full bg-[url('/img/about/scale.png')] bg-repeat-x bg-contain bg-left"></div>
        </div>
      </div>

      {/* Background sketch image on right side */}
      <div className='absolute top-0 left-0 w-full lg:w-[50%] h-full pointer-events-none z-0'>
        <Image src='/img/about/bg-shape.png' alt='Background Shape' fill className='object-contain object-left opacity-60' />
      </div>

      <div className='container-main relative z-10'>
        {/* 4 Stats Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pt-12 pb-16 relative z-10 bg-white/70 backdrop-blur-sm lg:bg-transparent lg:backdrop-blur-none'>
          {stats.map((stat, i) => (
            <div key={i} className='px-6 lg:px-8 py-6 lg:py-0 border-b lg:border-b-0 border-smoke last:border-b-0'>
              <div className='flex items-center text-[12px] font-title font-bold tracking-widest uppercase mb-4 text-text'>
                <span className='text-main mr-2 text-lg leading-none font-normal'>⌜</span>
                {stat.title}
                <span className='text-main ml-2 text-lg leading-none font-normal mt-[2px]'>⌝</span>
              </div>
              <h3 className='text-[38px] lg:text-[42px] font-title font-bold text-text mb-2 leading-none'>
                {stat.value}
              </h3>
              <p className='body-sm text-body'>{stat.desc}</p>
            </div>
          ))}
        </div>

        {/* Main Content Area */}
        <div className='flex flex-col lg:flex-row mt-10 lg:mt-16 relative z-10'>
          {/* Left Side: 60% Width */}
          <div className='w-full lg:w-[60%] lg:pr-10 xl:pr-16 relative mb-32 lg:mb-0 flex'>
            {/* Image 1 (Left Image) - ~60% width */}
            <div className='relative w-[65%] sm:w-[60%] h-[350px] sm:h-[450px] lg:h-[550px] bg-smoke mt-12 sm:mt-16 z-0'>
              <Image
                src='/img/about/house.png'
                alt='Modern House'
                fill
                className='object-cover'
                sizes='(max-width: 1024px) 70vw, 40vw'
              />
            </div>

            {/* Image 2 (Right Overlapping Image) - ~55% width */}
            <div className='absolute top-0 right-0 lg:right-10 w-[55%] h-[320px] sm:h-[420px] lg:h-[480px] bg-smoke z-10 shadow-xl'>
              <Image
                src='/img/about/interior.png'
                alt='Modern Interior'
                fill
                className='object-cover'
                sizes='(max-width: 1024px) 60vw, 35vw'
              />

              {/* Floating Experience Box */}
              <div className='absolute -bottom-16 sm:-bottom-10 right-0 sm:right-auto sm:-left-12 lg:-left-20 bg-black2 p-6 sm:p-8 py-8 sm:py-10 text-white w-[260px] sm:w-[300px] shadow-2xl z-20'>
                <h4 className='title-display font-title font-bold mb-1 leading-none text-white !text-4xl sm:!text-5xl'>
                  25<span className='text-white'>+</span>
                </h4>
                <p className='text-[11px] font-title tracking-[0.2em] uppercase mb-8 text-white/70'>Years Experience</p>

                <div className='flex items-center'>
                  <div className='relative w-[72px] h-[36px] mr-3 shrink-0'>
                    <div className='absolute left-0 top-0 w-9 h-9 rounded-full border-2 border-black2 overflow-hidden z-30'>
                      <Image src='/img/about/customers.png' alt='Customer' fill className='object-cover' />
                    </div>
                    <div className='absolute left-4 top-0 w-9 h-9 rounded-full border-2 border-black2 overflow-hidden z-20'>
                      <Image src='/img/about/customers.png' alt='Customer' fill className='object-cover object-right' />
                    </div>
                    <div className='absolute left-8 top-0 w-9 h-9 rounded-full border-2 border-black2 overflow-hidden z-10'>
                      <Image
                        src='/img/about/customers.png'
                        alt='Customer'
                        fill
                        className='object-cover object-bottom'
                      />
                    </div>
                  </div>
                  <span className='text-xs sm:text-sm font-body font-medium'>12M+ Customers</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: 40% Width */}
          <div className='w-full lg:w-[40%] lg:pl-10 pt-8 lg:pt-0 pb-10'>
            <div className='inline-flex items-center text-[12px] font-title font-bold tracking-widest uppercase mb-6 text-text'>
              <span className='text-main mr-2 text-lg leading-none font-normal'>⌜</span>
              ABOUT THE FIRM
              <span className='text-main ml-2 text-lg leading-none font-normal mt-[2px]'>⌝</span>
            </div>

            <h2 className='text-4xl lg:text-5xl font-title font-bold text-text mb-6 leading-[1.15]'>
              An Interior Design Firm with a Great <span className='text-main'>Mission</span> Behind
            </h2>

            <p className='body-base text-body mb-10'>
              In every project at Faren, the essence of tradition is evident. By integrating the disciplined aesthetics
              and thoughtful methodologies of our ancestors, we ensure that each structure is not only environmentally
              attuned but also rich in cultural significance. Our designs reflect a deep respect for the past, while
              embracing the innovations of the future.
            </p>

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-4 mb-10'>
              {services.map((service, i) => (
                <div key={i} className='flex items-center gap-4'>
                  {service.icon}
                  <span className='font-title font-bold text-text text-base sm:text-lg leading-tight'>
                    {service.name}
                  </span>
                </div>
              ))}
            </div>

            <div className='flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8 mt-12'>
              <a
                href='#'
                className='bg-black2 text-white px-8 py-4 rounded-full font-body text-sm font-medium hover:bg-main hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1'>
                Learn More
              </a>

              <div className='flex items-center gap-4 sm:border-l border-smoke sm:pl-8'>
                <div className='relative w-14 h-14 rounded-full overflow-hidden border border-smoke'>
                  <Image src='/img/about/founder.png' alt='Michel Smith' fill className='object-cover' />
                </div>
                <div>
                  <p className='font-title2 text-2xl text-text leading-none mb-1'>Michel Smith</p>
                  <p className='text-[10px] sm:text-[11px] font-title tracking-widest uppercase text-body'>
                    Founder of the company
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
