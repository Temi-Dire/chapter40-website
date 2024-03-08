import useStore from "../State";
import FavoriteCard from "../components/FavoriteCard";
import Navbar from "../components/Navbar";
import FooterSection from "../sections/footer";

const Favorite = () => {
  const { favorites } = useStore();

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
              {/* Centering wrapper */}
              <p className="">Saved Items({favorites.length})</p>
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
          <div>
            <p>No items have been saved</p>
          </div>
        )}
      </div>

      <FooterSection />
    </>
  );
};

export default Favorite;
