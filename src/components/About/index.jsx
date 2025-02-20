import React from 'react'

const About = () => {
  return (
    <section className="h-auto bg-white px-20 pt-40 pb-40">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-5xl font-bold uppercase mb-10">Про компанію</h1>
          <p className="w-1/2 mb-6">
            Ми досвідчена команда, для якої трейдинг - професія. TradeBlade є
            авторизованим офіційним брокером біржі Binance.
          </p>
          <p className="w-1/2">
            Він надає користувачам безліч переваг, таких як вища швидкість
            синхронізації API і можливість створити обліковий запис Binance
            через платформу TradeBlade всього в 1 клік.
          </p>
        </div>
        <div>
          <div className="w-[630px] h-[236px] bg-[#6a54ff] rounded">
            <h1 className="text-3xl font-medium text-center text-white pt-5 mb-10">
              Спробуйте зараз і отримайте 5 днів безкоштовного користування
            </h1>
            <div className="relative w-[500px] h-[60px] ml-16">
              <input
                type="email"
                className="bg-[#4a3bb2] text-sm text-white py-2 px-4 pl-10 pr-16 rounded w-full h-full placeholder:text-sm uppercase"
                placeholder="Введіть email"
              />
              <button className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-[#59e0fe] rounded text-normal font-normal uppercase text-[#211a4e] py-2 px-4 w-[165px] h-[52px]">
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
