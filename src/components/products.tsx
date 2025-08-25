import { memo, useEffect, useState } from "react";
import { Eye, Heart, Search, Filter } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { AddWishRed, adToCart, corzina, getByIdData, GetCat } from "@/app/productSl";
import { useAppDispatch, useAppSelector } from "@/app/hook";


// Define TypeScript interfaces

interface LocationState {
  categoryId: string;
  subCategoryId: string;
}

const Products = () => {
  const location = useLocation();
  const { categoryId, subCategoryId } = location.state as LocationState || { categoryId: "", subCategoryId: "" };
  const dispatch = useAppDispatch();

  const { dataById: products, dataCat: categories, dataWish } = useAppSelector((state) => state.prod);

  const [selectedCategory, setSelectedCategory] = useState<any>(categoryId || "");
  const [selectedSubCategory, setSelectedSubCategory] = useState<any>(subCategoryId || "");


  const [searchQuery, setSearchQuery] = useState<string>("");

  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    dispatch(getByIdData({ catId: selectedCategory, subId: selectedSubCategory }));
    dispatch(GetCat())
  }, [categoryId, subCategoryId, selectedCategory, selectedSubCategory]);


  const [ran, setRan] = useState(100)







  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="flex xl:w-[85%] sm:w-[95%] m-auto gap-10 sm:mt-[60px] xl:mt-[120px] mb-[120px] flex-wrap">

        <div className="sm:w-full xl:hidden flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Our Products</h2>
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm"
          >
            <Filter size={18} />
            <span>Filters</span>
          </button>
        </div>

        <div className={`xl:w-[20%] sm:w-full space-y-3 xl:block ${isFilterOpen ? 'block' : 'hidden'}`}>
          <div className="flex items-center gap-2 mb-3" >
            <h2 className="text-lg font-semibold  text-gray-800 dark:text-white">Categories</h2>
            <h1
              onClick={() => {
                setSelectedCategory("");
                setSelectedSubCategory("");
              }}
              className="cursor-pointer text-sm text-blue-600 dark:text-blue-400"
            >
              Clear
            </h1>
          </div>

          <div className="relative mb-4">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <input

              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
            />
          </div>

          <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 ">Categories</h3>
          <div className="overflow-y-auto h-[200px]" style={{ scrollbarColor: "transparent transparent" }} >

            {categories.filter((el) => searchQuery ? el?.categoryName.toLowerCase().includes(searchQuery.toLowerCase().trim()) : el).map((cat: any, i) => (
              <div
                key={i}
                className={`cursor-pointer py-2 px-3 rounded-lg transition ${selectedCategory === cat
                  ? "bg-blue-100 text-blue-700 font-medium dark:bg-blue-900 dark:text-blue-100"
                  : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                  }`}
                onClick={() => { setSelectedCategory(cat.id), setSelectedSubCategory("") }}
              >
                {cat.categoryName}
              </div>
            ))}
          </div>
          <div className="relative w-full">
            <input
              type="range"
              min={0}
              max={30000}
              value={ran}
              onInput={(e) => setRan(Number(e.currentTarget.value))}
              className="w-full"
            />
            <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
              {ran} $
            </span>
          </div>

        </div>

        <div className="xl:w-[76%] sm:w-full">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white hidden xl:block">Our Products</h2>
          <div className="mb-6 flex justify-between items-center">
            <p className="text-gray-600 dark:text-gray-400">
              Showing {products.length} of {products?.length} products
            </p>
          </div>
          {products.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 dark:text-gray-400">No products found. Try adjusting your filters.</p>
            </div>
          ) : (
            <div className="grid xl:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-6">
              {products.filter((el) => el.price < ran).map((product: any) => (
                <div
                  key={product.id}
                  className="group relative bg-white dark:bg-gray-400 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
                >
                  <div className="relative bg-[white] dark:bg-gray-300 py-8 rounded-lg">
                    <img
                      src={`http://37.27.29.18:8002/images/${product.image}`}
                      alt={product.productName}
                      className="w-[70%] mix-blend-multiply m-auto h-[220px] object-contain mb-6"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "https://via.placeholder.com/300x300?text=Product+Image";
                      }}
                    />

                    <div className="absolute top-3 right-3 flex flex-col gap-2">
                      <button className="rounded-full bg-white  shadow hover:bg-gray-100 transition text-black dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                        <button className={`p-2.5 rounded-full border transition-colors ${dataWish?.some((el: any) => el.id === product?.id)
                          ? "bg-red-100 border-red-200 text-red-600"
                          : "bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-red-300"}`}>
                          <Heart
                            className={`${dataWish?.some((el: any) => el.id === product.id) ? "text-red-600 fill-red-600" : "dark:text-white text-black "}`}
                            onClick={() => {
                              dispatch(AddWishRed(product))
                            }}
                          />
                        </button>

                      </button>
                      <Link to={"/info/" + product.id}>
                        <button className="bg-white dark:bg-gray-800 dark:text-white p-3 rounded-full hover:bg-gray-200 text-black transition">
                          <Eye />
                        </button>
                      </Link>
                    </div>

                    <button
                      onClick={() => { dispatch(adToCart(product.id)), dispatch(corzina()) }}
                      className="xl:opacity-0 group-hover:opacity-100 absolute bottom-0 w-full sm:opacity-100 rounded-b-lg bg-black text-white py-3 transition-all duration-300 hover:bg-gray-800 dark:bg-blue-600 dark:hover:bg-blue-700">
                      Add To Cart
                    </button>
                  </div>


                  <div className="p-4">
                    <h3 className="text-[16px] font-medium text-gray-800 dark:text-white truncate">
                      {product.productName}
                    </h3>
                    <p className="mt-1 text-[16px] font-semibold text-red-600 dark:text-red-400">
                      ${product.price.toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default memo(Products);
