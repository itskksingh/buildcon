import React from "react";

export function GoogleReviewBadge() {
  return (
    <>
      <div className='flex flex-col gap-1.5'>
        <div className='flex items-center gap-2'>
          {/* Google "G" logo */}
          <svg width='20' height='20' viewBox='0 0 48 48'>
            <path fill='#EA4335' d='M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z' />
            <path fill='#4285F4' d='M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z' />
            <path fill='#FBBC05' d='M10.53 28.59A14.5 14.5 0 0 1 9.5 24c0-1.59.28-3.14.77-4.59l-7.98-6.19A23.998 23.998 0 0 0 0 24c0 3.77.9 7.35 2.56 10.52l7.97-5.93z' />
            <path fill='#34A853' d='M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 5.93C6.51 42.62 14.62 48 24 48z' />
          </svg>
          <span className='font-body text-xs font-semibold text-text tracking-wide'>Google Reviews</span>
        </div>
        {/* Stars */}
        <div className='flex items-center gap-0.5'>
          {[...Array(5)].map((_, i) => (
            <span key={i} className='w-5 h-5 rounded-sm bg-main flex items-center justify-center'>
              <svg width='12' height='12' viewBox='0 0 24 24' fill='white'>
                <path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z' />
              </svg>
            </span>
          ))}
        </div>
        <span className='font-body text-xs text-body'>530+ Reviews</span>
      </div>
      <div className='w-px h-10 bg-border' />
      <span className='font-title text-4xl font-bold text-text'>4.8</span>
    </>
  );
}

export function PhoneBadge({ number, label = "Call Us Today" }: { number: string; label?: string }) {
  return (
    <>
      <div className='flex flex-col gap-1.5'>
        <div className='flex items-center gap-2'>
          <svg width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2.5' className='text-main'>
            <path strokeLinecap="round" strokeLinejoin="round" d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' />
          </svg>
          <span className='font-body text-xs font-semibold text-text tracking-wide'>{label}</span>
        </div>
        <div className='flex items-center gap-1.5'>
          <span className="relative flex h-2 w-2 ml-0.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className='font-body text-xs font-semibold text-text ml-1'>Available Now</span>
        </div>
        <span className='font-body text-xs text-body'>24/7 Expert Support</span>
      </div>
      <div className='w-px h-10 bg-border' />
      <span className='font-title text-2xl sm:text-3xl font-bold text-text tracking-wide whitespace-nowrap'>{number}</span>
    </>
  );
}

export function InstagramBadge({ handle, label = "Follow Us" }: { handle: string; label?: string }) {
  return (
    <>
      <div className='flex flex-col gap-1.5'>
        <div className='flex items-center gap-2'>
          <svg width="18" height="18" viewBox="0 0 24 24">
            <defs>
              <linearGradient id="ig-grad" x1="1" y1="0.5" x2="0" y2="0.5">
                <stop offset="0%" stopColor="#f09433"/>
                <stop offset="25%" stopColor="#e6683c"/>
                <stop offset="50%" stopColor="#dc2743"/>
                <stop offset="75%" stopColor="#cc2366"/>
                <stop offset="100%" stopColor="#bc1888"/>
              </linearGradient>
            </defs>
            <path fill="url(#ig-grad)" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
          </svg>
          <span className='font-body text-xs font-semibold text-text tracking-wide'>{label}</span>
        </div>
        <div className='flex items-center gap-1'>
          <div className="flex -space-x-1.5 ml-0.5">
            <div className="w-4 h-4 rounded-full border border-white bg-main"></div>
            <div className="w-4 h-4 rounded-full border border-white bg-gray-300"></div>
            <div className="w-4 h-4 rounded-full border border-white bg-orange-400"></div>
          </div>
          <span className='font-body text-xs font-semibold text-text ml-1'>Community</span>
        </div>
        <span className='font-body text-xs text-body'>Daily Updates</span>
      </div>
      <div className='w-px h-10 bg-border' />
      <span className='font-title text-2xl sm:text-3xl font-bold text-text tracking-wide whitespace-nowrap'>{handle}</span>
    </>
  );
}

export function AddressBadge({ address, label = "Headquarters" }: { address: string; label?: string }) {
  return (
    <>
      <div className='flex flex-col gap-1.5'>
        <div className='flex items-center gap-2'>
          <svg width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2.5' className='text-main'>
            <path strokeLinecap="round" strokeLinejoin="round" d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z' />
            <path strokeLinecap="round" strokeLinejoin="round" d='M15 11a3 3 0 11-6 0 3 3 0 016 0z' />
          </svg>
          <span className='font-body text-xs font-semibold text-text tracking-wide'>{label}</span>
        </div>
        <div className='flex items-center gap-1.5'>
          <span className="w-2 h-2 rounded-sm bg-orange-500 ml-0.5" />
          <span className='font-body text-xs font-semibold text-text'>Open Mon - Fri</span>
        </div>
        <span className='font-body text-xs text-body'>Global Operations</span>
      </div>
      <div className='w-px h-10 bg-border' />
      <span className='font-title text-xl sm:text-2xl font-bold text-text leading-tight max-w-[180px] sm:max-w-[220px]'>{address}</span>
    </>
  );
}
