import React from 'react'

const Header = () => {
  return (
    <section className="h-screen bg-[#040718] text-white px-20">
      <nav className="flex items-center justify-between px-4 py-4 mb-40">
        <div className="logo w-[131px] h-[64px]">
          <img src="/img/logo.png" alt="logo" />
        </div>
        <div className="links text-sm text-gray-400 uppercase font-medium space-x-10">
          <a className="transition-all duration-300 hover:text-white" href="#">
            Цифри
          </a>
          <a className="transition-all duration-300 hover:text-white" href="#">
            Угоди онлайн
          </a>
          <a className="transition-all duration-300 hover:text-white" href="#">
            Про компанію
          </a>
          <a className="transition-all duration-300 hover:text-white" href="#">
            як почати
          </a>
          <a className="transition-all duration-300 hover:text-white" href="#">
            тарифи
          </a>
          <a className="transition-all duration-300 hover:text-white" href="#">
            відгуки
          </a>
          <a className="transition-all duration-300 hover:text-white" href="#">
            FAQ
          </a>
        </div>
        <div className="btns space-x-3">
          <button className="bg-[#133447] w-[86px] h-[42px] text-sm font-medium text-[#57E1FF] border-2 border-[#57E1FF] py-2 px-4 rounded transition-all duration-300 hover:bg-[#57E1FF] hover:text-[#133447]">
            Вхід
          </button>
          <button className="bg-[#133447] w-[146px] h-[42px] text-sm font-medium text-[#57E1FF] border-2 border-[#57E1FF] py-2 px-4 rounded transition-all duration-300 hover:bg-[#57E1FF] hover:text-[#133447]">
            Реєстрація
          </button>
        </div>
      </nav>

      <div className="flex items-center">
        <div>
          <h1 className="text-6xl w-3/5 uppercase mb-3">
            миттєво копіюй угоди профі трейдерів
          </h1>
          <p className="text-base font-normal w-2/5 text-gray-400 mb-3">
            Почни копіювати угоди з успішною командою професійних трейдерів в
            автоматичному режимі.
          </p>
          <div className="relative w-[500px] h-[60px] mb-3">
            <input
              type="email"
              className="bg-[#211a4e] text-sm text-white py-2 px-4 pl-10 pr-16 rounded-lg w-full h-full placeholder:text-sm uppercase"
              placeholder="Введіть email"
            />
            <button className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-[#57E1FF] rounded text-sm uppercase text-[#211a4e] py-2 px-4 rounded-r-lg w-[109px] h-[52px]">
              Почати
            </button>
          </div>
          <p className="text-sm font-normal w-2/5 text-gray-600">
            5 днів безкоштовного користування
          </p>
        </div>
        <div className="transform -translate-y-20 -translate-x-20">
          <img src="/img/ETH.png" alt="ETH" />
        </div>
      </div>
    </section>
  )
}

export default Header
