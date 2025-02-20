import React from 'react'

const Transactions = () => {
  return (
    <section className="h-screen bg-[#040718] text-white px-20 pt-40">
      <div className="mb-32">
        <h1 className="text-5xl font-bold uppercase mb-2">Минулі угоди</h1>
        <p className="text-sm font-normal text-[#3fde8c]">· Онлайн</p>
      </div>
      <div className="flex gap-5 justify-center overflow-hidden">
        <div className="w-[299px] h-[209px] bg-[#6A54FF] px-4 py-1 rounded">
          <h1 className="font-medium text-xl uppercase mb-1">NEAR/USDT</h1>
          <p className="text-sm font-medium text-[#a798ff] mb-14">
            SPOT · 1 мин. назад
          </p>

          <h2 className="font-medium text-sm uppercase text-[#d2cbfd] mb-1">
            Прибуток
          </h2>
          <p className="text-3xl font-medium text-[#36fe9f] mb-3">58.6206%</p>

          <div className="flex items-center justify-between">
            <p className="font-medium text-sm uppercase text-[#d2cbfd]">
              Ціль 4
            </p>
            <p className="text-sm font-medium text-[#a798ff]">
              Дата входа 06.10.2022
            </p>
          </div>
        </div>
        <div className="w-[299px] h-[209px] bg-[#6A54FF] px-4 py-1 rounded">
          <h1 className="font-medium text-xl uppercase mb-1">BTC/USDT</h1>
          <p className="text-sm font-medium text-[#a798ff] mb-14">
            SPOT · 1 мин. назад
          </p>

          <h2 className="font-medium text-sm uppercase text-[#d2cbfd] mb-1">
            Прибуток
          </h2>
          <p className="text-3xl font-medium text-[#36fe9f] mb-3">6.02%</p>

          <div className="flex items-center justify-between">
            <p className="font-medium text-sm uppercase text-[#d2cbfd]">
              Ціль 3
            </p>
            <p className="text-sm font-medium text-[#a798ff]">
              Дата входа 06.10.2022
            </p>
          </div>
        </div>
        <div className="w-[299px] h-[209px] bg-[#6A54FF] px-4 py-1 rounded">
          <h1 className="font-medium text-xl uppercase mb-1">ETH/USDT</h1>
          <p className="text-sm font-medium text-[#a798ff] mb-14">
            SPOT · 1 мин. назад
          </p>

          <h2 className="font-medium text-sm uppercase text-[#d2cbfd] mb-1">
            Прибуток
          </h2>
          <p className="text-3xl font-medium text-[#36fe9f] mb-3">16.3%</p>

          <div className="flex items-center justify-between">
            <p className="font-medium text-sm uppercase text-[#d2cbfd]">
              Ціль 4
            </p>
            <p className="text-sm font-medium text-[#a798ff]">
              Дата входа 06.10.2022
            </p>
          </div>
        </div>
        <div className="w-[299px] h-[209px] bg-[#6A54FF] px-4 py-1 rounded">
          <h1 className="font-medium text-xl uppercase mb-1">NEAR/USDT</h1>
          <p className="text-sm font-medium text-[#a798ff] mb-14">
            SPOT · 1 мин. назад
          </p>

          <h2 className="font-medium text-sm uppercase text-[#d2cbfd] mb-1">
            Прибуток
          </h2>
          <p className="text-3xl font-medium text-[#36fe9f] mb-3">0.963%</p>

          <div className="flex items-center justify-between">
            <p className="font-medium text-sm uppercase text-[#d2cbfd]">
              Ціль 4
            </p>
            <p className="text-sm font-medium text-[#a798ff]">
              Дата входа 06.10.2022
            </p>
          </div>
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
