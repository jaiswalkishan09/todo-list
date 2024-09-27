import React from "react";

function Dashbord() {
  return (
    <div className="p-2 sm:p-0">
      <button className="flex gap-2 items-center pt-[7.75px] pb-[7.75px] pl-[17px] pr-[17px] border border-[#2B2B2B]  rounded-[9999px] text-white hover:text-gray-200 transition-colors">
        Announcing Early Adopters Plan
        <svg
          width="13"
          height="12"
          viewBox="0 0 13 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.20487 6.66699H1.08887V5.33299H9.20487L5.47187 1.59999L6.42187 0.666992L11.7549 5.99999L6.42187 11.333L5.47187 10.4L9.20487 6.66699Z"
            fill="#FAFAFA"
          />
        </svg>
      </button>
      <div className="flex flex-col text-xl pt-[24px] sm:text-[40px]  font-extrabold text-white">
        <span className="pb-5">Master your day,</span>
        <span>effortlessly</span>
      </div>
      <div className="pt-[30px] text-[16px] text-[#B8B8B8]">
        Our app helps you stay on top of your tasks and manage your time
        effectively so you can focus on what matters most
      </div>
      <div className="flex mt-6 gap-3">
        <button className="w-fit p-3 border border-[#2B2B2B] rounded-md bg-white">
          Talk to us
        </button>
        <button className="w-fit p-3 border border-[#2B2B2B] rounded-md bg-white">
          Get Early Access
        </button>
        <div className="flex items-center gap-2">
          <svg
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13 0.8125C10.5895 0.8125 8.23322 1.52728 6.22899 2.86646C4.22477 4.20564 2.66267 6.10907 1.74022 8.33605C0.817781 10.563 0.576427 13.0135 1.04668 15.3777C1.51694 17.7418 2.67769 19.9134 4.38214 21.6179C6.08659 23.3223 8.2582 24.4831 10.6223 24.9533C12.9865 25.4236 15.437 25.1822 17.664 24.2598C19.8909 23.3373 21.7944 21.7752 23.1335 19.771C24.4727 17.7668 25.1875 15.4105 25.1875 13C25.1841 9.76872 23.899 6.67076 21.6141 4.3859C19.3292 2.10104 16.2313 0.815912 13 0.8125ZM13 2.6875C14.7163 2.68821 16.4053 3.11728 17.9139 3.93582C19.4225 4.75436 20.7029 5.93648 21.6391 7.375H13C11.8159 7.37633 10.6623 7.75067 9.70307 8.44487C8.74381 9.13907 8.02764 10.1178 7.65626 11.2422L4.95157 6.55469C5.91694 5.34746 7.14165 4.37299 8.53491 3.70355C9.92818 3.0341 11.4543 2.68683 13 2.6875ZM16.75 13C16.75 13.7417 16.5301 14.4667 16.118 15.0834C15.706 15.7001 15.1203 16.1807 14.4351 16.4645C13.7498 16.7484 12.9958 16.8226 12.2684 16.6779C11.541 16.5333 10.8728 16.1761 10.3484 15.6516C9.82391 15.1272 9.46675 14.459 9.32206 13.7316C9.17737 13.0042 9.25163 12.2502 9.53546 11.5649C9.81929 10.8797 10.2999 10.294 10.9166 9.88199C11.5333 9.46993 12.2583 9.25 13 9.25C13.9946 9.25 14.9484 9.64509 15.6517 10.3483C16.3549 11.0516 16.75 12.0054 16.75 13ZM2.68751 13C2.68556 11.3762 3.06955 9.77518 3.80782 8.32891L8.12852 15.8125C8.13555 15.8242 8.14376 15.8348 8.15079 15.8453C8.74629 16.8613 9.64567 17.6649 10.7221 18.1425C11.7986 18.6202 12.9978 18.748 14.1508 18.5078L11.4438 23.1953C9.0079 22.8201 6.7865 21.5862 5.18073 19.7165C3.57495 17.8468 2.69065 15.4646 2.68751 13ZM13.5496 23.2973L17.8715 15.8125C17.8809 15.7961 17.8879 15.7797 17.8973 15.7633C18.4771 14.7408 18.7211 13.562 18.595 12.3934C18.4688 11.2247 17.9788 10.1252 17.1941 9.25H22.6094C23.2026 10.7698 23.4267 12.4087 23.2633 14.032C23.1 15.6552 22.5538 17.2166 21.6697 18.5878C20.7856 19.9589 19.5888 21.1008 18.1776 21.9195C16.7664 22.7382 15.1811 23.2104 13.552 23.2973H13.5496Z"
              fill="#6994FD"
            />
          </svg>

          <svg
            width="26"
            height="27"
            viewBox="0 0 26 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M25.168 19.8738C25.0976 19.7132 24.984 19.5752 24.8398 19.4754C22.8512 18.109 22.4375 15.7781 22.4375 14.0625C22.4375 11.9918 24.016 10.1883 24.957 9.29649C25.0496 9.20888 25.1233 9.10331 25.1737 8.98625C25.2241 8.86918 25.2501 8.74307 25.2501 8.61563C25.2501 8.48818 25.2241 8.36207 25.1737 8.24501C25.1233 8.12794 25.0496 8.02238 24.957 7.93477C23.4711 6.53203 21.0101 5.625 18.6875 5.625C17.019 5.62628 15.3882 6.12084 14 7.04649C12.3806 5.96058 10.4334 5.4729 8.49337 5.66731C6.55331 5.86172 4.74163 6.72608 3.36991 8.11172C2.54987 8.9489 1.90645 9.94234 1.47786 11.033C1.04927 12.1237 0.844254 13.2895 0.874987 14.4609C0.921382 16.4382 1.36124 18.3865 2.16888 20.1919C2.97652 21.9973 4.13575 23.6237 5.57889 24.9762C6.44819 25.7975 7.59977 26.2535 8.79569 26.25H19.0707C19.71 26.2512 20.3428 26.1211 20.9298 25.8677C21.5169 25.6143 22.0456 25.2431 22.4832 24.777C23.2939 23.9045 23.9952 22.9364 24.5715 21.8941C25.3941 20.3906 25.2887 20.1563 25.168 19.8738ZM21.1098 23.4996C20.848 23.7775 20.532 23.9986 20.1812 24.1492C19.8304 24.2998 19.4524 24.3767 19.0707 24.375H8.79569C8.07941 24.3773 7.38965 24.1042 6.86913 23.6121C5.60593 22.4295 4.59106 21.0069 3.88382 19.4277C3.17657 17.8484 2.79112 16.144 2.74999 14.4141C2.72435 13.4949 2.88388 12.58 3.21908 11.7238C3.55429 10.8676 4.05831 10.0875 4.70116 9.43008C5.30177 8.81648 6.01931 8.32953 6.81135 7.99802C7.60339 7.66651 8.45387 7.49717 9.31249 7.5H9.40389C10.8644 7.51539 12.277 8.02234 13.4141 8.93906C13.5803 9.07219 13.787 9.14473 14 9.14473C14.213 9.14473 14.4196 9.07219 14.5859 8.93906C15.7473 8.00269 17.1956 7.49454 18.6875 7.5C20.1773 7.51729 21.6348 7.93632 22.9062 8.71289C21.3828 10.4145 20.5625 12.2836 20.5625 14.0625C20.5625 16.848 21.4578 19.0699 23.1617 20.543C22.6251 21.6231 21.9339 22.6191 21.1098 23.4996ZM14.0269 3.51563C14.2869 2.50865 14.8744 1.61672 15.697 0.980266C16.5195 0.343808 17.5303 -0.00104184 18.5703 2.3644e-06H18.6875C18.9361 2.3644e-06 19.1746 0.0987744 19.3504 0.27459C19.5262 0.450405 19.625 0.688862 19.625 0.937502C19.625 1.18614 19.5262 1.4246 19.3504 1.60041C19.1746 1.77623 18.9361 1.875 18.6875 1.875H18.5703C17.9467 1.87495 17.3408 2.08212 16.8479 2.46395C16.3549 2.84578 16.0028 3.38062 15.8469 3.98438C15.7847 4.22525 15.6294 4.43156 15.4151 4.55793C15.2009 4.68429 14.9452 4.72037 14.7043 4.65821C14.4634 4.59605 14.2571 4.44075 14.1307 4.22647C14.0044 4.0122 13.9683 3.7565 14.0305 3.51563H14.0269Z"
              fill="#6994FD"
            />
          </svg>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.3125 12.9375H12.9375C12.6889 12.9375 12.4504 13.0362 12.2746 13.2121C12.0988 13.3879 12 13.6263 12 13.875V20.6074C11.9998 20.8272 12.0767 21.04 12.2174 21.2088C12.3582 21.3776 12.5537 21.4916 12.7699 21.5308L22.1449 23.2347C22.2002 23.2451 22.2563 23.2502 22.3125 23.25C22.5611 23.25 22.7996 23.1512 22.9754 22.9754C23.1512 22.7996 23.25 22.5611 23.25 22.3125V13.875C23.25 13.6263 23.1512 13.3879 22.9754 13.2121C22.7996 13.0362 22.5611 12.9375 22.3125 12.9375ZM21.375 21.1887L13.875 19.8258V14.8125H21.375V21.1887ZM9.1875 12.9375H1.6875C1.43886 12.9375 1.2004 13.0362 1.02459 13.2121C0.848772 13.3879 0.75 13.6263 0.75 13.875V18.5625C0.750032 18.782 0.827118 18.9946 0.967818 19.1631C1.10852 19.3317 1.30391 19.4455 1.51992 19.4847L9.01992 20.8488C9.07525 20.8586 9.13131 20.8637 9.1875 20.864C9.43614 20.864 9.6746 20.7653 9.85041 20.5895C10.0262 20.4136 10.125 20.1752 10.125 19.9265V13.875C10.125 13.6263 10.0262 13.3879 9.85041 13.2121C9.6746 13.0362 9.43614 12.9375 9.1875 12.9375ZM8.25 18.8027L2.625 17.7797V14.8125H8.25V18.8027ZM22.9137 0.967947C22.8082 0.87989 22.6847 0.816087 22.5519 0.781054C22.419 0.74602 22.2801 0.740612 22.1449 0.765212L12.7699 2.47029C12.5539 2.50954 12.3585 2.62335 12.2178 2.79189C12.0771 2.96043 12 3.17301 12 3.39256V10.125C12 10.3736 12.0988 10.6121 12.2746 10.7879C12.4504 10.9637 12.6889 11.0625 12.9375 11.0625H22.3125C22.5611 11.0625 22.7996 10.9637 22.9754 10.7879C23.1512 10.6121 23.25 10.3736 23.25 10.125V1.68748C23.25 1.55024 23.2199 1.41466 23.1618 1.29034C23.1037 1.16601 23.019 1.05595 22.9137 0.967947ZM21.375 9.18748H13.875V4.1742L21.375 2.81131V9.18748ZM9.78867 3.35388C9.68322 3.26583 9.5597 3.20203 9.42685 3.16699C9.29401 3.13196 9.15509 3.12655 9.01992 3.15115L1.51992 4.51521C1.30391 4.55446 1.10852 4.66827 0.967818 4.83681C0.827118 5.00535 0.750032 5.21793 0.75 5.43748V10.125C0.75 10.3736 0.848772 10.6121 1.02459 10.7879C1.2004 10.9637 1.43886 11.0625 1.6875 11.0625H9.1875C9.43614 11.0625 9.6746 10.9637 9.85041 10.7879C10.0262 10.6121 10.125 10.3736 10.125 10.125V4.07342C10.125 3.93617 10.0949 3.8006 10.0368 3.67627C9.97868 3.55194 9.89398 3.44189 9.78867 3.35388ZM8.25 9.18748H2.625V6.22029L8.25 5.2031V9.18748Z"
              fill="#6994FD"
            />
          </svg>
        </div>
      </div>
      <div className="flex">
        <div className="relative w-[32px] h-[32px] mt-4">
          <img
            src="a.png"
            class="absolute top-0 left-0 w-[32px] h-[32px] rounded-[32px] shadow-md"
            alt="Image3"
          />

          <img
            src="b.png"
            class="absolute  left-4 w-[32px] h-[32px] rounded-32px shadow-md"
            alt="Image2"
          />
          <img
            src="c.png"
            class="absolute  left-8 w-[32px] h-[32px] rounded-32px shadow-md"
            alt="Image3"
          />
          <img
            src="d.png"
            class="absolute  left-12 w-[32px] h-[32px] rounded-32px shadow-md"
            alt="Image4"
          />
        </div>
        <div className="text-[18px] pl-16 pt-[16px] text-center text-[#B8B8B8]">
          Join our early adopters
        </div>
      </div>
    </div>
  );
}

export default Dashbord;
