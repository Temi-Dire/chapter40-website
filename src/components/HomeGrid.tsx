const HomeGrid = () => {
  return (
    <section className="grid grid-cols-2 gap-2 px-[20px] max-w-[1440px] mx-auto w-full xl:px-[40px] 3xl:px-[58px] py-[50px]">
      <div className="w-full h-full relative">
        <img src="/assets/images/dress3.png" alt="" />
        <button
          className="px-4 bg-white bg-opacity-30 absolute bottom-3 left-1/2 -translate-x-1/2 font-playfair uppercase text-[15px]"
          type="button"
        >
          bags
        </button>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div className="relative flex justify-center">
          <img src="/assets/images/bag1.png" alt="" />
          <button
            className="px-4 bg-white bg-opacity-30 absolute bottom-3 left-1/2 -translate-x-1/2 font-playfair uppercase text-[15px]"
            type="button"
          >
            bags
          </button>
        </div>
        <div className="relative flex justify-center -z-10">
          <img src="/assets/images/bag2.png" alt="" />
          <button
            className="px-4 bg-white bg-opacity-30 absolute bottom-3 left-1/2 -translate-x-1/2 font-playfair uppercase text-[15px]"
            type="button"
          >
            bags
          </button>
        </div>
        <div className="relative flex justify-center -z-10">
          <img src="/assets/images/bag3.png" alt="" />
          <button
            className="px-4 bg-white bg-opacity-30 absolute bottom-3 left-1/2 -translate-x-1/2 font-playfair uppercase text-[15px]"
            type="button"
          >
            bags
          </button>
        </div>
        <div className="relative flex justify-center -z-10">
          <img src="/assets/images/bag4.png" alt="" />
          <button
            className="px-4 bg-white bg-opacity-30 absolute bottom-3 left-1/2 -translate-x-1/2 font-playfair uppercase text-[15px]"
            type="button"
          >
            bags
          </button>
        </div>
      </div>
    </section>
  );
}

export default HomeGrid