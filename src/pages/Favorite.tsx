import { useNavigate } from "react-router-dom";
import useStore from "../store/State";
import FavoriteCard from "../components/FavoriteCard";
import Navbar from "../components/Navbar";
import FooterSection from "../sections/footer";

const Favorite = () => {
  const { favorites } = useStore();
  const navigate = useNavigate();

  // const totalFavorites = () => {
  //   let sum = 0;
  //   for (let i = 0; i < favorites.length; i++) {
  //     sum += favorites[i].quantity;
  //   }
  //   return sum;
  // };

  return (
    <>
      <Navbar />

      <div className="flex my-12 justify-center flex-col px-4 sm:px-10 xl:px-[250px]">
        {favorites.length !== 0 ? (
          <>
            <div className="flex flex-col">
              {" "}
              <p className=" text-lg font-semibold mb-2">
                Saved Items({favorites.length})
              </p>
              {favorites.map((favorite) => (
                <FavoriteCard
                  key={favorite.id}
                  desc={favorite.desc}
                  price={favorite.price}
                  id={favorite.id}
                />
              ))}
            </div>
          </>
        ) : (
          <div className="flex items-center flex-col mt-5">
            <div className=" bg-slate-100 inline  p-6 rounded-full mb-4">
              <img className="" src="/assets/wishlist.png" />
            </div>
            <p className="mb-4 font-medium">You haven't saved any items yet!</p>
            <button
              className=" bg-darkPrimary text-white px-4 py-3"
              onClick={() => navigate("/shop")}
            >
              Continue shopping
            </button>
          </div>
        )}
      </div>

      <FooterSection />
    </>
  );
};

export default Favorite;
