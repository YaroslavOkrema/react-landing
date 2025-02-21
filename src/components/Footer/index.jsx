import React from 'react'

const Footer = () => {
  return (
    <footer className="h-auto bg-[#040718] flex items-center justify-between px-20 pt-3">
      <div>
        <h2 className="text-sm font-normal uppercase text-[#686a74] mb-60">
          Швидка навігація
        </h2>
        <nav>
          <div className="links text-sm text-gray-400 uppercase font-medium space-x-10">
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
              як почати
            </a>
            <a
              className="transition-all duration-300 hover:text-white"
              href="#"
            >
              тарифи
            </a>
            <a
              className="transition-all duration-300 hover:text-white"
              href="#"
            >
              відгуки
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

      <div className="h-[330px] border-l border-gray-600 mx-10"></div>

      <div>
        <div className="logo w-[131px] h-[64px] mb-60">
          <img src="/img/logo.png" alt="logo" />
        </div>
        <p className="text-sm font-normal text-[#686a74]">
          © 2022 TradeBlade. All rights reserved
        </p>
      </div>
    </footer>
  )
}

export default Footer
