const SavedProduct = () => {
  return (
    <>
      <div className="h-28 flex items-center mb-4">
        <img
          className="w-32 h-full object-cover mr-4"
          src="/assets/images/checkoutproduct.png"
          alt=""
        />
        <div className="flex justify-between w-full items-center h-full ">
          <div className="flex flex-col justify-between w-44 h-full ">
            <div className="font-playfair">
              Privé Contrast Collar cooperate Dress
            </div>
            <button className="bg-[#36254B] w-[125px] px-2 py-2 text-white">
              Add to Cart
            </button>
          </div>
          <div className="flex flex-col items-end justify-self-end">
            <div>$4000.00</div>
            <div className="underline text-[#667085] text-sm">Remove</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SavedProduct;
