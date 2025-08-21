import { useAppDispatch, useAppSelector } from "@/app/hook"
import { AllDecCart, DecCart, delToCart, corzina, inCremCart } from "@/app/productSl"
import { Delete } from "lucide-react"
import { useEffect, useState } from "react"
import { Input } from "./ui/input"
import { Link } from "react-router-dom"
import { NumberTicker } from "./magicui/number-ticker"

const Corzina = () => {
  const dispatch = useAppDispatch()
  const { dataId } = useAppSelector(state => state.prod)

  const [load, setLoad] = useState(false)
  const [loadIn, setLoadIn] = useState({
    loading: false,
    id: null
  })

  const [loadInDe, setLoadDe] = useState({
    loading: false,
    id: null
  })

  useEffect(() => {
    dispatch(corzina())
  }, [dispatch])


  const subtotal = dataId?.productsInCart?.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  ) || 0;

  return (
    <div>
      <div className="xl:w-[85%] w-[95%] m-auto mt-20 mb-10 overflow-x-auto">
        <table className="w-full table-fixed border-collapse rounded-2xl shadow-md min-w-[600px]">
          <thead className="bg-gray-100 dark:bg-gray-800">
            <tr>
              <th className="text-left p-3 font-semibold w-1/4">Product</th>
              <th className="text-left p-3 font-semibold w-1/4">Price</th>
              <th className="text-left p-3 font-semibold w-1/4">Quantity</th>
              <th className="text-left p-3 font-semibold w-1/4">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {load ? (
              <tr>
                <td colSpan={4} className="text-center p-6">
                  <span className="w-6 h-6 border-2 border-blue-500 border-t-transparent rounded-full animate-spin inline-block"></span>
                </td>
              </tr>
            ) : (
              dataId?.productsInCart?.map((elI) => (
                <tr
                  key={elI.id}
                  className="border-b hover:bg-gray-50 dark:hover:bg-gray-700 transition"
                >
                  <td className="p-3">
                    <div className="flex items-center gap-4 justify-start flex-wrap">
                      <span className="font-medium">{elI.product.productName}</span>
                      <img
                        src={`http://37.27.29.18:8002/images/${elI.product.image}`}
                        alt=""
                        className="w-20 h-20 rounded-xl object-cover mix-blend-multiply dark:mix-blend-overlay shadow-sm"
                      />
                    </div>
                  </td>
                  <td className="p-3 font-medium">{elI.product.price} $</td>
                  <td className="p-3 flex items-center gap-2">
                    <button
                      disabled={load}
                      onClick={async () => {
                        setLoadDe({ loading: true, id: elI.id })
                        await dispatch(DecCart(elI.id))
                        dispatch(corzina())
                        setLoadDe({ loading: false, id: null })
                      }
                      }
                      className="w-8 border rounded-md px-2 py-1 text-center focus:ring-2 focus:ring-blue-400 dark:bg-gray-900 dark:border-gray-600 disabled:opacity-50"
                    >
                      {loadInDe.loading && loadInDe.id == elI.id ?
                        <span className="w-3 h-3 border-2 border-blue-500 border-t-transparent rounded-full animate-spin inline-block"></span>
                        : "-"
                      }
                    </button>
                    <span className="w-8 text-center font-medium">{elI.quantity}</span>
                    <button
                      disabled={load}
                      onClick={async () => {
                        setLoadIn({ loading: true, id: elI.id })
                        await dispatch(inCremCart(elI.id))
                        dispatch(corzina())
                        setLoadIn({ loading: false, id: null })
                      }}
                      className="w-8 border rounded-md px-2 py-1 text-center focus:ring-2 focus:ring-blue-400 dark:bg-gray-900 dark:border-gray-600 disabled:opacity-50"
                    >
                      {loadIn.loading && loadIn.id === elI.id ? (
                        <span className="w-3 h-3 border-2 border-blue-500 border-t-transparent rounded-full animate-spin inline-block"></span>
                      ) : (
                        "+"
                      )}
                    </button>
                  </td>
                  <td className="p-3">
                    <div className="flex gap-2 items-center">
                      <span className="font-semibold text-blue-600 dark:text-blue-400 xl:text-[15px] sm:text-[12px]">
                        <NumberTicker
                          value={elI.product.price * elI.quantity}
                          duration={100} // давомнокӣ ms
                          format={(val) => `$${val}`} // формат рақам
                        />
                      </span>
                      <Delete
                        onClick={async () => {
                          setLoad(true)
                          await dispatch(delToCart(elI.id))
                          await dispatch(corzina())
                          setLoad(false)
                        }}
                        className="cursor-pointer text-gray-500 hover:text-red-600 transition"
                      />
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>

        <div className="flex items-center justify-between flex-wrap mt-[50px]">
          <ul>
            <Link to={"/"}>
              <button disabled={load} className="border rounded-[6px] p-[10px_30px] font-[500] disabled:opacity-50">
                Return To Shop
              </button>
            </Link>
          </ul>
          <div className="w-[30%] flex items-center justify-between">
            <button
              disabled={load}
              onClick={async () => {
                setLoad(true)
                await dispatch(corzina())
                setLoad(false)
              }}
              className="border rounded-[6px] w-[45%] py-[10px] font-[500] disabled:opacity-50"
            >
              Update Cart
            </button>
            <button
              disabled={load}
              onClick={async () => {
                setLoad(true)
                await dispatch(AllDecCart())
                await dispatch(corzina())
                setLoad(false)
              }}
              className="border rounded-[6px] w-[45%] py-[10px] font-[500] text-red-600 border-red-800 disabled:opacity-50"
            >
              Remove all
            </button>
          </div>
        </div>

        {/* Cart total */}
        <div className="flex justify-between mt-[100px] mb-[140px]">
          <form className="w-full">
            <div className="xl:w-[35%] flex items-center sm:w-[100%] justify-between ml-[10px]">
              <Input className="w-[60%]" placeholder="Coupon Code" />
              <button className="border border-red-700 h-[33px] w-[30%]">Apply</button>
            </div>
          </form>
          <div className="w-[40%] max-w-md border border-gray-300 dark:border-gray-700 rounded-2xl p-6 bg-white dark:bg-gray-900 shadow-md transition duration-300 hover:shadow-lg">
            <h1 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Cart Total</h1>

            <div className="flex items-center justify-between text-gray-700 dark:text-gray-300 mb-2">
              <span>Subtotal:</span>
              <span className="font-medium">${subtotal}</span>
            </div>

            <div className="flex items-center justify-between text-gray-700 dark:text-gray-300 mb-2">
              <span>Shipping:</span>
              <span className="text-green-600 font-medium">Free</span>
            </div>

            <hr className="my-3 border-gray-300 dark:border-gray-700" />

            <div className="flex items-center justify-between">
              <span className="font-bold text-xl text-gray-900 dark:text-gray-100">Total:</span>
              <span className="text-lg font-semibold text-[#DB4444]">${subtotal}</span>
            </div>

            <button disabled={load} className="w-full bg-[#DB4444] text-white py-3 mt-6 rounded-xl font-medium transition duration-300 hover:bg-red-600 active:scale-95 disabled:opacity-50">
              {load ? "Processing..." : "Proceed to Checkout"}
            </button>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Corzina
