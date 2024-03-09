const Saved = () => {
    return (
      <>
        <div className="bg-white h-fit w-full rounded-md">
          <p className="p-4">Saved Items</p>
          <hr />
          <div className="p-4">
            <div className="border border-slate-400 rounded-md w-96">
              <p className="p-4 font-medium">FAVORITES(4)</p>
              <hr />
              <div className="p-4 flex justify-between">
                <div className="flex">
                  <img
                    className="w-28 h-28 object-cover mr-2 lg:mr-4"
                    src="/assets/images/dress1.png"
                  />
                  <div className="w-44 lg:w-full flex flex-col justify-between font-montserrat">
                    <p>Privé Contrast Collar cooperate Dress</p>
                    <div>
                      <p>Quantity: 1</p>
                      <p>$30000</p>
                    </div>
                    {/* <button className="bg-[#36254B] py-1 px-6 text-white">Cancel Order</button> */}
                  </div>
                </div>
                {/* <p className="justify-self-end items-end w-fit">Track Order</p> */}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default Saved;
  