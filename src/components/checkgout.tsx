import { useAppDispatch, useAppSelector } from "@/app/hook"
import { AllDecCart, corzina } from "@/app/productSl"
import { useEffect, useState } from "react"
import { Input } from "./ui/input"
import { useNavigate } from "react-router-dom"
import { toast } from "sonner"

const Checkout = () => {

  const navigate = useNavigate()

  const { dataId: dataIId } = useAppSelector(state => state.prod)
  const dataId = dataIId as any
  const dispatch = useAppDispatch()

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    additionalInfo: '',
    city: '',
    phone: '',
    email: '',
    saveInfo: false,
    paymentMethod: 'bank',
    couponCode: ''
  })

  // State for form validation
  const [formErrors, setFormErrors] = useState({
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    phone: '',
    email: ''
  })

  useEffect(() => {
    dispatch(corzina())
  }, [dispatch])

  const subtotal = dataId?.productsInCart?.reduce(
    (acc: number, item: any) => acc + item.product.price * item.quantity,
    0
  ) || 0

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))

    if (formErrors[name as keyof typeof formErrors]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const validateForm = () => {
    const errors = {
      firstName: formData.firstName ? '' : 'First name is required',
      lastName: formData.lastName ? '' : 'Last name is required',
      address: formData.address ? '' : 'Address is required',
      city: formData.city ? '' : 'City is required',
      phone: formData.phone ? '' : 'Phone number is required',
      email: formData.email ?
        (/^\S+@\S+\.\S+$/.test(formData.email) ? '' : 'Invalid email format') :
        'Email is required'
    }
    setFormErrors(errors)
    return !Object.values(errors).some(error => error !== '')
  }



  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (validateForm()) {
      toast("Pokupka Proshla uspeshno")
      await dispatch(AllDecCart())
      await dispatch(corzina())
      navigate("/")
      setFormData({
        firstName: '',
        lastName: '',
        address: '',
        additionalInfo: '',
        city: '',
        phone: '',
        email: '',
        saveInfo: false,
        paymentMethod: 'bank',
        couponCode: ''
      })
    }
  }

  const inputClass = (error?: string) =>
    `p-3 border rounded-md dark:bg-gray-700 dark:text-white border-gray-300 dark:border-gray-600 ${error ? 'border-red-500' : ''}`

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 text-center">Checkout</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8 text-center">Complete your purchase with ease</p>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className={`lg:w-[60%] bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg`}  >
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 pb-2 border-b border-gray-200 dark:border-gray-700">
              Billing Details
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Input
                    className={inputClass(formErrors.firstName)}
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="First name"
                  />
                  {formErrors.firstName && <p className="text-red-500 text-sm mt-1">{formErrors.firstName}</p>}
                </div>
                <div>
                  <Input
                    className={inputClass(formErrors.lastName)}
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Last name"
                  />
                  {formErrors.lastName && <p className="text-red-500 text-sm mt-1">{formErrors.lastName}</p>}
                </div>
              </div>

              <Input
                className={inputClass(formErrors.address)}
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                placeholder="Street address"
              />
              {formErrors.address && <p className="text-red-500 text-sm mt-1">{formErrors.address}</p>}

              <Input
                className={inputClass()}
                type="text"
                name="additionalInfo"
                value={formData.additionalInfo}
                onChange={handleInputChange}
                placeholder="Apartment, floor, etc. (optional)"
              />

              <Input
                className={inputClass(formErrors.city)}
                type="text"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                placeholder="Town/City"
              />
              {formErrors.city && <p className="text-red-500 text-sm mt-1">{formErrors.city}</p>}

              <Input
                className={inputClass(formErrors.phone)}
                type="number"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Phone number"
              />
              {formErrors.phone && <p className="text-red-500 text-sm mt-1">{formErrors.phone}</p>}

              <Input
                className={inputClass(formErrors.email)}
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email address"
              />
              {formErrors.email && <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>}

              <div className="flex items-center pt-2">
                <input
                  type="checkbox"
                  name="saveInfo"
                  checked={formData.saveInfo}
                  onChange={handleInputChange}
                  style={{ accentColor: "red" }}
                  className="mr-3 w-4 h-4"
                />
              </div>

              <button
                type="submit"
                className="w-full mt-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white py-3 rounded-md font-medium transition-all shadow-md"
              >
                Place Order • ${subtotal.toFixed(2)}
              </button>
            </form>
          </div>

          <div className="lg:w-[40%] bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 pb-2 border-b border-gray-200 dark:border-gray-700">
              Order Summary
            </h3>

            <div className="border-b border-gray-200 dark:border-gray-700 pb-4 mb-4 max-h-[200px] overflow-y-auto">
              {dataId?.productsInCart?.map((e: any, index: number) => (
                <div key={index} className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <img
                      src={`http://37.27.29.18:8002/images/${e.product.image}`}
                      alt={e.product.productName}
                      className="w-16 h-16 mix-blend-multiply rounded-xl object-contain shadow-sm border"
                    />
                    <div className="ml-4">
                      <p className="font-medium text-gray-800 dark:text-white">{e.product.productName}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Qty: {e.quantity}</p>
                    </div>
                  </div>
                  <span className="font-medium text-gray-800 dark:text-white">
                    ${(e.product.price * e.quantity).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex items-center justify-between">
                <span className="text-gray-600 dark:text-gray-300">Subtotal:</span>
                <span className="font-medium text-gray-800 dark:text-white">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600 dark:text-gray-300">Shipping:</span>
                <span className="font-medium text-green-600">Free</span>
              </div>
              <div className="flex items-center justify-between text-lg font-bold pt-3 border-t border-gray-200 dark:border-gray-700">
                <span className="text-gray-800 dark:text-white">Total:</span>
                <span className="text-gray-800 dark:text-white">${subtotal.toFixed(2)}</span>
              </div>
            </div>

            <div className="mb-6">
              <div className="space-y-3 bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="bank"
                    checked={formData.paymentMethod === 'bank'}
                    onChange={handleInputChange}
                    className="accent-blue-600 w-5 h-5"
                  />
                  <div>
                    <label htmlFor="bank" className="cursor-pointer text-gray-800 dark:text-white">Credit/Debit Card</label>

                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="cash"
                    checked={formData.paymentMethod === 'cash'}
                    onChange={handleInputChange}
                    className="accent-blue-600 w-5 h-5"
                  />
                  <div>
                    <label htmlFor="cash" className="cursor-pointer text-gray-800 dark:text-white">Cash on Delivery</label>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="font-medium mb-3 text-gray-800 dark:text-white">Apply Coupon</h4>
              <div className="flex items-center gap-2">
                <Input
                  type="text"
                  name="couponCode"
                  value={formData.couponCode}
                  onChange={handleInputChange}
                  className="p-3 border-gray-300 dark:border-gray-600 rounded-md flex-1 dark:bg-gray-700 dark:text-white"
                  placeholder="Enter coupon code"
                />
                <button

                  className="bg-gray-800 text-white px-4 py-1.5 rounded-md hover:bg-gray-700 transition-colors whitespace-nowrap"
                >
                  Apply
                </button>
              </div>
            </div>



            <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-4">
              By completing your purchase you agree to our Terms of Service.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout
