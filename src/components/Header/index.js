import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <section className="h-screen bg-[#040718] text-white sm:px-10 md:px-20">
      <nav className="flex items-center justify-between px-4 py-4 relative md:mb-40">
        <div className="logo cursor-pointer w-[100px] md:w-[131px] h-[50px] md:h-[64px]">
          <img src="/img/logo.png" alt="logo" />
        </div>

        <div className="hidden md:flex text-sm text-gray-400 uppercase font-medium space-x-4 md:space-x-10">
          <a
            className="transition-all duration-300 hover:text-white"
            href="#numbers"
          >
            Цифри
          </a>
          <a
            className="transition-all duration-300 hover:text-white"
            href="#transactions"
          >
            Угоди онлайн
          </a>
          <a
            className="transition-all duration-300 hover:text-white"
            href="#about"
          >
            Про компанію
          </a>
          <a className="transition-all duration-300 hover:text-white" href="#">
            Як почати
          </a>
          <a
            className="transition-all duration-300 hover:text-white"
            href="#tariffs"
          >
            Тарифи
          </a>
          <a className="transition-all duration-300 hover:text-white" href="#">
            Відгуки
          </a>
          <a
            className="transition-all duration-300 hover:text-white"
            href="#faq"
          >
            FAQ
          </a>
        </div>

        <div className="hidden md:flex space-x-3">
          <button className="bg-[#133447] w-[86px] h-[42px] text-sm font-medium text-[#57E1FF] border-2 border-[#57E1FF] py-1 px-3 rounded transition-all duration-300 hover:bg-[#57E1FF] hover:text-[#133447]">
            Вхід
          </button>
          <button className="bg-[#133447] w-[146px] h-[42px] text-sm font-medium text-[#57E1FF] border-2 border-[#57E1FF] py-1 px-3 rounded transition-all duration-300 hover:bg-[#57E1FF] hover:text-[#133447]">
            Реєстрація
          </button>
        </div>

        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <X className="w-8 h-8 text-white" />
          ) : (
            <Menu className="w-8 h-8 text-white" />
          )}
        </button>

        {menuOpen && (
          <div className="absolute top-0 left-0 w-full h-screen bg-[#6C4BFF] text-white flex flex-col items-start justify-center space-y-6 z-50 uppercase px-3">
            <button
              className="absolute top-4 right-6 text-white"
              onClick={() => setMenuOpen(false)}
            >
              <X className="w-8 h-8" />
            </button>

            <a className="text-lg font-medium" href="#">
              Цифри
            </a>
            <a className="text-lg font-medium" href="#">
              Угоди онлайн
            </a>
            <a className="text-lg font-medium" href="#">
              Про компанію
            </a>
            <a className="text-lg font-medium" href="#">
              Як почати
            </a>
            <a className="text-lg font-medium" href="#">
              Тарифи
            </a>
            <a className="text-lg font-medium" href="#">
              Відгуки
            </a>
            <a className="text-lg font-medium" href="#">
              FAQ
            </a>

            <div className="flex space-x-4 mt-6">
              <button className="bg-[#57E1FF] text-black font-bold uppercase px-6 py-3 rounded shadow-md">
                Реєстрація
              </button>
              <button className="border-2 border-[#57E1FF] text-[#57E1FF] font-bold uppercase px-6 py-3 rounded shadow-md">
                Вхід
              </button>
            </div>
          </div>
        )}
      </nav>

      <div className="flex flex-col md:flex-row items-center text-center md:text-left px-2">
        <div>
          <h1 className="text-4xl md:text-6xl text-left w-full md:w-3/5 uppercase mb-3">
            миттєво копіюй угоди профі трейдерів
          </h1>
          <p className="text-base font-normal w-full md:w-2/5 text-gray-400 mb-3 text-left">
            Почни копіювати угоди з успішною командою професійних трейдерів в
            автоматичному режимі.
          </p>
          <div className="relative w-full md:w-[500px] h-[50px] md:h-[60px] mb-3">
            <input
              type="email"
              className="bg-[#211a4e] text-sm text-white py-2 px-4 pl-10 pr-16 rounded-lg w-full h-full placeholder:text-sm uppercase"
              placeholder="Введіть email"
            />
            <button className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-[#57E1FF] rounded text-sm uppercase text-[#211a4e] py-2 px-4 w-[90px] md:w-[109px] h-[40px] md:h-[52px] transition-all duration-300 border-2 border-transparent hover:bg-[#133447] hover:text-[#59e0fe] hover:border-[#59e0fe]">
              Почати
            </button>
          </div>
          <p className="text-sm font-normal w-full md:w-2/5 text-gray-600 text-left">
            5 днів безкоштовного користування
          </p>
        </div>
        <div className="mt-6 md:mt-0 md:ml-10 w-full md:w-1/2">
          <img
            className="w-full max-w-[300px] md:max-w-full mx-auto"
            src="/img/ETH.png"
            alt="ETH"
          />
        </div>
      </div>
    </section>
  )
}

export default Header
