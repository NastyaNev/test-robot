import React from "react";
import "./Dpad.scss";

function Dpad({ title, apiRequest }) {
  return (
    <div className="d_pad">
      <h3 className="d_pad__title">{title}</h3>
      <div className="d_pad__container">
        <svg
          width="325"
          height="325"
          viewBox="17 8 325 325"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Frame 6" filter="url(#filter0_d_11_1808)">
            <g id="Union">
              <mask id="path-1-inside-1_11_1808" fill="white">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M235.516 22.9395C235.516 17.4501 231.066 13 225.577 13H138.789C133.299 13 128.849 17.45 128.849 22.9395V109.91C128.849 115.399 124.399 119.849 118.91 119.849L32.4874 119.849C26.998 119.849 22.5479 124.299 22.5479 129.789L22.5479 216.577C22.5479 222.066 26.998 226.516 32.4874 226.516H118.91C124.399 226.516 128.849 230.966 128.849 236.455V323.061C128.849 328.55 133.299 333 138.789 333H225.577C231.066 333 235.516 328.55 235.516 323.061V236.455C235.516 230.966 239.966 226.516 245.455 226.516H332.608C338.098 226.516 342.548 222.066 342.548 216.577V129.789C342.548 124.299 338.098 119.849 332.608 119.849L245.455 119.849C239.966 119.849 235.516 115.399 235.516 109.91V22.9395Z"
                />
              </mask>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M235.516 22.9395C235.516 17.4501 231.066 13 225.577 13H138.789C133.299 13 128.849 17.45 128.849 22.9395V109.91C128.849 115.399 124.399 119.849 118.91 119.849L32.4874 119.849C26.998 119.849 22.5479 124.299 22.5479 129.789L22.5479 216.577C22.5479 222.066 26.998 226.516 32.4874 226.516H118.91C124.399 226.516 128.849 230.966 128.849 236.455V323.061C128.849 328.55 133.299 333 138.789 333H225.577C231.066 333 235.516 328.55 235.516 323.061V236.455C235.516 230.966 239.966 226.516 245.455 226.516H332.608C338.098 226.516 342.548 222.066 342.548 216.577V129.789C342.548 124.299 338.098 119.849 332.608 119.849L245.455 119.849C239.966 119.849 235.516 115.399 235.516 109.91V22.9395Z"
                fill="#242424"
              />
              <path
                d="M245.455 119.849V126.516V119.849ZM332.608 119.849V113.183V119.849ZM138.789 19.6667H225.577V6.33333H138.789V19.6667ZM135.516 109.91V22.9395H122.183V109.91H135.516ZM32.4874 126.516L118.91 126.516V113.183L32.4874 113.183L32.4874 126.516ZM29.2146 216.577L29.2146 129.789H15.8813L15.8813 216.577H29.2146ZM118.91 219.849H32.4874V233.183H118.91V219.849ZM135.516 323.061V236.455H122.183V323.061H135.516ZM225.577 326.333H138.789V339.667H225.577V326.333ZM228.849 236.455V323.061H242.183V236.455H228.849ZM332.608 219.849H245.455V233.183H332.608V219.849ZM335.881 129.789V216.577H349.215V129.789H335.881ZM245.455 126.516L332.608 126.516V113.183L245.455 113.183V126.516ZM228.849 22.9395V109.91H242.183V22.9395H228.849ZM245.455 113.183C243.648 113.183 242.183 111.717 242.183 109.91H228.849C228.849 119.081 236.284 126.516 245.455 126.516V113.183ZM349.215 129.789C349.215 120.617 341.78 113.183 332.608 113.183V126.516C334.416 126.516 335.881 127.981 335.881 129.789H349.215ZM332.608 233.183C341.78 233.183 349.215 225.748 349.215 216.577H335.881C335.881 218.384 334.416 219.849 332.608 219.849V233.183ZM242.183 236.455C242.183 234.648 243.648 233.183 245.455 233.183V219.849C236.284 219.849 228.849 227.284 228.849 236.455H242.183ZM225.577 339.667C234.748 339.667 242.183 332.232 242.183 323.061H228.849C228.849 324.868 227.384 326.333 225.577 326.333V339.667ZM122.183 323.061C122.183 332.232 129.617 339.667 138.789 339.667V326.333C136.981 326.333 135.516 324.868 135.516 323.061H122.183ZM118.91 233.183C120.717 233.183 122.183 234.648 122.183 236.455H135.516C135.516 227.284 128.081 219.849 118.91 219.849V233.183ZM15.8813 216.577C15.8813 225.748 23.3161 233.183 32.4874 233.183V219.849C30.6799 219.849 29.2146 218.384 29.2146 216.577H15.8813ZM32.4874 113.183C23.3161 113.183 15.8813 120.617 15.8813 129.789H29.2146C29.2146 127.981 30.6799 126.516 32.4874 126.516L32.4874 113.183ZM122.183 109.91C122.183 111.717 120.717 113.183 118.91 113.183V126.516C128.081 126.516 135.516 119.081 135.516 109.91H122.183ZM225.577 19.6667C227.384 19.6667 228.849 21.1319 228.849 22.9395H242.183C242.183 13.7682 234.748 6.33333 225.577 6.33333V19.6667ZM138.789 6.33333C129.617 6.33333 122.183 13.7681 122.183 22.9395H135.516C135.516 21.132 136.981 19.6667 138.789 19.6667V6.33333Z"
                fill="url(#paint0_radial_11_1808)"
                mask="url(#path-1-inside-1_11_1808)"
              />
            </g>
            <g id="btn">
              <rect
                id="Rectangle 5"
                x="144.215"
                y="33.0229"
                width="76.6667"
                height="76.6667"
                rx="6.66667"
                fill="url(#paint1_linear_11_1808)"
              />
              <rect
                className="d_pad__container__button"
                onClick={() => apiRequest("fw")}
                id="Rectangle 9"
                x="154.215"
                y="43.0229"
                width="56.6667"
                height="56.6667"
                rx="6.66667"
                fill="url(#paint2_linear_11_1808)"
              />
            </g>
            <g id="btn_2">
              <rect
                id="Rectangle 5_2"
                x="144.215"
                y="233.023"
                width="76.6667"
                height="76.6667"
                rx="6.66667"
                fill="url(#paint3_linear_11_1808)"
              />
              <rect
                className="d_pad__container__button"
                onClick={() => apiRequest("bk")}
                id="Rectangle 9_2"
                x="154.215"
                y="243.023"
                width="56.6667"
                height="56.6667"
                rx="6.66667"
                fill="url(#paint4_linear_11_1808)"
              />
            </g>
            <g id="btn_3">
              <rect
                id="Rectangle 5_3"
                x="40.8813"
                y="134.689"
                width="76.6667"
                height="76.6667"
                rx="6.66667"
                fill="url(#paint5_linear_11_1808)"
              />
              <rect
                className="d_pad__container__button"
                onClick={() => apiRequest("lf")}
                id="Rectangle 9_3"
                x="50.8813"
                y="144.689"
                width="56.6667"
                height="56.6667"
                rx="6.66667"
                fill="url(#paint6_linear_11_1808)"
              />
            </g>
            <g id="btn_4">
              <rect
                id="Rectangle 5_4"
                x="250.881"
                y="134.689"
                width="76.6667"
                height="76.6667"
                rx="6.66667"
                fill="url(#paint7_linear_11_1808)"
              />
              <rect
                className="d_pad__container__button"
                onClick={() => apiRequest("rt")}
                id="Rectangle 9_4"
                x="260.881"
                y="144.689"
                width="56.6667"
                height="56.6667"
                rx="6.66667"
                fill="url(#paint8_linear_11_1808)"
              />
            </g>
            <g id="Frame 18">
              <g id="Rectangle 5_5">
                <rect
                  x="145.881"
                  y="133.023"
                  width="76.6667"
                  height="76.6667"
                  rx="38.3333"
                  fill="url(#paint9_linear_11_1808)"
                />
                <rect
                  x="145.881"
                  y="133.023"
                  width="76.6667"
                  height="76.6667"
                  rx="38.3333"
                  fill="url(#paint10_linear_11_1808)"
                />
              </g>
              <g id="Rectangle 9_5">
                <rect
                  x="155.881"
                  y="143.023"
                  width="56.6667"
                  height="56.6667"
                  rx="28.3333"
                  fill="#222222"
                />
                <rect
                  x="155.881"
                  y="143.023"
                  width="56.6667"
                  height="56.6667"
                  rx="28.3333"
                  fill="url(#paint11_linear_11_1808)"
                />
              </g>
            </g>
          </g>
          <defs>
            <filter
              id="filter0_d_11_1808"
              x="-0.363811"
              y="0.575659"
              width="365.276"
              height="364.728"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="9.93947" />
              <feGaussianBlur stdDeviation="11.1819" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_11_1808"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_11_1808"
                result="shape"
              />
            </filter>
            <radialGradient
              id="paint0_radial_11_1808"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(182.274 173.274) rotate(90) scale(160.274)"
            >
              <stop stopColor="#B0B0B0" />
              <stop offset="1" stopColor="#858585" />
            </radialGradient>
            <linearGradient
              id="paint1_linear_11_1808"
              x1="182.548"
              y1="33.0229"
              x2="182.548"
              y2="109.69"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#1B1A1A" />
              <stop offset="1" stopColor="#363434" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_11_1808"
              x1="182.548"
              y1="43.0229"
              x2="182.548"
              y2="99.6896"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#3B3939" />
              <stop offset="1" stopColor="#222222" stopOpacity="0.7" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_11_1808"
              x1="182.548"
              y1="233.023"
              x2="182.548"
              y2="309.69"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#1B1A1A" />
              <stop offset="1" stopColor="#363434" />
            </linearGradient>
            <linearGradient
              id="paint4_linear_11_1808"
              x1="182.548"
              y1="243.023"
              x2="182.548"
              y2="299.69"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#3B3939" />
              <stop offset="1" stopColor="#222222" stopOpacity="0.7" />
            </linearGradient>
            <linearGradient
              id="paint5_linear_11_1808"
              x1="79.2146"
              y1="134.689"
              x2="79.2146"
              y2="211.356"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#1B1A1A" />
              <stop offset="1" stopColor="#363434" />
            </linearGradient>
            <linearGradient
              id="paint6_linear_11_1808"
              x1="79.2146"
              y1="144.689"
              x2="79.2146"
              y2="201.356"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#3B3939" />
              <stop offset="1" stopColor="#222222" stopOpacity="0.7" />
            </linearGradient>
            <linearGradient
              id="paint7_linear_11_1808"
              x1="289.215"
              y1="134.689"
              x2="289.215"
              y2="211.356"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#1B1A1A" />
              <stop offset="1" stopColor="#363434" />
            </linearGradient>
            <linearGradient
              id="paint8_linear_11_1808"
              x1="289.215"
              y1="144.689"
              x2="289.215"
              y2="201.356"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#3B3939" />
              <stop offset="1" stopColor="#222222" stopOpacity="0.7" />
            </linearGradient>
            <linearGradient
              id="paint9_linear_11_1808"
              x1="184.215"
              y1="133.023"
              x2="184.215"
              y2="209.69"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#171717" />
              <stop offset="1" stopColor="#171717" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint10_linear_11_1808"
              x1="184.215"
              y1="133.023"
              x2="184.215"
              y2="209.69"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#1B1A1A" />
              <stop offset="1" stopColor="#363434" />
            </linearGradient>
            <linearGradient
              id="paint11_linear_11_1808"
              x1="184.215"
              y1="143.023"
              x2="184.215"
              y2="199.69"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#3B3939" />
              <stop offset="1" stopColor="#222222" stopOpacity="0.7" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

export default Dpad;
