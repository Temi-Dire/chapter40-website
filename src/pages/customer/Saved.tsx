import { useNavigate } from "react-router";
import useFavoritesStore from "../../store/favorites";

const Saved = () => {
  const { favorites, removeFromFavorites } = useFavoritesStore();
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-white h-fit w-full rounded-md">
        <p className="p-4">Saved Items</p>
        <hr />
        <div className="p-4">
          <div className="border border-slate-400 rounded-md">
            <p className="p-4 font-medium">FAVORITES({favorites.length})</p>
            <hr />
            <div className="p-4 flex justify-between">
              <div className="w-full">
                {favorites.length !== 0 ? (
                  favorites.map((item) => (
                    <div className="flex border border-slate-400 rounded-md p-4 w-full mb-3">
                      <img
                        className="w-28 h-28 object-cover mr-2 lg:mr-4"
                        src="/assets/images/dress1.png"
                      />
                      <div className="w-44 lg:w-full flex flex-col justify-between font-montserrat text-[10px] xl:text-base">
                        <p>{item.desc}</p>
                        <div>
                          <p>Available</p>
                          <p>{item.price}</p>
                        </div>
                        <button
                          className="bg-[#36254B] py-1 px-6 text-white w-fit xl:text-[15px]"
                          onClick={() => removeFromFavorites(item.id)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="flex items-center flex-col mt-5">
                    <div className=" bg-slate-100 inline  p-6 rounded-full mb-4">
                      <img className="" src="/assets/wishlist.png" />
                    </div>
                    <p className="mb-4 font-medium">
                      You haven't saved any items yet!
                    </p>
                    <button
                      className=" bg-darkPrimary text-white px-4 py-3"
                      onClick={() => navigate("/shop")}
                    >
                      Continue shopping
                    </button>
                  </div>
                )}
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
