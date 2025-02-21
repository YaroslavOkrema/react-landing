const Numbers = () => {
  return (
    <section
      id="numbers"
      className="flex flex-col md:flex-row justify-between items-center w-full h-auto md:h-[220px] bg-white px-6 md:px-20 py-10 md:py-0 text-center md:text-left"
    >
      <div className="mb-6 md:mb-0">
        <h1 className="text-4xl md:text-5xl font-bold text-left">ЦИФРИ</h1>
        <p className="text-sm md:text-base font-normal text-[#7d7d7d]">
          Вересень 2022
        </p>
      </div>
      <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
        <h1 className="text-xs md:text-sm font-normal uppercase">
          Торгового прибутку
        </h1>
        <p className="text-5xl md:text-6xl font-medium text-[#6A54FF]">2756%</p>
      </div>
      <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
        <h1 className="text-xs md:text-sm font-normal uppercase">
          ф'ючерсних і спотових угод
        </h1>
        <p className="text-5xl md:text-6xl font-medium text-[#6A54FF]">67</p>
      </div>
      <div className="flex flex-col items-center md:items-start">
        <h1 className="text-xs md:text-sm font-normal uppercase">
          прибуток підписників
        </h1>
        <p className="text-5xl md:text-6xl font-medium text-[#6A54FF]">
          375000
        </p>
      </div>
    </section>
  )
}

export default Numbers
