import React from 'react'

const Transactions = () => {
  return (
      <section className="min-h-screen bg-[#040718] text-white px-5 sm:px-10 md:px-20 pt-20 sm:pt-32">
        <div className="mb-10 sm:mb-20">
          <h1 className="text-3xl sm:text-5xl font-bold uppercase mb-2">Прошедшие сделки</h1>
          <p className="text-xs sm:text-sm font-normal text-[#3fde8c] flex items-center">● Онлайн</p>
        </div>
        <div className="w-full overflow-x-auto flex justify-start md:justify-center">
          <div className="flex gap-5 min-w-max">
            {[
              { pair: "NEAR/USDT", profit: "58.6206%", target: "Цель 4" },
              { pair: "BTC/USDT", profit: "6.02%", target: "Цель 3" },
              { pair: "ETH/USDT", profit: "16.3%", target: "Цель 4" },
              { pair: "NEAR/USDT", profit: "0.963%", target: "Цель 4" }
            ].map((trade, index) => (
                <div key={index} className="relative w-[299px] h-auto bg-[#6A54FF] px-4 py-4 rounded-lg shadow-lg">
                  <h1 className="font-medium text-lg sm:text-xl uppercase mb-1">{trade.pair}</h1>
                  <p className="text-xs sm:text-sm font-medium text-[#a798ff] mb-5 sm:mb-14">SPOT · 1 мин. назад</p>

                  <h2 className="font-medium text-xs sm:text-sm uppercase text-[#d2cbfd] mb-1">Прибыль</h2>
                  <p className="text-2xl sm:text-3xl font-medium text-[#36fe9f] mb-3">{trade.profit} ↑</p>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
                    <p className="font-medium text-xs sm:text-sm uppercase text-[#d2cbfd]">{trade.target}</p>
                    <p className="text-xs sm:text-sm font-medium text-[#a798ff]">Дата входа 06.10.2022</p>
                  </div>
                  <div className="absolute top-0 right-0 w-16 h-16 bg-[#5f73a5] opacity-10 rounded-tr-[40px]"></div>
                </div>
            ))}
          </div>
        </div>
        <div className="flex items-center max-w-screen-md mx-auto my-10">
          <div className="w-1/3 h-0.5 bg-[#5f73a5]"></div>
          <div className="w-2/3 h-0.5 bg-[#1e243e]"></div>
        </div>
      </section>
  )
}

export default Transactions
