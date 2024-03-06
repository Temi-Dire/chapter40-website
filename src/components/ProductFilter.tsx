import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

interface ProductFilter {
  category: string;
  filterState: boolean;
  onCategoryChange: (category: string) => void;
  handleFilterMenu: () => void;
}

const ProductFilter: React.FC<ProductFilter> = ({
  category,
  onCategoryChange,
  handleFilterMenu,
  filterState
}) => {
  const categories = ["all", "jewelries", "gowns", "trousers", "skirts", "shirts"];

  return (
    <div className="text-sm sm:text-base grid gap-1 relative">
      <button
        onClick={handleFilterMenu}
        className="flex gap-[2px] items-center justify-between border-[1px] border-black-500 rounded-[5px] h-fit p-[8px] w-[145px]"
      >
        <span className="text-[13px] font-playfair">
          sort by: {category.toLowerCase() !== "all" ? category : "featured"}
        </span>
        <KeyboardArrowDownIcon />
      </button>
      <div
        className={`shadow-md bg-white absolute z-30 rounded-md w-full top-[45px] left-0 grid gap-2 transition-all duration-300 ease-in-out p-[8px]  border-black-500 ${
          filterState
            ? "p-4 opacity-100 block border-[0.2px]"
            : "p-0 h-0 opacity-0 hidden"
        }`}
      >
        {categories.map((cat) => (
          <button
            className="text-left hover:cursor-pointer hover:font-bold capitalize font-playfair"
            type="button"
            key={cat}
            value={cat}
            onClick={() => onCategoryChange(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductFilter;
