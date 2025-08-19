import { memo, useEffect, useState } from "react";
import { Eye, Heart, Loader2, Search, Filter } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getByIdData, GetCat } from "@/app/productSl";


// Define TypeScript interfaces
interface Product {
  id: string;
  productName: string;
  price: number;
  image: string;
  category?: string;
  // Add other product properties as needed
}

interface LocationState {
  categoryId: string;
  subCategoryId: string;
}

const Products = () => {
  const location = useLocation();
  const { categoryId, subCategoryId } = location.state as LocationState;
  const dispatch = useDispatch<AppDispatch>();

  const { dataById: products, dataCat: categories } = useSelector((state: RootState) => state.prod);

  const [selectedCategory, setSelectedCategory] = useState(categoryId || "");
  const [selectedSubCategory, setSelectedSubCategory] = useState(subCategoryId || "");

  const [sortBy, setSortBy] = useState<string>("default");

  const [searchQuery, setSearchQuery] = useState<string>("");

  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    dispatch(getByIdData({ catId: selectedCategory, subId: selectedSubCategory }));
    dispatch(GetCat())
  }, [categoryId, subCategoryId, selectedCategory, selectedSubCategory]);



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
          <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Categories</h2>


          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
            />
          </div>


         

          <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Categories</h3>
          {categories.map((cat, i) => (
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

        {/* Products Grid */}
        <div className="xl:w-[76%] sm:w-full">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white hidden xl:block">Our Products</h2>

          {/* Results count */}
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
              {products.map((product) => (
                <div
                  key={product.id}
                  className="group relative bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
                >
                  <div className="relative bg-[#F5F5F5] dark:bg-gray-700 py-8 rounded-lg">
                    <img
                      src={`http://37.27.29.18:8002/images/${product.image}`}
                      alt={product.productName}
                      className="w-[70%] mix-blend-multiply m-auto h-[220px] object-contain mb-6"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "https://via.placeholder.com/300x300?text=Product+Image";
                      }}
                    />

                    {/* Action Buttons */}
                    <div className="absolute top-3 right-3 flex flex-col gap-2">
                      <button className="rounded-full bg-white p-2 shadow hover:bg-gray-100 transition text-black dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                        <Heart className="w-5 h-5" />
                      </button>
                      <button className="rounded-full bg-white p-2 shadow hover:bg-gray-100 transition text-black dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                        <Eye className="w-5 h-5" />
                      </button>
                    </div>


                    <button className="xl:opacity-0 group-hover:opacity-100 absolute bottom-0 w-full sm:opacity-100 rounded-b-lg bg-black text-white py-3 transition-all duration-300 hover:bg-gray-800 dark:bg-blue-600 dark:hover:bg-blue-700">
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
