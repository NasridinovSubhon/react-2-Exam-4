import { useAppDispatch, useAppSelector } from "@/app/hook"
import { delToCart, getId } from "@/app/productSl"
import { Delete } from "lucide-react"
import { useEffect, useState } from "react"



const GetId = () => {


  const dispatch = useAppDispatch()

  const { dataId } = useAppSelector(state => state.prod)

  useEffect(() => {
    dispatch(getId())
  }, [])

  const [price, setPrice] = useState<{ [id: string]: number }>({});

  const handleChange = (id: string, price: number, quanty: number) => {
    setPrice(prev => ({
      ...prev,
      [id]: price * quanty
    }))
  }

  return (
    <div>
      <div className="xl:w-[85%] m-auto sm:w-[95%] mt-[80px] mb-30" >
        <table className="w-full border-collapse rounded-2xl overflow-hidden shadow-md">
          <thead className="bg-gray-100 dark:bg-gray-800">
            <tr>
              <th className="text-left p-3 font-semibold">Product</th>
              <th className="text-left p-3 font-semibold">Price</th>
              <th className="text-left p-3 font-semibold">Quantity</th>
              <th className="text-left p-3 font-semibold">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {dataId?.productsInCart?.map((elI) => (
              <tr
                key={elI.id}
                className="border-b hover:bg-gray-50 dark:hover:bg-gray-700 transition  "
              >

                <td className="p-3">
                  <div className="flex items-center gap-4 sm:flex-wrap xl:flex-nowrap ">
                    <span className="font-medium">{elI.product.productName}</span>
                    <img
                      src={`http://37.27.29.18:8002/images/${elI.product.image}`}
                      alt=""
                      className="w-[80px] h-[80px] rounded-xl object-cover  mix-blend-multiply dark:mix-blend-overlay shadow-sm"
                    />
                  </div>
                </td>
                <td className="p-3 font-medium">{elI.product.price} $</td>
                <td className="p-3">
                  <input
                    type="number"
                    min={1}
                    defaultValue={1}
                    onChange={(e) =>
                      handleChange(
                        elI.id,
                        elI.product.price,
                        Number(e.target.value)
                      )
                    }
                    className="w-[60px] border rounded-md px-2 py-1 text-center focus:ring-2 focus:ring-blue-400 dark:bg-gray-900 dark:border-gray-600"
                  />
                </td>
                <td className="p-3 ">
                  <div className="flex gap-2 items-center  " >
                    <span className="font-semibold text-blue-600 dark:text-blue-400 xl:text-[15px]  sm:text-[12px] ">
                      {price[elI.id] ?? elI.product.price} $
                    </span>
                    <Delete
                      onClick={async () => {
                        await dispatch(delToCart(elI.id));
                        dispatch(getId());
                      }}
                      className="cursor-pointer text-gray-500 hover:text-red-600 transition" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </div>
  )
}

export default GetId
