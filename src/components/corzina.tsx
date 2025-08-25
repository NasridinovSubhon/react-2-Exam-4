import { useAppDispatch, useAppSelector } from "@/app/hook"
import { AllDecCart, DecCart, delToCart, corzina, inCremCart } from "@/app/productSl"
import { Delete } from "lucide-react"
import { useEffect, useState } from "react"
import { Input } from "./ui/input"
import { Link } from "react-router-dom"
import { NumberTicker } from "./magicui/number-ticker"

const Corzina = () => {
  const dispatch = useAppDispatch()
  const { dataId: dataIId } = useAppSelector(state => state.prod)
  const dataId = dataIId as any
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
    (acc: number, item: any) => acc + item.product.price * item.quantity,
    0
  ) || 0;



  return (
    <div>
      <div className="xl:w-[85%] w-[95%] m-auto mt-20 mb-10 ">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse rounded-2xl shadow-md min-w-[700px] overflow-hidden">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                <th className="text-left p-4 font-semibold">Product</th>
                <th className="text-left p-4 font-semibold">Price</th>
                <th className="text-left p-4 font-semibold">Quantity</th>
                <th className="text-left p-4 font-semibold">Subtotal</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {load ? (
                <tr>
                  <td colSpan={4} className="text-center p-8">
                    <span className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin inline-block"></span>
                  </td>
                </tr>
              ) : (
                dataId?.productsInCart?.map((elI: any) => (
                  <tr
                    key={elI.id}
                    className="hover:bg-gray-50 dark:hover:bg-gray-900 transition"
                  >
                    <td className="p-4">
                      <div className="flex items-center gap-4">
                        <img
                          src={`http://37.27.29.18:8002/images/${elI.product.image}`}
                          alt={elI.product.productName}
                          className="w-20 h-20 rounded-xl object-cover shadow-sm border"
                        />
                        <span className="font-medium text-gray-800 dark:text-gray-200">
                          {elI.product.productName}
                        </span>
                      </div>
                    </td>


                    <td className="p-4 font-medium text-gray-700 dark:text-gray-300">
                      {elI.product.price} $
                    </td>


                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <button
                          disabled={load}
                          onClick={async () => {
                            setLoadDe({ loading: true, id: elI.id })
                            await dispatch(DecCart(elI.id))
                            dispatch(corzina())
                            setLoadDe({ loading: false, id: null })
                          }}
                          className="w-8 h-8 flex items-center justify-center border rounded-md
                             bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700
                             focus:ring-2 focus:ring-blue-400 disabled:opacity-50 transition"
                        >
                          {loadInDe.loading && loadInDe.id == elI.id ? (
                            <span className="w-3 h-3 border-2 border-blue-500 border-t-transparent rounded-full animate-spin inline-block"></span>
                          ) : (
                            "-"
                          )}
                        </button>

                        <span className="w-8 text-center font-semibold text-gray-800 dark:text-gray-200">
                          {elI.quantity}
                        </span>

                        <button
                          disabled={load}
                          onClick={async () => {
                            setLoadIn({ loading: true, id: elI.id })
                            await dispatch(inCremCart(elI.id))
                            dispatch(corzina())
                            setLoadIn({ loading: false, id: null })
                          }}
                          className="w-8 h-8 flex items-center justify-center border rounded-md
                             bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700
                             focus:ring-2 focus:ring-blue-400 disabled:opacity-50 transition"
                        >
                          {loadIn.loading && loadIn.id === elI.id ? (
                            <span className="w-3 h-3 border-2 border-blue-500 border-t-transparent rounded-full animate-spin inline-block"></span>
                          ) : (
                            "+"
                          )}
                        </button>
                      </div>
                    </td>

                    <td className="p-4">
                      <div className="flex gap-3 items-center">
                        <span className="font-semibold text-blue-600 dark:text-blue-400">
                          <NumberTicker value={elI.product.price * elI.quantity} />
                        </span>
                        <Delete
                          onClick={async () => {
                            setLoad(true)
                            await dispatch(delToCart(elI.id))
                            await dispatch(corzina())
                            setLoad(false)
                          }}
                          className="cursor-pointer text-gray-400 hover:text-red-600 transition"
                        />
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>


        <div className="flex items-center justify-between flex-wrap mt-[50px]">
          <ul>
            <Link to={"/"}>
              <button disabled={load} className="border rounded-[6px] xl:p-[10px_30px] sm:p-[6px_14px] font-[500] disabled:opacity-50 xl:text-[15px] sm:text-[14px]">
                Return To Shop
              </button>
            </Link>
          </ul>
          <div className="xl:w-[30%] sm:w-[60%] flex items-center justify-between">
            <button
              disabled={load}
              onClick={async () => {
                setLoad(true)
                await dispatch(corzina())
                setLoad(false)
              }}
              className="border rounded-[6px] xl:text-[15px] sm:text-[13px] xl:w-[45%] sm:w-[48%] xl:py-[10px] sm:py-[7px] font-[500] disabled:opacity-50"
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
              className="border xl:text-[15px] sm:text-[13px] rounded-[6px] xl:w-[45%] sm:w-[48%] xl:py-[10px] sm:py-[7px] font-[500] text-red-600 border-red-800 disabled:opacity-50"
            >
              Remove all
            </button>
          </div>
        </div>


        <div className="flex justify-between mt-[100px] mb-[140px] xl:flex-nowrap sm:flex-wrap">
          <form className="w-full">
            <div className="xl:w-[35%] flex items-center sm:w-[100%] justify-between xl:ml-[10px] sm:ml-0 ">
              <Input className="w-[60%] sm:m-auto xl:m-0 " placeholder="Coupon Code" />
              <button className="border border-red-700 h-[33px] w-[30%]">Apply</button>
            </div>
          </form>
          <div className="xl:w-[40%] sm:w-[100%] xl:mt-0 sm:mt-[50px] max-w-md border border-gray-300 dark:border-gray-700 rounded-2xl p-6 bg-white dark:bg-gray-900 shadow-md transition duration-300 hover:shadow-lg">
            <h1 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Cart Total</h1>

            <div className="flex items-center justify-between text-gray-700 dark:text-gray-300 mb-2">
              <span>Subtotal:</span>
              <NumberTicker value={subtotal} className="text-md font-medium" />
            </div>

            <div className="flex items-center justify-between text-gray-700 dark:text-gray-300 mb-2">
              <span>Shipping:</span>
              <span className="text-green-600 font-medium">Free</span>
            </div>

            <hr className="my-3 border-gray-300 dark:border-gray-700" />

            <div className="flex items-center justify-between">
              <span className="font-bold text-xl text-gray-900 dark:text-gray-100">Total:</span>
              <NumberTicker value={subtotal} className="text-lg font-semibold text-[#DB4444]" />
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
