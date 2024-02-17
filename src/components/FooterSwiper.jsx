import React, { useEffect } from "react"
import Glide from "@glidejs/glide"

export default function FooterSwiper() {
  useEffect(() => {
    const slider = new Glide(".glide-09", {
      type: "carousel",
      
      perView: 4,
      classes: {
        nav: {
          active: "[&>*]:bg-wuiSlate-700",
        },
      },
      breakpoints: {
        1024: {
          perView: 2,
        },
        640: {
          perView: 1,
          gap: 36,
        },
      },
    }).mount()

    return () => {
      slider.destroy()
    }
  }, [])

  return (
    <>
      {/*<!-- Component: Testimonial carousel --> */}
      <div className="glide-09 relative w-full">
        {/* <!-- Slides --> */}
        <div data-glide-el="track">
          <ul className=" my-8 mt-10  whitespace-no-wrap items-center flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
            <li>
              <img
                src="./images/f1.png"
                className="m-auto h-10 max-h-full w-auto max-w-full"
              />
            </li>
            <li>
              <img
                src="./images/f2.png"
                className="m-auto h-10 max-h-full w-auto max-w-full"
              />
            </li>
            <li>
              <img
                src="./images/f3.png"
                className="m-auto h-8 max-h-full w-auto max-w-full"
              />
            </li>
            <li>
              <img
                src="./images/f4.png"
                className="m-auto h-9 max-h-full w-auto max-w-full"
              />
            </li>
            <li>
              <img
                src="./images/f5.png"
                className="m-auto h-10 max-h-full w-auto max-w-full"
              />
            </li>
            <li>
              <img
                src="./images/f1.png"
                className="m-auto h-10 max-h-full w-auto max-w-full"
              />
            </li>
          </ul>
        </div>
        <div
          className="absolute left-0 top-1/2 flex h-0 w-full items-center justify-between px-4 "
          data-glide-el="controls"
        >
          <button
            className="inline-flex  h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-white/20 text-white transition duration-300 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
            data-glide-dir="<"
            aria-label="prev slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-5 w-5"
            >
              <title>prev slide</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
              />
            </svg>
          </button>
          <button
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-white/20 text-white transition duration-300 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
            data-glide-dir=">"
            aria-label="next slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-5 w-5"
            >
              <title>next slide</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
        </div>

      </div>
      {/*<!-- End Testimonial carousel --> */}
    </>
  )
}