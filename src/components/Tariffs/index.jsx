import React from 'react'

const Tariffs = () => {
  return (
    <section className="h-screen bg-[#040718] text-white flex items-center justify-center">
      <div>
        <div>
          <h1 className="text-5xl font-bold uppercase mb-12">тарифи</h1>
        </div>
        <div className="flex bg-[#2A1B5D] rounded-lg p-1 w-[413px] h-[52px] mb-12">
          <button className="flex-1 py-2 rounded-lg text-lg font-normal bg-[#5DDCFF] text-black">
            СПОТ
          </button>
          <button className="flex-1 py-2 rounded-lg text-lg font-normal text-[#5DDCFF]">
            ФЬЮЧЕРС
          </button>
        </div>
        <div className="flex gap-4">
          <div className="h-[556px] w-[413px] border border-[#6a54ff] rounded-xl px-4">
            <div>
              <h1 className="text-3xl font-medium uppercase mt-7 mb-10">
                STANDART
              </h1>
              <ul>
                <li className="text-normal font-normal border-b border-dashed border-gray-400 pb-2 mb-2.5">
                  ✓ Ручна торгівля
                </li>
                <li className="text-normal font-normal border-b border-dashed border-gray-400 pb-2 mb-2.5">
                  ✓ Автоматичне або напівавтоматичне копіювання угод
                </li>
                <li className="text-normal font-normal border-b border-dashed border-gray-400 pb-2 mb-2.5">
                  ✓ Особистий кабінет зі статистикою
                </li>
                <li className="text-normal font-normal border-b border-dashed border-gray-400 pb-2 mb-24">
                  ✓ Середньострокові угоди з рівнями набору портфеля
                </li>
              </ul>
              <div className="flex items-center justify-between mb-6">
                <div className="relative inline-block">
                  <div className="text-4xl font-normal text-white">$234</div>
                  <span className="absolute top-[-10px] right-[-40px] text-sm text-green-400">
                    -35%
                  </span>
                </div>
                <div className="w-[128px] h-[36px] bg-[#353945] text-center">
                  12 месяцев
                </div>
              </div>
              <div>
                <button className="bg-[#59e0fe] rounded text-normal font-normal uppercase text-[#211a4e] py-2 px-4 w-full h-[52px]">
                  Спробувати
                </button>
              </div>
            </div>
          </div>
          <div className="h-[556px] w-[413px] border bg-[#6a54ff] border-[#6a54ff] rounded-xl px-4">
            <div>
              <h1 className="text-3xl font-medium uppercase mt-7 mb-10">VIP</h1>
              <ul>
                <li className="text-normal font-normal border-b border-dashed border-gray-400 pb-2 mb-2.5">
                  ✓ Ручний трейдинг
                </li>
                <li className="text-normal font-normal border-b border-dashed border-gray-400 pb-2 mb-2.5">
                  ✓ Автоматичне або напівавтоматичне копіювання угод
                </li>
                <li className="text-normal font-normal border-b border-dashed border-gray-400 pb-2 mb-2.5">
                  ✓ Особистий кабінет зі статистикою
                </li>
                <li className="text-normal font-normal border-b border-dashed border-gray-400 pb-2">
                  ✓ Короткострокові, середньострокові та інвест угоди
                </li>
                <li className="text-normal font-normal border-b border-dashed border-gray-400 pb-2">
                  ✓ Доступ у Vip чат із командою
                </li>
                <li className="text-normal font-normal border-b border-dashed border-gray-400 pb-2 mb-7">
                  ✓ Наш авторський курс із трейдингу
                </li>
              </ul>
              <div className="flex items-center justify-between mb-6">
                <div className="relative inline-block">
                  <div className="text-4xl font-normal text-white">$534</div>
                  <span className="absolute top-[-10px] right-[-40px] text-sm text-green-400">
                    -35%
                  </span>
                </div>
                <div className="w-[128px] h-[36px] bg-[#353945] text-center">
                  12 месяцев
                </div>
              </div>
              <div>
                <button className="bg-[#59e0fe] rounded text-normal font-normal uppercase text-[#211a4e] py-2 px-4 w-full h-[52px]">
                  Спробувати
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Tariffs
