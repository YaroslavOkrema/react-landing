import React from 'react'

const About = () => {
  return (
    <section
      id="about"
      className="h-auto bg-white px-6 sm:px-10 md:px-20 pt-20 pb-20 md:pt-40 md:pb-40"
    >
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold uppercase mb-6 md:mb-10 text-left">
            Про компанію
          </h1>
          <p className="w-full md:w-1/2 mb-4 md:mb-6 text-left">
            Ми досвідчена команда, для якої трейдинг - професія. TradeBlade є
            авторизованим офіційним брокером біржі Binance.
          </p>
          <p className="w-full md:w-1/2 text-left">
            Він надає користувачам безліч переваг, таких як вища швидкість
            синхронізації API і можливість створити обліковий запис Binance
            через платформу TradeBlade всього в 1 клік.
          </p>
        </div>
        <div className="mt-10 md:mt-0">
          <div className="w-full sm:w-[400px] md:w-[630px] h-auto md:h-[236px] bg-[#6a54ff] rounded p-6 md:p-8">
            <h1 className="text-xl md:text-3xl font-medium text-center text-white mb-6 md:mb-10">
              Спробуйте зараз і отримайте 5 днів безкоштовного користування
            </h1>
            <div className="relative w-full">
              <input
                type="email"
                className="bg-[#4a3bb2] text-sm text-white py-2 px-4 pl-10 pr-16 rounded w-full h-[50px] placeholder:text-sm uppercase"
                placeholder="Введіть email"
              />
              <button className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-[#59e0fe] rounded text-sm font-normal uppercase text-[#211a4e] py-2 px-4 w-[120px] sm:w-[165px] h-[40px] sm:h-[52px] md:right-0 transition-all duration-300 border-2 border-transparent hover:bg-[#133447] hover:text-[#59e0fe] hover:border-[#59e0fe]">
                Спробувати
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
