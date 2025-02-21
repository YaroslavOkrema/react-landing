import React from 'react'

const Tariffs = () => {
  return (
    <section
      id="tariffs"
      className="min-h-screen bg-[#040718] text-white flex items-center justify-center px-4 md:px-0"
    >
      <div className="w-full max-w-md md:max-w-2xl">
        <h1 className="text-3xl font-bold uppercase text-center mt-2 md:text-left mb-8">
          Тарифи
        </h1>
        <div className="flex bg-[#2A1B5D] rounded-lg p-1 w-full md:w-[413px] mb-6">
          <button className="flex-1 py-2 rounded-lg text-lg font-normal bg-[#5DDCFF] text-black">
            СПОТ
          </button>
          <button className="flex-1 py-2 rounded-lg text-lg font-normal text-[#5DDCFF]">
            ФЬЮЧЕРС
          </button>
        </div>
        <div className="space-y-6 md:flex md:space-y-0 md:space-x-6">
          <div className="border border-[#6a54ff] rounded-xl p-4 md:w-1/2">
            <h1 className="text-2xl font-medium uppercase text-center mb-6">
              STANDART
            </h1>
            <ul className="space-y-2 mb-32">
              <li className="border-b border-dashed border-gray-400 pb-2">
                ✓ Ручний трейдинг
              </li>
              <li className="border-b border-dashed border-gray-400 pb-2">
                ✓ Автоматичне або напівавтоматичне копіювання угод
              </li>
              <li className="border-b border-dashed border-gray-400 pb-2">
                ✓ Особистий кабінет зі статистикою
              </li>
              <li className="border-b border-dashed border-gray-400 pb-2">
                ✓ Середньострокові угоди
              </li>
            </ul>
            <div className="flex items-center justify-between mb-4">
              <div className="relative inline-block text-3xl font-normal">
                $234
                <span className="absolute top-[-10px] right-[-30px] text-sm text-green-400">
                  -35%
                </span>
              </div>
              <div className="bg-[#353945] text-center px-4 py-1 rounded">
                12 місяців
              </div>
            </div>
            <button className="bg-[#59e0fe] w-full py-2 rounded text-[#211a4e] font-bold uppercase transition-all duration-300 border-2 border-transparent hover:bg-[#133447] hover:text-[#59e0fe] hover:border-[#59e0fe]">
              Спробувати
            </button>
          </div>
          <div className="bg-[#6a54ff] rounded-xl p-4 md:w-1/2">
            <h1 className="text-2xl font-medium uppercase text-center mb-6">
              VIP
            </h1>
            <ul className="space-y-2 mb-6">
              <li className="border-b border-dashed border-gray-400 pb-2">
                ✓ Ручний трейдинг
              </li>
              <li className="border-b border-dashed border-gray-400 pb-2">
                ✓ Автоматичне або напівавтоматичне копіювання угод
              </li>
              <li className="border-b border-dashed border-gray-400 pb-2">
                ✓ Особистий кабінет зі статистикою
              </li>
              <li className="border-b border-dashed border-gray-400 pb-2">
                ✓ Короткострокові, середньострокові та інвест угоди
              </li>
              <li className="border-b border-dashed border-gray-400 pb-2">
                ✓ Доступ у VIP чат
              </li>
              <li className="border-b border-dashed border-gray-400 pb-2">
                ✓ Авторський курс із трейдингу
              </li>
            </ul>
            <div className="flex items-center justify-between mb-4">
              <div className="relative inline-block text-3xl font-normal">
                $534
                <span className="absolute top-[-10px] right-[-30px] text-sm text-green-400">
                  -35%
                </span>
              </div>
              <div className="bg-[#353945] text-center px-4 py-1 rounded">
                12 місяців
              </div>
            </div>
            <button className="bg-[#59e0fe] w-full py-2 rounded text-[#211a4e] font-bold uppercase transition-all duration-300 border-2 border-transparent hover:bg-[#133447] hover:text-[#59e0fe] hover:border-[#59e0fe]">
              Спробувати
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Tariffs
