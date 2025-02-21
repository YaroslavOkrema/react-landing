import React from 'react'

const Footer = () => {
  return (
    <footer className="h-auto bg-[#040718] flex flex-col md:flex-row items-center md:justify-between px-6 md:px-20 pt-3">
      <div className="w-full md:w-auto text-center md:text-left">
        <h2 className="text-xs md:text-sm font-normal uppercase text-[#686a74] mb-4 md:mb-60">
          Швидка навігація
        </h2>
        <nav>
          <div className="text-xs md:text-sm text-gray-400 uppercase font-medium md:space-x-10 flex flex-col md:flex-row items-center md:items-start">
            <a
              className="transition-all duration-300 hover:text-white"
              href="#"
            >
              Цифри
            </a>
            <a
              className="transition-all duration-300 hover:text-white"
              href="#"
            >
              Угоди онлайн
            </a>
            <a
              className="transition-all duration-300 hover:text-white"
              href="#"
            >
              Про компанію
            </a>
            <a
              className="transition-all duration-300 hover:text-white"
              href="#"
            >
              Як почати
            </a>
            <a
              className="transition-all duration-300 hover:text-white"
              href="#"
            >
              Тарифи
            </a>
            <a
              className="transition-all duration-300 hover:text-white"
              href="#"
            >
              Відгуки
            </a>
            <a
              className="transition-all duration-300 hover:text-white"
              href="#"
            >
              FAQ
            </a>
          </div>
        </nav>
      </div>

      <div className="hidden md:block h-[330px] border-l border-gray-600 mx-10"></div>

      <div className="w-full md:w-auto flex flex-col items-center md:items-start mt-6 md:mt-0">
        <div className="logo w-[131px] h-[64px] mb-4 md:mb-60">
          <img src={`${process.env.PUBLIC_URL}/img/logo.png`} alt="logo" />
        </div>
        <p className="text-xs md:text-sm font-normal text-[#686a74] text-center md:text-left">
          © 2022 TradeBlade. All rights reserved
        </p>
      </div>
    </footer>
  )
}

export default Footer
