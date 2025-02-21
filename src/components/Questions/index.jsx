import React from 'react'

const Questions = () => {
  return (
    <section
      id="faq"
      className="min-h-screen bg-white text-black px-4 sm:px-10 pt-20 sm:pt-40"
    >
      <div className="w-full max-w-[846px] mx-auto">
        <h1 className="text-3xl text-left sm:text-5xl font-bold uppercase mb-8 sm:mb-12 sm:text-left">
          найпоширеніші запитання
        </h1>
      </div>
      <div>
        <div className="w-full max-w-[846px] mx-auto">
          <div className="mb-2">
            <div className="bg-[#6A54FF] text-white text-lg sm:text-2xl font-normal p-4 flex justify-between items-center rounded-t-lg w-full">
              Що таке TradeBlade
              <span className="text-white">▲</span>
            </div>
            <div className="bg-[#6A54FF] text-[#e0d8ff] p-4 rounded-b-lg text-sm sm:text-base font-normal">
              <p className="mb-2 sm:mb-4">
                Ми досвідчена команда, для якої трейдинг - професія. TradeBlade
                є авторизованим офіційним брокером біржі Binance.
              </p>
              <p>
                Він надає користувачам багато переваг, таких як більш висока
                швидкість синхронізації API і можливість створити обліковий
                запис Binance через платформу TradeBlade всього в 1 клік.
              </p>
            </div>
          </div>

          <div className="mb-2">
            <div className="bg-gray-100 text-lg sm:text-2xl font-medium text-black p-4 flex justify-between items-center rounded-lg cursor-pointer transition-all duration-300 border-transparent hover:bg-[#6a54ff] hover:text-white">
              Що TradeBlade пропонує інвесторам
              <span className="text-gray-500 hover:text-white">▼</span>
            </div>
          </div>

          <div>
            <div className="bg-gray-100 text-lg sm:text-2xl font-medium text-black p-4 flex justify-between items-center rounded-lg cursor-pointer transition-all duration-300 border-transparent hover:bg-[#6a54ff] hover:text-white">
              Чи варто мені переказувати кошти в TradeBlade
              <span className="text-gray-500">▼</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Questions
